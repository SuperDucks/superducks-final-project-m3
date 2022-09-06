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
  z-index: 2;
  padding: 16px;

  background: rgba(0, 0, 0, 0.45);

  .modal-content {
    width: 100%;
    max-width: 500px;
    max-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    
    padding: 50px 50px 60px 50px;
    background-color: var(--color-grey-0);
    border-radius: 15px;
    
    @media screen and (min-width: 768px){
      padding: 50px 50px 60px 50px; 
      gap: 15px;
      justify-content: flex-start;
    }
    @media screen and (max-width: 425px){
      padding: 30px 25px 40px 25px; 
      gap: 15px;
      justify-content: flex-start;
    }
    .title-container {
      display: flex;
      width: 100%;
      justify-content: space-between;

      h2 {
        font-weight: 700;
        font-size: 30px;
        color: var(--color-grey-4);
        @media screen and (max-width: 425px){
          font-size: 18px;
        }
        @media screen and (min-width: 425px){
          font-size: 22px;
        }
        @media screen and (min-width: 500px){
          font-size: 28px;
        }

      }

      .close {
        background-color: transparent;
      }
    }
    .btn-submit {
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 5px;  
    height: 80px;

    label {
      padding-left: 24px;
    }

    input {
      padding: 15px 24px;
      border-radius: 25px;
      border: 1px solid var(--color-grey-1);
      ::placeholder {
        color: var(--color-grey-1);
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
