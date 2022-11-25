import "./App.css";
import logo from "./assets/logo.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "./components/Card";

// https://gateway.marvel.com:443/v1/public/characters?apikey=788c8412ebf85f4bcc2e87b43c0b3ece

// public key: 788c8412ebf85f4bcc2e87b43c0b3ece
// private key: 77a51717ba4808f3b7e7b9ff27ff35c3a8d74f80
// ts: 1

// 177a51717ba4808f3b7e7b9ff27ff35c3a8d74f80788c8412ebf85f4bcc2e87b43c0b3ece

// Hash: 3abdddf8b16f921bf669846b5e259bf2

function App() {
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
    <div className="App flex flex-col justify-center items-center">
      <img src={logo} alt="" className="w-48" />

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-5 md:grid-cols-3">
        {characters.map((per) => (
          <Card
            id={per.id}
            photo={`${per.thumbnail.path}.${per.thumbnail.extension}`}
            name={per.name}
            desc={per.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
