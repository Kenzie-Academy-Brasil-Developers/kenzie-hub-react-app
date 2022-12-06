import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, button, select, textarea {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        line-height: 1;
        list-style: none;
        text-decoration; none;
        box-sizing: border-box;
        color: var(--grey0);
        font-family: 'Inter', sans-serif;
    }

    body{
        background-color: var(--grey4);
    }

    button {
        cursor: pointer;
    }
    
    button, input {
        border-radius: var(--radius)
    }

    .flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .layout{
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    :root {
    --brand: #FF577F;
    --brand-focus: #FF427F;
    --brand-disabled: #59323F;
    --grey0: #F8F9FA;
    --grey1: #868E96;
    --grey2: #343B41;
    --grey3: #212529;
    --grey4: #121214;
    --success: #3FE864;
    --alert:  #E83F5B;

    --radius: 4px;

    --weight4: 400;
    --weight5: 500;
    --weight6: 600;
    --weight7: 700;
    --weight8: 800;

    --size1: 1.375rem;
    --size2: 1.25rem;
    --size3: 1rem;
    --size4: 0.875rem;
    --size5: 0.75rem;
}
`