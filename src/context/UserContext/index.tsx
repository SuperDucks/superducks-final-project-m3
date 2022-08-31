import { createContext, useState } from "react";
import {
  IUserProps,
  loginUserProps,
  registerUserProps,
  UserProviderProps,
} from "./interfaces";

export const UserContext = createContext<IUserProps>({} as IUserProps);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenModalRegister, setIsOpenModalRegister] =
    useState<boolean>(false);

  const loginUser = (data: loginUserProps) => {
    //autenticar aqui
  };
  const registerUser = (data: registerUserProps) => {};

  return (
    <UserContext.Provider
      value={{
        loginUser,
        registerUser,
        setIsOpenModal,
        isOpenModal,
        isOpenModalRegister,
        setIsOpenModalRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
