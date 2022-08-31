import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  background-color: black;
  color: #ffffff;

  .film-title {
    width: 30%;
    height: auto;
    max-width: 600px;
    font-weight: 700;
    font-size: 60px;
    line-height: 100%;
  }

  .film-gender {
    font-weight: 600;
    font-size: 32px;
    color: #b4b4b4;
  }

  .film-description {
    width: 30%;
    max-width: 600px;
    font-weight: 600;
    font-size: 26px;
    line-height: 115%;
  }

  .film-rating {
    font-weight: 600;
    font-size: 22px;
  }

  .cards-section {
    background-color: rgba(0, 0, 0, 0.72);
  }
`;

export const Button = styled.button`
  padding: 8px 45px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  background: #f1d302;
  border: none;
  border-radius: 30px;
`;
