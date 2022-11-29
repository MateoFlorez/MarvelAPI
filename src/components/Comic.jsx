import { useState, useEffect } from "react";
import axios from "axios";
import { ComicCard } from "./ComicCard";

export function Comic() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=788c8412ebf85f4bcc2e87b43c0b3ece&hash=3abdddf8b16f921bf669846b5e259bf2"
      )
      .then((res) => {
        setComics(res.data.data.results);
      })
      .catch((error) => console.warn(error));
  }, []);

  console.log(comics);

  return (
    <>
      <div className="App flex flex-row justify-center items-center bg-white p-3 w-4/6 -mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-2">
          {comics.slice(0, 5).map((comic) => (
            <ComicCard
              key={comic.id}
              title={comic.title}
              imagen={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
