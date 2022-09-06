import styled, { css } from "styled-components";

function flexMedias(columns: number, gap: string) {
  return css`
    width: calc((100% - (${gap} * (${columns} - 1))) / ${columns});
  `
}

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;

  background-color: var(--color-grey-6);

  .content {
    width: 100%;
    height: 100%;
    padding-top: 130px;
    display: flex;

    aside {
      width: 25%;

    }

    main {
      width: 75%;
      height: 100%;
      padding: 36px 0px 86px 56px;

      border-left: 1px solid var(--color-grey-7);


      display: flex;
      flex-direction: column;
      gap: 28px;
      /* background-color: red; */
      
      h1{
        font: var(--font-title-2);
        color: var(--color-grey-0);
        font-weight: 500;
        
      }

      section{
        width: 90%;
        display: flex;
        gap: 36px;
        flex-wrap: wrap;

        section > div{
          ${flexMedias(5,'32px')}

          @media (max-width: 1300px){
            ${flexMedias(4,'32px')}
          }

          @media (max-width: 1080px){
            ${flexMedias(3,'16px')}
          }
        }
      }
    }
  }
`;

