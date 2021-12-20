import axios from "axios";
import { IGame } from "../interface/IGame";

const getAllGames = async (): Promise<IGame[]> => {
  const URL: string =
    "https://free-to-play-games-database.p.rapidapi.com/api/games";
  const options = {
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "3bcd739527mshbce3e04616d0273p150a24jsne24d41cff18e",
    },
  };

  return axios
    .get<IGame[]>(URL, options)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};

export default getAllGames;
