import { useEffect, useState } from "react";
import { getCoinChart } from "../../../api/cryptoApi";
import { mapTimeSeries } from "../../../utils/mapTimeSeries";
import type { CoinMarketChart } from "../../../types/crypto";

type UseCoinChartProps = {
    coinId: string | null;
    currency: string;
    days: number;
};

export const useCoinChart = ({coinId, currency, days}: UseCoinChartProps) => {
    const [data, setData] = useState<CoinMarketChart | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                if (!coinId) return;

                const chart = await getCoinChart(coinId, currency, days);
                setData(chart);
            } catch (err) {
                setError("Failed to fetch coin data!");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [coinId, currency, days]);

    return {
        price: data ? mapTimeSeries(data.prices) : [],
        marketCap: data ? mapTimeSeries(data.market_caps) : [],
        volume: data ? mapTimeSeries(data.total_volumes) : [],
        loading,
        error
    };
};