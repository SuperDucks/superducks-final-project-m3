import React, { ReactNode } from "react";

export interface IGenreProvider {
  children: ReactNode;
}

export interface IGenreContext {
  isOpenModalGenre: boolean;
  setIsOpenModalGenre: React.Dispatch<React.SetStateAction<boolean>>;
  userGenres: string[];
  setUserGenres: React.Dispatch<React.SetStateAction<string[]>>;
}
