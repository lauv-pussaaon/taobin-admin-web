import styled from "styled-components";

export const DashboardBox = styled.div`
    background-color: var(--color-primary-100);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);

    padding: 1.6rem 3.2rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

export const ChartBox = styled(DashboardBox)`
    /* apply to parent grid in dashbordlayout */
    grid-column: 1 / -1;

    /* Hack to change grid line colors */
    & .recharts-cartesian-grid-horizontal line,
    & .recharts-cartesian-grid-vertical line {
        stroke: var(--color-grey-300);
    }
`;
