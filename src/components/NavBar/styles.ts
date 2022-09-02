import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 130px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 2px 40px rgba(133, 133, 133, 0.1);
  background: var(--color-grey-5);

  .nav-bar-choice{
    display: flex;
    gap: 20px;

    button{
      background-color: transparent;
      font: var(--font-title-7);
      color: var(--color-grey-0);
      font-weight: 600;
    }

  }

  .nav-bar-search{
    width: 384px;
    height: 48px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 2px solid var(--color-grey-0);
    border-radius: 25px;

    input{
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 25px 0 0 25px;
      padding-left: 22px;
      border: none;
      background-color: transparent;
      color: var(--color-grey-0);

    }

    button{
      padding-right: 15px;
      background-color: transparent;
      color: var(--color-grey-0);
    }

  }

  .nav-bar-profile{
    display: flex;
    align-items: center;

    h3{
      font: var(--font-title-6);
      color: var(--color-grey-0);
      font-weight: 500;
    
    }

    button{
      background-color: transparent;

    }

    figure{
      width: 50px;
      height: 50px;
      border-radius: 50px;
      overflow: hidden;
      box-shadow: 3px 3px 40px rgba(133, 133, 133, 0.1);

      img{
        width: 100%;
      }
    }
  }

`