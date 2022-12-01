import { useState, useEffect } from "react";
import axios from "axios";
import { ComicCard } from "./ComicCard";
import "../components.css"


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
      <div className="flex h-5/6 w-full justify-center">
        <div className="trapecio w-full flex justify-center items-center z-10">
          <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mulogo_lob_log_eye_01.png" alt="" className="mt-52"/>
          <h1 className="text-white">AVAILABLE NOW</h1>
        </div>
        <div className="section_image -z-10 absolute 2xl:opacity-70 overflow-hidden">
          <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/newtomu_base_set_dsk_relaunch.jpg" alt="" className=""/>
        </div>
      </div>
      <div className="App flex flex-row justify-center items-center bg-white p-3 w-4/6 md:-mt-16 z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-2">
          {comics.slice(0, 4).map((comic) => (
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
