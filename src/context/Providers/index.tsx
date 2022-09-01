import ProviderProps from "./interfaces";
import { UserProvider } from "../UserContext";
import { FilmProvider } from "../FilmContext";
import { GenreProvider } from "../GenreContext";

const Providers = ({ children }: ProviderProps) => {
  return (
    <UserProvider>
      <FilmProvider>
        <GenreProvider>{children}</GenreProvider>
      </FilmProvider>
    </UserProvider>
  );
};
export default Providers;
