import styled from "styled-components";

export const Container = styled.div`
  .dropdown-menu {
    position: absolute;
    z-index: 45;
    top: 110px;
    right: 3.9%;
    background-color: white;
    border-radius: 8px;
    padding: 10px 20px;
    width: 16%;
    @media screen and (min-width: 1024px){
      width: 220px;
    }

    ::before {
      content: "";
      position: absolute;
      top: -5px;
      right: 15px;
      height: 20px;
      width: 20px;
      background-color: white;
      transform: rotate(45deg);
    }
  }

  .dropdown-menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 0.2s ease;
  }
  .dropdown-menu.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 0.2s ease;
  }
`;
