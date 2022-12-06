import styled from "styled-components";

export const StyledDivMaintenance = styled.div`
    div:first-child {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    div small {
        color: var(--grey1);
        font-size: var(--size4);
        font-weight: var(--weight4);
    }

    div:last-child {
        border-top: 1.5px solid var(--grey3);
    }

    div:last-child h3 {
        margin-top: 30px;
        margin-bottom: 25px;
        text-align: start;
    }

    div p {
        font-weight: var(--weight4);
        font-size: var(--size4);
        color: var(--grey0);
    }

`