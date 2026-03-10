import { useEffect, useState } from "react";

export const useDebouncedQuery = (query: string) => {
        const [debouncedQuery, setDebouncedQuery] = useState(query);

        useEffect(() => {
            const timeout = setTimeout(() => {
                setDebouncedQuery(query);
            }, 400);

            return () => clearTimeout(timeout);
        }, [query]);

        return debouncedQuery;
};