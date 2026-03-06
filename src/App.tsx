import { api } from "./api/clientApi";
import { useEffect, useState } from "react";
import type { Coin } from "./api/crypto";

function App() {
  const [coin, setCoin] = useState<Coin | null>(null);

  useEffect(() => {
    const fetchBitcoin = async () => {
      const { data } = await api.get<Coin[]>("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: "bitcoin"
        }
      });

      setCoin(data[0]);
    };

    fetchBitcoin();
  }, []);

  return (
    <>
      <h1>Crypto Dashboard</h1>

      {coin ? (
        <div>
          <h2>{coin.name}</h2>
          <p>ID: {coin.id}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
