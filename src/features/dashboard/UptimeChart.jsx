import Heading from "../../ui/components/Heading";
import {
    LineChart,
    Line,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { ChartBox } from "./AreaChartStyle";
import { formatDateString } from "../../utils/datetimeHelper";

function UptimeChart({ summaries }) {
    const data = summaries.map((summary) => ({
        label: summary.processedDate,
        averageUptime: summary.averageUptime.toFixed(1),
        lowestUptime: summary.lowestUptime.toFixed(1),
    }));

    const colors = {
        averageUptime: {
            stroke: "var(--color-blue-700)",
            fill: "var(--color-blue-100)",
        },
        lowestUptime: {
            stroke: "var(--color-red-700)",
            fill: "var(--color-red-100)",
        },
        text: "#374151",
        background: "#fff",
    };

    return (
        <ChartBox>
            <Heading as="h2">
                {summaries.length > 1 &&
                    `Uptime overall from ${formatDateString(
                        data.at(-1).label
                    )} to ${formatDateString(data.at(0).label)}`}
                {summaries.length === 1 &&
                    `Uptime overall on ${formatDateString(data.at(0).label)}`}
            </Heading>

            <ResponsiveContainer
                height={250}
                width="95%"
                style={{ margin: "1rem" }}
            >
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="processedDate"
                        tick={{ fill: colors.text }}
                        tickLine={{ stroke: colors.text }}
                    />
                    <YAxis
                        style={{ fontSize: "1.2rem" }}
                        tick={{ fill: colors.text }}
                        tickLine={{ stroke: colors.text }}
                        ticks={[90.0, 95.0, 100.0]}
                        domain={[90, "dataMax"]}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: colors.background }}
                    />
                    <Line
                        dataKey="averageUptime"
                        type="monotone"
                        stroke={colors.averageUptime.stroke}
                        fill={colors.averageUptime.fill}
                        strokeWidth={2}
                        name="Average Uptime"
                        unit="%"
                    />
                    <Line
                        dataKey="lowestUptime"
                        type="monotone"
                        stroke={colors.lowestUptime.stroke}
                        fill={colors.lowestUptime.fill}
                        strokeWidth={2}
                        name="Lowest Uptime"
                        unit="%"
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartBox>
    );
}

export default UptimeChart;
