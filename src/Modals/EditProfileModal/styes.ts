import styled from "styled-components";

export const h1 = styled.h1`
  font-size: 21px;
`;
export const Modal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background: rgba(0, 0, 0, 0.45);
  padding: 16px;

  .modal-content {
    width: 100%;
    max-width: 500px;
    z-index: 50;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px; 
    padding: 50px 50px 60px 50px;
    background-color: var(--color-grey-0);
    border-radius: 15px;
    @media screen and (max-width: 768px) {
      gap: 15px;
      max-width: 350px;
    }
    .title-container {
      display: flex;
      width: 100%;
      justify-content: space-between;

      h2 {
        font-weight: 700;
        font-size: 30px;
        color: var(--color-grey-4);
        @media screen and (max-width: 425px) {
          font-size: 20px;
        }
        @media screen and (min-width: 425px) {
          font-size: 22px;
        }
        @media screen and (min-width: 768px) {
          font-size: 30px;
        }
      }
      .close {
        background-color: transparent;
      }
    }
    .btn-submit {
    }
    @media screen and (max-width: 768px) {
      padding: 30px 25px 40px 25px;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 90px;
    @media screen and (max-width: 768px) {
      height: 50px;
    }

    label {
      padding-left: 24px;
      @media screen and (max-width: 768px) {
        padding-left: 16px;
    }
    }

    input {
      padding: 15px 24px;
      border-radius: 25px;
      border: 1px solid var(--color-grey-1);
      ::placeholder {
        color: var(--color-grey-1);
      }
      @media screen and (max-width: 768px){
        padding: 6px 16px;
      }
    }
    small {
      padding-left: 24px;
      color: var(--color-negative);
    }
   
    .container-eye {
      display: flex;
      align-items: center;
      border-radius: 25px;
      border: 1px solid var(--color-grey-1);
      background-color: white;
      ::placeholder {
        color: var(--color-grey-1);
      }
      .input-password {
        padding: 15px 24px;
        border-radius: 25px;
        border: none;
        width: 85%;
      }
      .show-password {
        background-color: transparent;
        width: 40px;
        height: 40px;
        border: none;
      }
    }
    
  }
`;
