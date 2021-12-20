import React from "react";
import { IGame } from "../interface/IGame";

const Game = (props: { game: IGame }) => {
  const { game } = props;
  return (
    <div className="col-3 pb-2">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={game.thumbnail}
          className="card-img-top"
          alt={game.title}
        />
        <div className="card-body">
          <h5 className="card-title">{game.title}</h5>
          <span className="badge rounded-pill bg-primary">free</span>
          <p className="card-text">
            {game.short_description.length>40? game.short_description.substring(0,40):game.short_description}....
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game;
