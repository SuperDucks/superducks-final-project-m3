import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.45);
  z-index: 999;
  padding: 16px;

  .modal-content {
    width: 100%;
    /* max-width: 500px; */
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 590px;
    gap: 20px;
    padding: 30px 50px 50px 50px;
    background-color: var(--color-grey-0);
    border-radius: 15px;
    @media screen and (max-width: 500px){
      max-width: 600px;
      padding: 20px 25px 40px 25px;
      max-height: 590px;
    }
    @media screen and (min-width: 768px) {
      padding: 30px 50px 50px 50px;
    }
  }
  .container-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font: var(--font-title-6);
      @media screen and (min-width: 768px ){
        font: var(--font-title-5);
      }
    }
    .close {
      background-color: transparent;
    }
  }
  .genre-container {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;

  }
  .genre-buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 25px;
    padding: 6px 18px;
    border-radius: 30px;
    @media screen and (max-width: 768px){
    gap: 0px;
    margin: 0px;
    padding: 6px 8px;
    border-radius: 15px;   
  }
  @media screen and (min-width: 768px){
      gap: 0px;
      margin: 0px;
      padding: 6px 8px;
      border-radius: 15px;
    }
}
`;
export const ThemeTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: var(--color-grey-4);
`;
