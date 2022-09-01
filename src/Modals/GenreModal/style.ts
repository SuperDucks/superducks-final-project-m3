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

  .modal-content {
    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 60px 50px 80px 50px;
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
  .genre-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .genre-buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 25px;
    padding: 6px 18px;
    border-radius: 30px;
  }
`;
export const ThemeTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: var(--color-grey-4);
`;
