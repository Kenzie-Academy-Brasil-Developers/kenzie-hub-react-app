import styled from "styled-components";

export const StyledSectionForm = styled.section`
    width: 100%;
    padding: 30px 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: var(--grey3);
    border-radius: 4px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    p {
        color: var(--grey1);
        font-size: var(--size4);
        font-weight: var(--weight6);
        text-align: center;
        margin-top: 25px;
        margin-bottom: 20px;
    }

    a {
        width: 100%;
        height: 50px;
        display: grid;
        place-items: center;
        text-decoration: none;
        background-color: var(--grey1);
        border: 2px transparent;
        border-radius: var(--radius);
    }

    a:hover {
        border: 2px solid var(--grey0);
    }
`