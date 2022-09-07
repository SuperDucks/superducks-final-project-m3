import styled from "styled-components";

export const Container = styled.div`
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

    display: flex;
    justify-content: space-between;

    figure {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      gap: 24px;

      .footer-up-contact {
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

    div.footer-up-techs {
      display: none;
    }

    .footer-up-lists {
      display: none;
    }

    @media screen and (min-width: 760px) {
      figure {
        display: none;
      }

      .footer-up-lists {
        width: 100%;
      }

      .footer-up-lists {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 26px;

        h2 {
          color: var(--color-grey-0);
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 8px;

          p {
            font: var(--font-title-8);
            font-weight: 500;
            color: var(--color-grey-0);
          }

          li {
            list-style: none;
            font: var(--font-title-8);
            color: var(--color-primary);
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    @media screen and (min-width: 1080px) {
      figure {
        display: flex;
        flex-direction: column;
        margin: 0;
        gap: 24px;
      }

      .footer-up-lists {
        width: 76%;
      }
    }

    @media screen and (min-width: 1550px) {
      .footer-up-lists {
        width: 50%;
      }

      div.footer-up-techs {
        display: flex;
        gap: 12px;

        h2 {
          font: var(--font-title-7);
          font-weight: 600;
          color: var(--color-grey-0);
        }

        ul {
          width: 300px;
          display: flex;
          gap: 6px;
          color: white;
          flex-wrap: wrap;

          li {
            list-style: none;
            :hover {
              color: var(--color-primary);
            }
          }
        }
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
    height: 24px;

    margin-bottom: 34px;

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
