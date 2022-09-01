import { useState, createContext } from "react";
import { IGenreContext, IGenreProvider } from "../GenreContext/interfaces";

export const GenreContext = createContext({} as IGenreContext);

export const GenreProvider = ({ children }: IGenreProvider) => {
  const [isOpenModalGenre, setIsOpenModalGenre] = useState<boolean>(true);

  return (
    <GenreContext.Provider value={{ setIsOpenModalGenre, isOpenModalGenre }}>
      {children}
    </GenreContext.Provider>
  );
};
