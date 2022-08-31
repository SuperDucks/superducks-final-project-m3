import styled from "styled-components";


export const Container = styled.div`
  background: rgba(141, 141, 141, 0.2);
  width: 100%;
  height: 488px;

  display: flex;
  flex-direction: column;

  gap: 46px;
  padding: 46px 24px 0 66px;

  h2{
    font: var(--font-title-3);
    color: var(--color-grey-0);
    font-weight: 600;
    
  }
  
  ul{
    margin-top: 18px;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    
    li{
      list-style: none;
      
    }

  }

  .genre-add-button{

    height: 20px;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 12px;

    p{
      font: var(--font-title-9);
      color: var(--color-grey-0);
      font-weight: 400;
    }
  }

`

