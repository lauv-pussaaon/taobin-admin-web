import styled, { css } from "styled-components";

const Input = styled.input`
    border: 1px solid var(--color-grey-300);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-sm);
    padding: 0.5rem 1rem;
    box-shadow: var(--shadow-sm);
    line-height: 3rem;

    ${(props) =>
        props.size === "small" &&
        css`
            width: 6rem;
        `}
    ${(props) =>
        props.size === "medium" &&
        css`
            width: 12rem;
        `}
`;

export default Input;
