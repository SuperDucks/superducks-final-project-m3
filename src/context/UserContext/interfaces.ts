import { ReactNode } from "react";

export interface UserProviderProps {
  children: ReactNode;
}

export interface IUserProps {
 loginUser: (data: loginUserProps) => void;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
}
export interface loginUserProps {
 email: string;
 password: string;
}

