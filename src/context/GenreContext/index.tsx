import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";
import { userAPI } from "../../services/api";
import { IGenreContext, IGenreProvider } from "../GenreContext/interfaces";
import { UserContext } from "../UserContext";

export const GenreContext = createContext({} as IGenreContext);

export const GenreProvider = ({ children }: IGenreProvider) => {
  const [isOpenModalGenre, setIsOpenModalGenre] = useState<boolean>(false);
  const { displayGenre, setDisplayGenre, user } = useContext(UserContext);

  async function addUserGenre(data: string[]) {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await userAPI.patch(
        `/users/${user?.id}`,
        { genres: data },
        {
          headers: {
            Authorization: `Bearer ${token as string}`,
          },
        }
      );
      setDisplayGenre(response.data.genres);
    } catch (error) {
      console.log(error);
      toast.error("An error has occurred!");
    } finally {
    }
  }

  return (
    <GenreContext.Provider
      value={{
        setIsOpenModalGenre,
        isOpenModalGenre,
        setDisplayGenre,
        displayGenre,
        addUserGenre,
      }}
    >
      {children}
    </GenreContext.Provider>
  );
};
