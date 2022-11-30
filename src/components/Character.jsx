import { Card } from "./Card";
import {useState, useEffect} from 'react';
import axios from 'axios'

export function Character() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=788c8412ebf85f4bcc2e87b43c0b3ece&hash=3abdddf8b16f921bf669846b5e259bf2"
      )
      .then((res) => {
        setCharacters(res.data.data.results);
      })
      .catch((error) => console.warn(error));
  }, []);

  console.log(characters);

  return (
    <div className="App flex flex-col justify-center items-center mt-4">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-5 md:grid-cols-3">
        {characters.map((per) => (
          <Card
            key={per.id}
            photo={`${per.thumbnail.path}.${per.thumbnail.extension}`}
            name={per.name}          
            />
        ))}
      </div>
    </div>
  );
}
