import { ReactNode } from "react";

export interface UserProviderProps {
  children: ReactNode;
}

export interface IUserProps {
 loginUser: (data: loginUserProps) => void;
 registerUser: (data: registerUserProps) => void;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
  setIsOpenModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalRegister: boolean;
}
export interface loginUserProps {
 email: string;
 password: string;
}
export interface registerUserProps {
 name: string;
 email: string;
 password: string;
 confirmPassword: string;
}

