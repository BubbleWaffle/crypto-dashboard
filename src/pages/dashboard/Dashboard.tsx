import { useState } from "react";
import CoinChart from "./components/PriceChart";
import TotalVolumesChart from "./components/TotalVolumesChart";
import { useCoinChart } from "./hooks/useCoinChart";
import TimeRangeSelector from "./components/TimeRangeSelector";
import CurrencyRangeSelector from "./components/CurrencyRangeSelector";
import { Box } from "@mui/material";
import { useParams } from "react-router";

function Dashboard() {
    const { coinId } = useParams();
    const [days, setDays] = useState(30);
    const [currency, setCurrency] = useState("usd");
    const { price, marketCap, volume, loading, error } = useCoinChart({ coinId, currency, days });
    return(
        <Box sx={{ m: 15 }}>
            <h1>{coinId ? coinId : "You need to select a coin!"}</h1>
            <TimeRangeSelector value={days} onChange={setDays} />
            <CurrencyRangeSelector value={currency} onChange={setCurrency} />
            <CoinChart data={price} loading={loading} error={error} />
            <TotalVolumesChart data={volume} loading={loading} error={error} />
        </Box>
    );
}

export default Dashboard;