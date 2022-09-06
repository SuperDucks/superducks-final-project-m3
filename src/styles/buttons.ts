import styled, { css } from "styled-components";

interface IButtonsProps{
  padding?: string;
  
}

export const BtnPrimary = styled.button<IButtonsProps>`
  background: var(--color-primary);
  border-radius: 30px;
  font: var(--font-title-9);
  font-weight: 600;
  color: var(--color-grey-4);
  transition: .3s;
  ${({padding}) => {
    switch(padding){
      case 'small': return css`padding: 6px 18px;`
      case 'big': return css`padding: 9px 39px;`
    }
  }}
  &:hover {
    filter: brightness(1.1);
  }
  &::disabled {
    cursor: not-allowed;
    opacity: .5;
  }
  
`;


export const BtnFake = styled.button`
  background: transparent;
  font: var(--font-title-9);
  font-weight: 600;
  color: var(--color-grey-0);
  padding: 6px 28px;

  
`;
export const BtnOutline = styled.button`
  background: var(--color-primary);
  border-radius: 30px;
  font: var(--font-title-9);
  font-weight: 600;
  color: var(--color-grey-4);
  
  
`;
export const BtnOutlineModal = styled.button`
  background: transparent;
  border-radius: 30px;
  font: var(--font-title-9);
  font-weight: 600;
  color: var(--color-grey-4);
  border: 2px solid var(--color-grey-4);
  padding: 8px 28px;
  
  
`;
export const BtnRegister = styled.button`
  background: transparent;
  border-radius: 30px;
  font: var(--font-title-9);
  font-weight: 600;
  color: white;
  border: 2px solid white;
  padding: 8px 28px;
`;
