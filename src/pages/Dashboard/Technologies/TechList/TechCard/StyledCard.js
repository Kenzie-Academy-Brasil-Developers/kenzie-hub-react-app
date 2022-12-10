import styled from "styled-components";

export const StyledTechCard = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 20px;
    border-radius: var(--radius);
    background-color: var(--grey4);

    :hover {
        background-color: var(--grey2);
        transition: 0.3s;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }

    small {
        color: var(--grey1);
        font-size: var(--size4);
        font-weight: var(--weight4);
    }
    
    button {
        background-color: transparent;
    }
`