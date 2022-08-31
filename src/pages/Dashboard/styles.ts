import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;

  background-color: var(--color-grey-6);

  .content {
    width: 100%;
    height: 100%;

    display: flex;

    aside {
      width: 25%;
      height: 1700px;

      border-right: 1px solid var(--color-grey-7);
    }

    main {
      width: 75%;
      height: 100%;
      padding: 68px 0px 0px 56px;
    }
  }
`;
