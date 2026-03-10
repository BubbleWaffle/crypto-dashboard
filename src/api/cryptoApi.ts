import { api } from "./httpClient";
import type { Coin, CoinMarketChart, CoinSearchResult, CoinSearchResponse } from "../types/crypto";

export const getCoins = async (ids: string[], currency: string): Promise<Coin[]> => {
    const { data } = await api.get<Coin[]>(`/coins/markets`,{
        params: {
            vs_currency: currency,
            ids: ids.join(",")
        }
    });

    return data;
};

export const getCoinChart = async (id: string, currency: string, days: number): Promise<CoinMarketChart> => {
    const { data } = await api.get<CoinMarketChart>(`/coins/${id}/market_chart`, {
        params: {
            vs_currency: currency,
            days: days
        }
    });

    return data;
};

export const getSearchCoin = async (query: string): Promise<CoinSearchResult[]> => {
    const { data } = await api.get<CoinSearchResponse>(`/search`, {
        params: {
            query
        }
    });

    return data.coins.slice(0, 5);
};