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
`;
export const ThemeTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: var(--color-grey-4);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  margin-top: 30px;

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
      border-radius: 25px 0px 0px 25px;     
      border: none;
      width: 85%;
    }

    .show-password {  
      background-color: transparent;
      width: 60px;
      height: 40px;
      border: none;
      
    }
  }
  .input-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 30px;
    height: 90px;
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
  }
  .login-buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
  }
`;
