import styled, { css } from "styled-components";
import { useSearchParams } from "react-router-dom";

const StyledFilter = styled.div`
    border: 1px solid var(--color-primary-100);
    background-color: var(--color-primary-100);
    box-shadow: var(--shadow-sm);
    border-radius: var(--border-radius-sm);
    padding: 0.4rem;
    display: flex;
    gap: 0.4rem;
`;

const FilterButton = styled.button`
    background-color: var(--color-grey-0);
    border: none;

    ${(props) =>
        props.active === "true" &&
        css`
            background-color: var(--color-primary-400);
            color: var(--color-grey-0);
        `}

    border-radius: var(--border-radius-sm);
    font-weight: 500;
    font-size: 1.6rem;
    /* To give the same height as select */
    padding: 0.44rem 0.8rem;
    transition: all 0.3s;

    &:hover:not(:disabled) {
        background-color: var(--color-primary-600);
        color: var(--color-primary-100);
    }
`;

function Filter({ param, options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeFilter =
        searchParams.get(param) ||
        options.filter((option) => option.default).at(0).value;

    function handleClick(value) {
        searchParams.set(param, value);
        setSearchParams(searchParams);
    }

    return (
        <StyledFilter>
            {options.map((option) => (
                <FilterButton
                    key={option.value}
                    onClick={() => handleClick(option.value)}
                    active={`${activeFilter === option.value}`}
                    disabled={activeFilter === option.value}
                >
                    {option.label}
                </FilterButton>
            ))}
        </StyledFilter>
    );
}

export default Filter;
