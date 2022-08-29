import { createContext } from "react";
import { IUserProps, loginUserProps, UserProviderProps } from "./interfaces";


export const UserContext = createContext<IUserProps>({} as IUserProps);

export const UserProvider = ({ children }: UserProviderProps) => {

  const loginUser = (data: loginUserProps) => {
    //autenticar aqui
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,

       
      }}
    >
      {children}
    </UserContext.Provider>
  );
};