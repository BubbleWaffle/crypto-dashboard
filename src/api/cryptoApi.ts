import { api } from "./httpClient";
import type { Coin } from "../types/crypto";

export const getCoins = async (ids: string[], currency: string): Promise<Coin[] | undefined> => {
    const { data } = await api.get<Coin[]>("/coins/markets",{
        params: {
            vs_currency: currency,
            ids: ids.join(",")
        }
    });

    return data;
};