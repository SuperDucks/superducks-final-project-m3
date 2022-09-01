import styled from "styled-components";

export const Container = styled.div`
  /* margin-top: 68px; */
  width: 100%;
  height: 340px;

  background: var(--color-grey-5);
  box-shadow: 0px 2px 40px rgba(133, 133, 133, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  .footer-up {
    margin-top: 62px;
    width: 90%;
    height: 160px;
    /* background-color: red; */

    display: flex;
    justify-content: space-between;

    img {
      width: 120%;
    }

    .footer-up-lists {
      display: flex;
      gap: 200px;

      ul {
        display: flex;
        flex-direction: column;
        gap: 26px;

        li {
          list-style: none;
          font: var(--font-title-8);
          color: var(--color-grey-0);
          font-weight: 500;
          cursor: pointer;
        }
      }
    }

    .footer-up-contact {
      /* background-color: blue; */
      display: flex;
      flex-direction: column;
      gap: 20px;

      ul {
        display: flex;
        justify-content: space-between;
        color: white;
      }
    }
  }

  hr {
    width: 90%;
    height: 1px;
    border: 0px;
    border-top: 1px solid var(--color-grey-2);
  }

  .footer-down {
    width: 90%;
    height: 32px;

    margin-bottom: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font: var(--font-title-10);
      color: var(--color-grey-0);
      font-weight: 400;
    }
  }
`;
