import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  margin: -8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  background-color: black;
  color: #ffffff;

  .individual-film-info{
    padding: 80px 90px;
  }

  .film-title {
    width: 40%;
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
    line-height: 100%;
  }

  .film-description {
    width: 40%;
    max-width: 600px;
    font-weight: 500;
    font-size: 20px;
    line-height: 115%;
  }

  .film-rating {
    font-weight: 600;
    font-size: 22px;
  }

  .buttons {
    border-radius: 30px;
    border: none;
  }

  .recommended-film-section {
    display: flex;
    justify-content: flex-end;
    margin-left: 35%;
    padding: 28px 0;
    background-color: #533333;
  }

  .recommended-film-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 164px;
    height: 234px;
    margin-left: 18px;
    background-color: #722222;
  }

  .film-info{
  }

  .recommended-film-title {
    font-weight: 700;
    font-size: 14px;
  }

  .recommended-film-rating {
    font-weight: 600;
    font-size: 10px;
  }

  .card-bar {
    display: flex;
    width: 160px
    height: 26px;
    margin: 0 -4px 5px 4px;
    font-weight: 600;
    font-size: 10px;
    line-height: 100%;
    text-align: center;
    color: #000000;
  }

  .recommended-film-add-div {
    width: 30%;
    background: #F9F9F9;
  }

  .recommended-film-add {
  }

  .recommended-film-gender-div {
    width: 70%;
    background: #F1D302;
  }

  .recommended-film-gender {
  }
`;

export const FavoriteButton = styled.button`
  width: 44px;
  height: 42px;
  background: #ffffff;
`;

export const TrailerButton = styled.button`
  width: 150px;
  height: 42px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  background: #f1d302;
`;
