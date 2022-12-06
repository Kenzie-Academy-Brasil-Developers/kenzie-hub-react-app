import styled, { css } from "styled-components";
import { BaseTitle } from "./baseTitle";

export const StyledTitle = styled(BaseTitle)`    
    text-align: center;

    ${({ tag }) => {
        switch (tag) {
            case 'h1':
                return css`
                    font-size: var(--size1);
                    font-weight: 600;
                    color: var(--brand);
                `
            case 'h2':
                return css`
                    font-size: var(--size2);
                    font-weight: 700;
                    color: var(--grey0);
                `
            case 'h3':
                return css`
                    font-size: var(--size3);
                    font-weight: 700;
                    color: var(--grey0);
                `
        }
      }
    }
`