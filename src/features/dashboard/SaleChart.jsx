import styled from "styled-components";
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

const DashboardBox = styled.div`
    /* Box */
    background-color: var(--color-primary-100);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    min-height: 400px;

    padding: 3.2rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

const StyledSalesChart = styled(DashboardBox)`
    grid-column: 1 / -1;

    /* Hack to change grid line colors */
    & .recharts-cartesian-grid-horizontal line,
    & .recharts-cartesian-grid-vertical line {
        stroke: var(--color-grey-300);
    }
`;

function SalesChart({ summaries }) {
    const data = summaries.map((summary) => ({
        label: summary.processedDate,
        totalSales: summary.totalSales,
    }));

    const colors = {
        totalSales: {
            stroke: "var(--color-secondary-600)",
            fill: "var(--color-secondary-400)",
        },
        text: "#374151",
        background: "#fff",
    };

    return (
        <StyledSalesChart>
            <Heading as="h2">
                {summaries.length > 1 &&
                    `Total Sales from ${data.at(-1).label} to ${
                        data.at(0).label
                    }`}
                {summaries.length === 1 && `Total Sales on ${data.at(0).label}`}
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
                        name="Total sales"
                        unit="THB"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </StyledSalesChart>
    );
}

export default SalesChart;
