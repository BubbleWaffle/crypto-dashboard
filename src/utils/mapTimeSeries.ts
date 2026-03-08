import type { TimeSeriesPoint } from "../types/crypto"

export const mapTimeSeries = (data:[number, number][]): TimeSeriesPoint[] => {
    return data.map(([timestamp, value]) => ({
        timestamp,
        value
    }));
};