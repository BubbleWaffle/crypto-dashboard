import { useEffect, useState } from "react";
import { getSearchCoin } from "../api/cryptoApi";
import type { CoinSearchResult } from "../types/crypto";

interface UseSearchParams {
    query: string;
};

export const useSearch = ({ query }: UseSearchParams) => {
        const [data, setData] = useState<CoinSearchResult[]>([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState<string | null>(null);

        // Slowing request during searching (with bigger project it is better to do it as custom hook)
        const [debouncedQuery, setDebouncedQuery] = useState(query);

        useEffect(() => {
            const timeout = setTimeout(() => {
                setDebouncedQuery(query);
            }, 400);

            return () => clearTimeout(timeout);
        }, [query]);

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