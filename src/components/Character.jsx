import { Card } from "./Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { LastSection } from "./LastSection";
import Search from './Search';

export function Character() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetch = async() => {
      if (query === '') {
        axios.get("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=788c8412ebf85f4bcc2e87b43c0b3ece&hash=3abdddf8b16f921bf669846b5e259bf2")
        .then((res) => {
          setCharacters(res.data.data.results);
      })
        .catch((error) => console.warn(error));
      } else {
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}ts=1&apikey=788c8412ebf85f4bcc2e87b43c0b3ece&hash=3abdddf8b16f921bf669846b5e259bf2`)
        .then((res) => {
          setCharacters(res.data.data.results);
      })
        .catch((error) => console.warn(error));
      }
    }
    fetch()
  }, [query]);

  console.log(characters);

  return (
    <div className="App flex flex-col justify-center items-center">
      <Search search={(q) => setQuery(q)}/>
      <div className="grid w-4/5 grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2 my-4">
        {characters.map((per) => (
          <Card
            key={per.id}
            photo={`${per.thumbnail.path}.${per.thumbnail.extension}`}
            name={per.name}
            description={per.description}
          />
        ))}
      </div>
      <LastSection />
    </div>
  );
}
