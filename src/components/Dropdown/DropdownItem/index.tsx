import { ReactNode } from "react";
import {  Li } from "./styles";

interface IDropdownProps {
  text: string;
  children: ReactNode;
}
const DropdownItem = ({text, children}: IDropdownProps) => {

  return (
    <Li>
      {children}
      <span>{text}</span>
    </Li>
  )
};
export default DropdownItem;