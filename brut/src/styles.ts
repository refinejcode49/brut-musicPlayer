import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
        /* propriété css qui améliore le rendu des polices sur les navigateurs basés sur webkit*/
        -webkit-font-smoothing: antialiased;
        /* propriété css qui demande au navigateur d'optimiser le rendu du texte pour la lisibilité*/
        text-rendering: optimizeLegibility;
        font-weight: normal;
    }
    h1 {
    font-weight: normal;
    }
`