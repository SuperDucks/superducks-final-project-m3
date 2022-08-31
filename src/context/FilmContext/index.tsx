import { createContext } from "react";
import { FilmProviderProps, IFilmProps } from "./interfaces";

export const FilmContext = createContext<IFilmProps>({} as IFilmProps);

export const FilmProvider = ({ children }: FilmProviderProps) => {
  return <FilmContext.Provider value={{}}>{children}</FilmContext.Provider>;
};
