import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #F0F2F5;
        --red: #E52E40;
        --blue: #5429CC;
        --green: #33CC95;
        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --shape: #FFFFFF;

    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width:1080px) {
            font-size: 93.75%;
        }
        
        @media (max-width:720px) {
            font-size: 87.5%;
        }
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, button, textarea, input {
        font-size: 'Poppins', sans-serif, Arial;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`