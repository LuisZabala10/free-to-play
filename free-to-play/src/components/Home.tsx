import React, { useEffect, useState } from "react";
import { IImage } from "../interface/IImage";

const images: IImage[] = [
  {
    id: 1,
    url: "https://www.freetogame.com/g/26/thumbnail.jpg",
  },
  {
    id: 2,
    url: "https://www.freetogame.com/g/2/thumbnail.jpg",
  },
  { id: 3, url: "https://www.freetogame.com/g/3/thumbnail.jpg" },
  { id: 4, url: "https://www.freetogame.com/g/4/thumbnail.jpg" },
  { id: 5, url: "https://www.freetogame.com/g/509/smash-legends-1-small.jpg" },
];

const Home = () => {
  const [position, setPosition] = useState(0);
  const [image, setImage] = useState<IImage>({ id: 0, url: "" });

  //loagind data
  useEffect(() => {
    const img = images[position];
    setImage(img);
  }, [position]);

  const nextPosition = (): void => {
    const maxPositon: number = 4;
    if(position===maxPositon) return;
    if (position >= 0) {
      setPosition((current) => current + 1);
    }
  };

  const previousPosition = (): void => {
    const maxPositon: number = 4;
    if(position === 0) return;
    if (position <= maxPositon) {
      setPosition((current) => current - 1);
    }
  };

  return (
    <div className="mt-3">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={image.url}
              height={500}
              width={"100%"}
              className="d-block"
              alt="..."
            />
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            onClick={previousPosition}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            onClick={nextPosition}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
