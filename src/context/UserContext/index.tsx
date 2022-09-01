/* eslint-disable react-hooks/exhaustive-deps */

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userAPI } from "../../services/api";
import {
  IUserContext,
  IUser,
  IFormRegister,
  IFormLogin,
  IUserProvider,
} from "./interfaces";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate()

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenModalRegister, setIsOpenModalRegister] =
    useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN')

    async function autoLogin(){
      try {
        const response = await userAPI.post('/autologin', {}, {
          headers: {
            auth: token as string,
          }
        })
        setUser(response.data.user)
        navigate('/dashboard')
      } catch (error) {
        localStorage.removeItem('@TOKEN');
        navigate('/');
      } finally {

      }
    }
    if(token) {
      autoLogin();
    }
  }, [])


  async function registerUser(data: IFormRegister, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
    try {
      setLoading(true);
      await userAPI.post('/register', data);      
      setIsOpenModalRegister(false);
      toast.success('User registered successfully');
      setTimeout(() => {
        navigate('/')
      }, 2000);        
    } catch (error) {
      toast.error('An error has occurred!')     
    } finally {
      setLoading(false);
    }
  };

  async function loginUser(data: IFormLogin, setLoading: React.Dispatch<React.SetStateAction<boolean>>): Promise<void> {   
      try {
        setLoading(true);
        const response = await userAPI.post('/login', data);
        setUser(response.data.user);
        localStorage.setItem('@TOKEN', response.data.accessToken)
        toast.success('Login successfully!')
        setTimeout(() => {
          navigate('/dashboard')
        }, 2000);        
      } catch (error) {
        toast.error('An error has occurred!') 
      } finally {
        setLoading(false);
      }
  };

  function logoutUser() {
    setUser(null);
    localStorage.removeItem('@TOKEN');
    navigate('/');
  }
  
  return (
    <UserContext.Provider
      value={{
        user,
        registerUser,
        loginUser,
        logoutUser,
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
