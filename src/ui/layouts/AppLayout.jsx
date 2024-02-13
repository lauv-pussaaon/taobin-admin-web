import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: 1fr;
`;

const Main = styled.main`
    background-color: var(--color-grey-50);
    padding: 4rem 4.8rem 6.4rem;
    overflow: scroll;
`;

const ContentContainer = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <Sidebar />
            <Main>
                <ContentContainer>
                    <Outlet />
                </ContentContainer>
            </Main>
        </StyledAppLayout>
    );
}

export default AppLayout;
