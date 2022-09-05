import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {

    /* style guide */

      /* Color Style guide */
        /* Primary Palette */
        --color-primary: #F1D302;
        --Color-primary-Focus: #FF427F;
        --Color-primary-Negative: #59323F;

        /* Grey Scale Palette */

        --color-grey-7: #505050;
        --color-grey-6: #202020;
        --color-grey-5: #181818;
        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-01: #CED4DA;
        --color-grey-0: #F8F9FA;
        

        /* Feedback Palette */

        --color-sucess: #3FE864;
        --color-negative: #E83F5B;

      /* Text Style guide */

        /* fonte style */

        --font-poppins: 'Poppins', sans-serif;

        /* Typography */

        --font-title-1: bold 40px var(--font-poppins);
        --font-title-2: bold 36px var(--font-poppins);
        --font-title-3: bold 32px var(--font-poppins);
        --font-title-4: bold 28px var(--font-poppins);
        --font-title-5: bold 26px var(--font-poppins);
        --font-title-6: bold 24px var(--font-poppins);

        --font-title-7: bold 20px var(--font-poppins);
        --font-title-8: bold 18px var(--font-poppins);
        --font-title-9: bold 16px var(--font-poppins);
        --font-title-10: bold 14px var(--font-poppins);
        --font-title-11: bold 12px var(--font-poppins);

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
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
    border: none;
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
    background: var(--color-primary);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;
