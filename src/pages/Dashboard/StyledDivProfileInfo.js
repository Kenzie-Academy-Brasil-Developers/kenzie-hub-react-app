import styled from "styled-components";

export const StyledDivProfileInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 40px 0;
    border-top: 1.5px solid var(--grey3);
    border-bottom: 1.5px solid var(--grey3);

    small {
        color: var(--grey1);
        font-size: var(--size4);
        font-weight: var(--weight4);
    }

    h3 {
        margin-top: 30px;
        margin-bottom: 25px;
        text-align: start;
    }

    p {
        font-weight: var(--weight4);
        font-size: var(--size4);
        color: var(--grey0);
    }

`