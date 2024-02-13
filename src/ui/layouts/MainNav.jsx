import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaChartSimple, FaCube } from "react-icons/fa6";

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

const StyledLink = styled(NavLink)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        color: var(--color-secondary-200);
        font-size: 1.8rem;
        font-weight: 500;
        padding: 1.2rem 2.4rem;
        transition: all 0.3s;
    }

    &:hover {
        color: var(--color-grey-400);
    }

    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-secondary-600);
        border-radius: var(--border-radius-sm);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: var(--color-primary-200);
        transition: all 0.3s;
    }

    &:hover svg {
        color: var(--color-grey-400);
    }

    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--color-secondary-600);
    }
`;

function MainNav() {
    return (
        <nav>
            <NavList>
                <li>
                    <StyledLink to="/dashboard">
                        <FaChartSimple />
                        <span>Dashboard</span>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to="/machines">
                        <FaCube />
                        <span>Machines</span>
                    </StyledLink>
                </li>
            </NavList>
        </nav>
    );
}

export default MainNav;
