import { useState } from "react";
import CoinChart from "./components/PriceChart";
import TotalVolumesChart from "./components/TotalVolumesChart";
import { useCoinChart } from "./hooks/useCoinChart";
import TimeRangeSelector from "./components/TimeRangeSelector";
import CurrencyRangeSelector from "./components/CurrencyRangeSelector";
import { Box } from "@mui/material";

type DashboardProps = {
    coinId: string;
};

function Dashboard({ coinId }: DashboardProps) {
    const [days, setDays] = useState(30);
    const [currency, setCurrency] = useState("usd");
    const { price, marketCap, volume, loading, error } = useCoinChart({ coinId, currency, days });
    return(
        <Box sx={{ mt: 8 }}>
            <h1>{coinId}</h1>
            <TimeRangeSelector value={days} onChange={setDays} />
            <CurrencyRangeSelector value={currency} onChange={setCurrency} />
            <CoinChart data={price} loading={loading} error={error} />
            <TotalVolumesChart data={volume} loading={loading} error={error} />
        </Box>
    );
}

export default Dashboard;