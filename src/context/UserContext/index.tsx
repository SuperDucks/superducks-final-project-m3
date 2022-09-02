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
  IFormEdit,
} from "./interfaces";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProvider) => {
  /* const [loading, setLoading] = useState(false); */
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate()
  
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenEditProfileModal, setIsOpenEditProfileModal] = useState<boolean>(false);
  const [isOpenModalRegister, setIsOpenModalRegister] =
  useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN')
    const id = localStorage.getItem('@USERID')
    async function autoLogin(){
      try {
        /* setLoading(true) */
        const response = await userAPI.get(`/users?id=${id}`, {
          headers: {
            Authorization:`Bearer ${token as string}`
          }
        })
        setUser(response.data[0])
        console.log(user)
        navigate('/dashboard')
      } catch (error) {
        console.log(error)
        console.log(error)

        localStorage.removeItem('@TOKEN');
        localStorage.removeItem('@USERID');
        navigate('/');
        
      } finally {
       /*  setLoading(false) */
      }
    }
    if(token && id) {
      autoLogin();
    }
  }, [])


  async function registerUser(data: IFormRegister, setLoading: React.Dispatch<React.SetStateAction<boolean>>): Promise<void> {
    try {
      const newData = {
        ...data, genders: []
      }
      setLoading(true);
      const {data: apiData} = await userAPI.post('/register', newData);
      console.log(apiData)      
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
        localStorage.setItem('@USERID', response.data.user.id)
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
    localStorage.removeItem('@USERID');
    navigate('/');
  };
  
  function  editProfileUser(data: IFormEdit, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
    try {
      toast.success('Successfully edited!')
    } catch (error) {
      toast.success('An error has occurred!')
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <UserContext.Provider
      value={{
        user,
        registerUser,
        loginUser,
        logoutUser,
        editProfileUser,
        setIsOpenModal,
        isOpenModal,
        isOpenModalRegister,
        setIsOpenModalRegister,
        isOpenEditProfileModal,
        setIsOpenEditProfileModal,
        dropdownOpen,
        setDropdownOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
