import { IUserProps, UserProviderProps } from "./interfaces";


export const UserContext = createContext<IUserProps>({} as IUserProps);

export const UserProvider = ({ children }: UserProviderProps) => {


  return (
    <UserContext.Provider
      value={{
       
      }}
    >
      {children}
    </UserContext.Provider>
  );
};