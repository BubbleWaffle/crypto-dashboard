import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import type { TimeSeriesPoint } from "../../../types/crypto";

type PriceChartProps = {
    data: TimeSeriesPoint[];
    loading: boolean;
    error: string | null;
}

function PriceChart({ data, loading, error }: PriceChartProps) {
    if (loading) return <p>Loading chart...</p>;
    if (error) return <p>{error}</p>;

    return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <XAxis
              dataKey="timestamp"
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString()
              }
            />
            <YAxis />
            <Tooltip
              labelFormatter={(value) =>
                new Date(value).toLocaleDateString()
              }
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#1976d2"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
    );
}

export default PriceChart;