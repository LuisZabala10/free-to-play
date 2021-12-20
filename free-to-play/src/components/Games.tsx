import React, { useEffect, useState } from "react";
import Game from "./Game";
import { IGame } from "../interface/IGame";
import getAllGames from "../helpers/gameHelper";

const Games = () => {
  const [games, setGames] = useState<IGame[]>();
  useEffect(() => {
    const getData = async () => {
      try {
        const data: IGame[] = await getAllGames();
        setGames(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <div className="pt-4 row align-items-start">
      {games ? (
        games.map((game: IGame) => {
          return <Game key={game.id} game={game} />;
        })
      ) : (
        <h1 style={{ color: "black" }}>no hay juegos</h1>
      )}
    </div>
  );
};

export default Games;
