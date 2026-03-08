import CoinChart from "./components/PriceChart";
import MarketCapChart from "./components/MarketCapChart";
import { useCoinChart } from "./hooks/useCoinChart";

function Dashboard() {
    const { price, marketCap, volume, loading, error } = useCoinChart({coinId: "bitcoin", currency: "pln", days: 30});
    return(
        <>
            <h1>Bitcoin chart</h1>
            <CoinChart data={price} loading={loading} error={error} />
            <MarketCapChart data={volume} loading={loading} error={error} />
        </>
    );
}

export default Dashboard;