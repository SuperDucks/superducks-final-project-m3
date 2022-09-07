import styled from "styled-components";

export const Container = styled.div`
  .dropdown-menu {
    position: absolute;
    z-index: 45;
    top: 100px;
    right: 0;
    background-color: white;
    border-radius: 8px;
    padding: 10px 20px;
    width: 200px;
    @media screen and (min-width: 1024px) {
      width: 220px;
      top: 115px;
    }
    ::before {
      content: "";
      position: absolute;
      top: -5px;
      right: 6.5%;
      height: 20px;
      width: 20px;
      background-color: white;
      transform: rotate(45deg);
     
    }
    .user-dropdown {
      display: block;
      @media screen and (min-width: 700px){
        display: none;
      }
      span {
        font-weight: 600;
      }
    }
    .genres-dropdown {
      display: block;
      @media screen and (min-width: 1160px){
        display: none;
      }
    }
    .search-dropdown {
      display: block;
      @media screen and (min-width: 700px){
        display: none;
      }
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
