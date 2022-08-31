import ProviderProps from "./interfaces";
import { UserProvider } from "../UserContext";
import { FilmProvider } from "../FilmContext";

const Providers = ({ children }: ProviderProps) => {
  return (
    <UserProvider>
      <FilmProvider>{children}</FilmProvider>
    </UserProvider>
  );
};
export default Providers;
