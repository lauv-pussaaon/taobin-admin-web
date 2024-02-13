import { useDailySummaries } from "./hooks/useDailySummaries";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import StatSection from "./StatSection";
import Spinner from "../../ui/components/Spinner";

const StyledDashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
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
        </StyledDashboardLayout>
    );
}

export default DashboardLayout;
