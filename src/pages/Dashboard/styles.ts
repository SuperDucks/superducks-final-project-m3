import styled from "styled-components";

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
      display: none;
    }

    main {
      width: 100%;
      height: 100%;
      padding: 68px 0px 0px 56px;
      border-left: 1px solid var(--color-grey-7);
    }

    @media screen and (min-width: 1160px) {
      aside {
        display: flex;
        width: 30%;
      }
      main {
        width: 70%;
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
