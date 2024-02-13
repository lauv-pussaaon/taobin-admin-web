import { useDailySummaries } from "./hooks/useDailySummaries";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import StatSection from "./StatSection";
import Spinner from "../../ui/components/Spinner";
import SalesChart from "./SaleChart";
import UptimeChart from "./UptimeChart";

const StyledDashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    column-gap: 2.4rem;
    row-gap: 3rem;
`;

function DashboardLayout() {
    const { isLoading, summaries } = useDailySummaries();
    const [searchParams] = useSearchParams();

    if (isLoading) return <Spinner />;

    const days = searchParams.get("last") || null;
    const slicedSummaries = days ? summaries.slice(0, days) : summaries;

    return (
        <StyledDashboardLayout>
            <StatSection summaries={slicedSummaries} />
            <SalesChart summaries={slicedSummaries} />
            <UptimeChart summaries={slicedSummaries} />
        </StyledDashboardLayout>
    );
}

export default DashboardLayout;
