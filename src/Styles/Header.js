import styled, { css } from "styled-components";

export const StyledHeader = styled.header` 
    margin-top: 30px;

    a {
        display: block;
        padding: 12px 15px;
        background-color: var(--grey3);
        border-radius: var(--radius);
        font-weight: var(--weight6);
        font-size: var(--size4);
        text-decoration: none;
    }

    a:hover {
        background-color: var(--grey2);
    }

    ${({flex}) => {
        if (flex) {
            return css`
                display: flex;
                justify-content: space-between;
                align-items: center;
            `
        }
    }}
`

export const StyledHeaderDashboard = styled.header`
    margin-bottom: 40px;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1.5px solid var(--grey3);

    a {
        display: block;
        padding: 12px 15px;
        background-color: var(--grey3);
        border-radius: var(--radius);
        font-weight: var(--weight6);
        font-size: var(--size4);
        text-decoration: none;
    }

    a:hover {
        background-color: var(--grey2);
    }
`