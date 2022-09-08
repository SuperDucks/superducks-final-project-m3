import styled, { css } from "styled-components";

function flexMedias(columns: number, gap: string) {
  return css`
    width: calc((100% - (${gap} * (${columns} - 1))) / ${columns});
  `;
}

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;

  background-color: var(--color-grey-6);
  a {
    transition: 250ms all;
  }
  a:hover {
    transform: scale(1.05)
  }

  .content {
    width: 100%;
    height: 100%;
    padding-top: 130px;
    display: flex;

    aside {
      display: none;
    }
    main {
      width: 100%;
      height: 100%;
      margin: 0;
      border-left: 1px solid var(--color-grey-7);

      display: flex;
      flex-direction: column;
      gap: 28px;
      /* background-color: red; */

      h1 {
        font: var(--font-title-2);
        color: var(--color-grey-0);
        font-weight: 500;
        margin: 0 auto;
      }

      section {
        width: 90%;
        display: flex;
        justify-content: center;
        gap: 36px;
        flex-wrap: wrap;
        margin: 0 auto;

        section > div {
          ${flexMedias(5, "32px")}

          @media (max-width: 1300px) {
            ${flexMedias(4, "32px")}
          }

          @media (max-width: 1080px) {
            ${flexMedias(3, "16px")}
          }         
        }
      }
    }
    @media screen and (min-width: 1160px) {
      aside {
        display: flex;
        width: 30%;
      }
      main {
        padding: 68px 0px 0px 56px;
        width: 70%;

        section {
          justify-content: flex-start;
          margin: 0;
        }
        h1 {
          margin: 0;
        }
      }
    }
    @media screen and (min-width: 1430px) {
      aside {
        display: flex;
        width: 25%;
      }
      main {
        width: 75%;
      }
    }
  }
`;
