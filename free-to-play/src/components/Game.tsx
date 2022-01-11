import React from "react";
import { IGame } from "../interface/IGame";
import "animate.css";

const Game = (props: { game: IGame }) => {
  const { game } = props;
  return (
    <div className="col-xl-3 col-md-4 col-sm-5 pb-2 animate__animated animate__fadeIn">
      <div className="card" >
        <img src={game.thumbnail} className="card-img-top" alt={game.title} />
        <div className="card-body">
          <h5 className="card-title">{game.title}</h5>
          <span className="badge rounded-pill bg-primary">free</span>
        </div>
      </div>
    </div>
  );
};

export default Game;
