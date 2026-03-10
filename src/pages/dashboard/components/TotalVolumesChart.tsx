import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import type { TimeSeriesPoint } from "../../../types/crypto";

type TotalVolumesChartProps = {
    data: TimeSeriesPoint[];
    loading: boolean;
    error: string | null;
}

function TotalVolumesChart({ data, loading, error }: TotalVolumesChartProps) {
    if (loading) return <p>Loading chart...</p>;
    if (error) return <p>{error}</p>;

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
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
                <Bar
                    dataKey="value"
                    fill="#1976d2"
                />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default TotalVolumesChart;