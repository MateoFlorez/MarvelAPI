// import App from '../App'

export function Card({ photo, name, id }) {
  return (
    <div className="w-full px-2" key={id}>
      <div className="rounded overflow-hidden shadow-xl bg-gray-600 text-white hover:scale-105 hover:transition-transform hover:delay-100">
        <img
          className="h-80 w-full"
          src={photo}
          alt=""
          loading="lazy"
        ></img>
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2 text-center">{name}</div>
        </div>
      </div>
    </div>
  );
}
