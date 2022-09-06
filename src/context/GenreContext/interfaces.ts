import React, { ReactNode } from "react";

export interface IGenreProvider {
  children: ReactNode;
}

export interface IGenreContext {
  isOpenModalGenre: boolean;
  setIsOpenModalGenre: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayGenre: React.Dispatch<React.SetStateAction<string[]>>;
  displayGenre: string[];
  addUserGenre: (data: string[]) => void;
  isSelect: boolean;
  setIsSelect: React.Dispatch<React.SetStateAction<boolean>>;
  
}
