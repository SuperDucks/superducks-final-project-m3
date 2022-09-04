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

  background: rgba(0, 0, 0, 0.45);

  .modal-content {
    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    

    padding: 50px 50px 60px 50px;
    background-color: var(--color-grey-0);
    border-radius: 15px;

    .title-container {
      display: flex;
      width: 100%;
      justify-content: space-between;

      h2 {
        font-weight: 700;
        font-size: 30px;
        color: var(--color-grey-4);
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

  .edit-options {
      margin-bottom: 20px;
      background-color: pink;
      padding: 8px;
      /* outline: 1px solid var(--color-grey-2);
      outline-offset: -20px; 
      border-radius: 15px;  */
       
      h2 { 
          background-color: white;
           color: var(--color-grey-3);
           font: var(--font-title-9);
           font-weight: 600;
      }
    }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    
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
