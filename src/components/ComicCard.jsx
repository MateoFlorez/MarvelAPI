import "../components.css"

export function ComicCard({ id, title, imagen }) {
  return (
    <div className="comic w-full" key={id}>
      <div className="flex flex-col justify-center items-center opacity-80 hover:-translate-y-2 hover:text-red-600 hover:opacity-100 transition-all ease-in duration-300">
        <img className="imagen_comic h-72 w-4/5 drop-shadow-xl" src={imagen} alt="" loading="lazy"></img>
        <div className="h-24 py-4">
          <h1 className="titulo font-semibold text-md mb-2">{title}</h1>
        </div>
      </div>
    </div>
  );
}
