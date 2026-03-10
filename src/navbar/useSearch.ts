import { useEffect, useState } from "react";
import { getSearchCoin } from "../api/cryptoApi";
import type { CoinSearchResult } from "../types/crypto";
import { useDebouncedQuery } from "../utils/useDebouncedQuery";

export const useSearch = (query: string) => {
        const [data, setData] = useState<CoinSearchResult[]>([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState<string | null>(null);

        const debouncedQuery = useDebouncedQuery(query);

        useEffect(() => {

            const fetchData = async () => {
                try {
                    setLoading(true);
                    setError(null);

                    const coins = await getSearchCoin(debouncedQuery);
                    setData(coins);
                } catch (err) {
                    setError("Failed to fetch coins data!");
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }, [debouncedQuery]);

        return { data, loading, error };
};