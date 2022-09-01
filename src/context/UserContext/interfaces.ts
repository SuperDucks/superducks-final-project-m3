import React, { ReactNode } from "react";

export interface IUserProvider {
  children: ReactNode;
}

export interface IFormRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IFormLogin {
  email: string;
  password: string;
}

export interface IUser {
	id: number
	name: string,
  email: string,
}

export interface IUserContext {
  
  user: IUser | null;
  registerUser: (data: IFormRegister, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
  loginUser: (data: IFormLogin, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
  logoutUser: () => void;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
  setIsOpenModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalRegister: boolean;
}


