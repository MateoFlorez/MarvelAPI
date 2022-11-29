import "../components.css"

export function ComicCard({ id, title, imagen }) {
  return (
    <div className="comic w-full" key={id}>
      <div className="rounded overflow-hidden flex flex-col justify-center items-center">
        <img className="imagen h-56 w-4/5 drop-shadow-xl" src={imagen} alt="" loading="lazy"></img>
        <div className="h-24 py-4">
          <h1 className="titulo font-semibold text-sm mb-2">{title}</h1>
        </div>
      </div>
    </div>
  );
}
