export interface Coin {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    high_24h: number;
    low_24h: number;
    price_change_percentage_24h: number;
};

export interface CoinMarketChart {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
};

export interface TimeSeriesPoint {
    timestamp: number;
    value: number;
};

export interface CoinSearchResult {
    id: string;
    name: string;
    thumb: string;
};

export interface CoinSearchResponse {
    coins: CoinSearchResult[];
}