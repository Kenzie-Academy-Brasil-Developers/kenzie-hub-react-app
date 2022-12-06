import styled from "styled-components";

export const StyledForm = styled.form`
    width: 100%;

    label {
        display: block;
        margin-top: 25px;
        margin-bottom: 15px;
        font-weight: 400;
        font-size: var(--size3);
    }

    input {
        width: 100%;
        height: 50px;
        padding-left: 12px;
        background-color: var(--grey2);
        border: 1.2px transparent;
        outline: none;
    }
    
    input::placeholder{
        color: var(--grey1);
    }
    
    input:focus{
        border: 1.2px solid var(--grey0);       
    }

    select{
        width: 100%;   
        height: 50px;
        padding-left: 12px;
        background-color: var(--grey2);
        color: var(--grey0);
        outline: none;
    }
`