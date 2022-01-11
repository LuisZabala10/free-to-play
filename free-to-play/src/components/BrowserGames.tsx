import { faDesktop, faSpinner, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import useGames from "../hooks/useGames";
import usePagination from "../hooks/usePagination";
import { IGame } from "../interface/IGame";
import Pagination from "./common/Pagination";
import Game from "./Game";

const BrowserGames = () => {
  const { isLoading, games } = useGames("/games?platform=browser");
  const gamesPerPages = useRef(8);

  const {
    currentItems,
    currentPage,
    moveNextPage,
    movePreviousPage,
    totalPages,
  } = usePagination({
    items: games!,
    itemsPerPages: gamesPerPages.current,
  });

  return (
    <>
      {!isLoading ? (
        <>
          <div className="title">
            <h3>
              <FontAwesomeIcon icon={faWindowMaximize} color="white" className="icon"/>
              PC Games
            </h3>
          </div>
          <hr />
          <div className="pt-4 row justify-content-center">
            {currentItems?.map((game: IGame) => {
              return <Game key={game.id} game={game} />;
            })}
          </div>

          <Pagination
            moveNextPage={moveNextPage}
            movePreviousPage={movePreviousPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      ) : (
        <div className="row">
          <div className="col-12 text-center">
            <FontAwesomeIcon icon={faSpinner} spin color="white" />
          </div>
        </div>
      )}
    </>
  );
};

export default BrowserGames;
