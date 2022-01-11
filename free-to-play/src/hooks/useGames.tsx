import React, { useEffect, useState } from "react";
import { IGame } from "../interface/IGame";
import axiosInstance from "../api/apiHelper";

interface Props {
  url: string;
}

const useGames = (url: string) => {
  const [games, setGames] = useState<IGame[]>();
  const [isLoading, setIsloading] = useState(true);
  const getGames = async () => {
    axiosInstance.get<IGame[]>(url).then((response) => {
      setGames(response.data);
      setIsloading(false);
    });
  };

  useEffect(() => {
    getGames();
  }, [url]);

  return {
    games,
    isLoading,
  };
};

export default useGames;
