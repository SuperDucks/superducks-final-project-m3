import { ReactNode } from "react";

export interface UserProviderProps {
  children: ReactNode;
}

export interface IUserProps {
 loginUser: (data: loginUserProps) => void;

}
export interface loginUserProps {
 email: string;
 password: string;
}

