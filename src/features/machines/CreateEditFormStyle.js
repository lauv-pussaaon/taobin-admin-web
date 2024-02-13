import styled, { css } from "styled-components";

export const Form = styled.form`
    width: 80rem;
    overflow: hidden;
    font-size: 1.6rem;
`;

export const FormRow = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 18rem 1fr 1.2fr;
    gap: 2.4rem;

    padding: 1.2rem 0;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }

    &:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
    }
`;

export const Input = styled.input`
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

export const InputWrapper = styled.div`
    display: flex;
    justify-content: stretch;
    align-items: center;
    gap: 1rem;
`;

export const Label = styled.label`
    font-weight: 500;
    text-align: right;
`;

export const Error = styled.span`
    font-size: 1.4rem;
    color: var(--color-red-700);
`;
