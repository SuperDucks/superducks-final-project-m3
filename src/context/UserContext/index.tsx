import { createContext, useState } from "react";
import { IUserProps, loginUserProps, UserProviderProps } from "./interfaces";


export const UserContext = createContext<IUserProps>({} as IUserProps);

export const UserProvider = ({ children }: UserProviderProps) => {

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const loginUser = (data: loginUserProps) => {
    //autenticar aqui
   
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        setIsOpenModal,
        isOpenModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};