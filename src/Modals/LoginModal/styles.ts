import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;

  .modal-box {
    width: 100%;
    max-width: 600px;
  }
`;

export const Form = styled.form`
  background-color: pink;
  
  .show-password {
    background-color: transparent;
    width: 40px;
    height: 40px;
    border: none;
  }
`;
