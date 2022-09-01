import { useState, createContext } from "react";
import { IGenreContext, IGenreProvider } from "../GenreContext/interfaces";

export const GenreContext = createContext({} as IGenreContext);

export const GenreProvider = ({ children }: IGenreProvider) => {
  const [isOpenModalGenre, setIsOpenModalGenre] = useState<boolean>(false);
  const [userGenres, setUserGenres] = useState<string[]>([]);

  return (
    <GenreContext.Provider
      value={{
        setIsOpenModalGenre,
        isOpenModalGenre,
        setUserGenres,
        userGenres,
      }}
    >
      {children}
    </GenreContext.Provider>
  );
};
