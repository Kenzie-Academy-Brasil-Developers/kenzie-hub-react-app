import styled, { css } from "styled-components"

export const StyledButton = styled.button`
    width: 100%;
    height: 50px;
    margin-top: 25px;
    background-color: var(--brand);
    color: var(--grey0);
    font-size: var(--size3);
    font-weight: var(--weight5);

    
    
    ${({disabled}) => {
        if (disabled) {
            return css`
                background-color: var(--brand-disabled);
                cursor: auto;
            `
        } else {
            return css`
                background-color: var(--brand);
                :hover {
                    background-color: var(--brand-focus);   
                }
            `
        }
    }}
`