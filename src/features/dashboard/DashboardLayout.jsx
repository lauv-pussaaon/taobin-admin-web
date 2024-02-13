import styled from "styled-components";
import StatSection from "./StatSection";
import { useDailySummaries } from "./hooks/useDailySummaries";
import Spinner from "../../ui/components/Spinner";

const StyledDashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
`;

function DashboardLayout() {
    const { isLoading, summaries } = useDailySummaries();

    if (isLoading) return <Spinner />;
    return (
        <StyledDashboardLayout>
            <StatSection summaries={summaries} />
        </StyledDashboardLayout>
    );
}

export default DashboardLayout;
