import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  :root {

    /* style guide */

      /* Color Style guide */
        /* Primary Palette */
        --color-primary: #FF577F;
        --Color-primary-Focus: #FF427F;
        --Color-primary-Negative: #59323F;

        /* Grey Scale Palette */

        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-0: #F8F9FA;

        /* Feedback Palette */

        --color-sucess: #3FE864;
        --color-negative: #E83F5B;

      /* Text Style guide */

        /* fonte style */

        --font-inter: 'Inter', sans-serif;

        /* Typography */

        --font-title-1: bold 18px var(--font-inter);
        --font-title-2: bold 16px var(--font-inter);
        --font-title-3: bold 14px var(--font-inter);

        --font-headline: normal 12px var(--font-inter);
        --font-headlineBold: bold 12px var(--font-inter);
        --font-headlineItalic: italic 12px var(--font-inter);


    font-size: 62.5%;
    
  }

  @media (min-width: 700px) {
    :root {
       font-size: 62.5%;
    }
  }
  
  * {
     margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    max-width: 100vw;
    min-height: 100vh;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;
