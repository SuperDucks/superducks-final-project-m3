import styled, { css } from "styled-components";

interface IButtonsProps{
  padding?: string;
  
}

export const BtnPrimary = styled.button<IButtonsProps>`
  background: var(--color-primary);
  border-radius: 30px;
  font: var(--font-title-8);
  font-weight: 600;
  color: var(--color-grey-4);

  ${({padding}) => {
    switch(padding){
      case 'small': return css`padding: 6px 18px;`
      case 'big': return css`padding: 9px 39px;`
    }
  }}
  
`;


export const BtnFake = styled.button`
  background: transparent;
  font: var(--font-title-9);
  font-weight: 600;
  color: var(--color-grey-0);
  
`;
export const BtnOutline = styled.button`
  background: var(--color-primary);
  border-radius: 30px;
  font: var(--font-title-9);
  font-weight: 600;
  color: var(--color-grey-4);
  padding: 9px 39px;
  
`;