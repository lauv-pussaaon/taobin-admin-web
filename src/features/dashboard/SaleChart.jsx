import Heading from "../../ui/components/Heading";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { ChartBox } from "./AreaChartStyle";

function SalesChart({ summaries }) {
    const data = summaries.map((summary) => ({
        label: summary.processedDate,
        totalSales: summary.totalSales,
    }));

    const colors = {
        totalSales: {
            stroke: "var(--color-secondary-600)",
            fill: "var(--color-secondary-100)",
        },
        text: "#374151",
        background: "#fff",
    };

    return (
        <ChartBox>
            <Heading as="h2">
                {summaries.length > 1 &&
                    `Total sales from ${data.at(-1).label} to ${
                        data.at(0).label
                    }`}
                {summaries.length === 1 && `Total sales on ${data.at(0).label}`}
            </Heading>

            <ResponsiveContainer
                height={300}
                width="95%"
                style={{ margin: "1rem" }}
            >
                <AreaChart data={data}>
                    <XAxis
                        dataKey="processedDate"
                        tick={{ fill: colors.text }}
                        tickLine={{ stroke: colors.text }}
                    />
                    <YAxis
                        style={{ fontSize: "1.2rem" }}
                        tick={{ fill: colors.text }}
                        tickLine={{ stroke: colors.text }}
                    />
                    <CartesianGrid strokeDasharray="4" />
                    <Tooltip
                        contentStyle={{ backgroundColor: colors.background }}
                    />
                    <Area
                        dataKey="totalSales"
                        type="monotone"
                        stroke={colors.totalSales.stroke}
                        fill={colors.totalSales.fill}
                        strokeWidth={2}
                        name="Total Sales"
                        unit=" (THB)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </ChartBox>
    );
}

export default SalesChart;
