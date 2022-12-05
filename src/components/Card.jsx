// import App from '../App'
import "../components.css"

export function Card({ photo, name, id }) {
  return (
    <div className="w-full px-2" key={id}>
      <div className="comic_card overflow-hidden shadow-xl bg-black text-white hover:scale-105 hover:transition-transform hover:delay-100 cursor-pointer">
        <img
          className="h-52 w-full"
          src={photo}
          alt=""
          loading="lazy"
        ></img>
        <div className="name_character px-6 py-4 text-center h-24">
          <div className="font-bold text-lg mb-2 text-center">{name}</div>
        </div>
      </div>
    </div>
  );
}
