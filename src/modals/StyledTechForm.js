import styled from "styled-components";

export const StyledTechForm = styled.form`
    padding: 20px;
    background-color: var(--grey3);
    border-radius: 0 0 4px 4px;
    
    small {
        font-weight: var(--weight4);
        font-size: var(--size4);
    }

    input {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        margin-bottom: 25px;
        padding-left: 12px;
        background-color: var(--grey2);
        border: 1px solid transparent;
        border-radius: var(--radius);
        outline: none;
    }

    input::placeholder {
        color: var(--grey1);
    }

    input:focus{
        border: 1px solid var(--grey0);
    }

    select {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        margin-bottom: 25px;
        padding-left: 12px;
        background-color: var(--grey2);
        border-radius: var(--radius);
        outline: none;
    }

    button {
        width: 100%;
        height: 50px;
        font-weight: var(--weight5);
        background-color: var(--brand)
    }

    button:hover {
        background-color: var(--brand-focus)
    }
`