import styled, { css } from "styled-components";

const Group = styled.div`
    display: flex;

    ${(props) =>
        props.type === "horizontal" &&
        css`
            justify-content: space-between;
            align-items: center;
        `}

    ${(props) =>
        props.type === "horizontal-left" &&
        css`
            justify-content: flex-start;
            gap: 0.6rem;
            align-items: center;
        `}

    ${(props) =>
        props.type === "vertical" &&
        css`
            flex-direction: column;
            gap: 1.6rem;
        `}
`;

Group.defaultProps = {
    type: "vertical",
};

export default Group;
