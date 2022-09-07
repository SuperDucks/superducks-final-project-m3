
import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  margin: 0px auto;
  padding: 10px 0px;
  list-style: none;

  img {
    max-width: 20px;
    margin-right: 10px;
    opacity: 0.5;
    transition: 0.2s;
  }
  span {
    width: 100%;
    margin-left: 10px;
    transition: 0.2s;
  }
  
  :hover {
    color: var(--color-primary);
    cursor: pointer;
  }
  
`;