import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.45);
  z-index: 2;
  padding: 16px;

  .modal-content {
    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 70px;
    gap: 80px;
    background-color: var(--color-grey-0);
    border-radius: 15px;
  }
  .container-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .close {
      background-color: transparent;
    }
  }
`;
export const Title = styled.h1`
  font-size: 45px;
  font-weight: 700;
  color: var(--color-grey-4);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  gap: 40px;

  .select-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 30px;
    height: 90px;
    label {
      padding-left: 24px;
    }
    select {
      font-family: var(--font-title-8);
      padding: 15px 24px;
      border-radius: 50px;
      border: 1px solid var(--color-grey-2);
    }
  }
  .rate-button {
    button {
      width: 100%;
      height: 60px;
    }
  }
`;
