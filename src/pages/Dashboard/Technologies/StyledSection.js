import styled from "styled-components";

export const StyledSectionTechnologies = styled.section`
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }

    > div button {
        background-color: var(--grey3);
        border-radius: var(--radius);
        display: grid;
        place-items: center;
        padding: 5px 10px;
        font-size: 24px;
    }

    > div button:hover {
        background-color: var(--grey2);
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 20px;
        background-color: var(--grey3);
        border-radius: var(--radius);
    }
`