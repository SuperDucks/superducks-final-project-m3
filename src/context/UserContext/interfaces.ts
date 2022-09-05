import React, { ReactNode } from "react";
import { IMovies } from "../FilmContext/interfaces";

export interface IUserProvider {
  children: ReactNode;
}

export interface IFormRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IFormLogin {
  email: string;
  password: string;
}
export interface IFormEdit {
  photo?: string | undefined;
  name?: string | undefined;
 /*  password?: string | undefined;
  confirmPassword?: string | undefined; */
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  avatar_url: string;
  genres?: string[] | [] | undefined;
  movie_list?: string[] | [] | undefined;
}

export interface IUserContext {
  user: IUser | null;
  registerUser: (
    data: IFormRegister,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  loginUser: (
    data: IFormLogin,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  logoutUser: () => void;
  editProfileUser: (
    data: IFormEdit,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
  isOpenModalRegister: boolean;
  setIsOpenModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenEditProfileModal: boolean;
  setIsOpenEditProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownOpen: boolean;
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  displayGenre: string[];
  setDisplayGenre: React.Dispatch<React.SetStateAction<string[]>>;
  loading: boolean;
  movieList: IMovies[];
  setMovieList: React.Dispatch<React.SetStateAction<IMovies[]>>;
}
