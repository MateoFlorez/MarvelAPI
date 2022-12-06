// import App from '../App'
import "../components.css";

export function Card({ photo, name, id, description }) {
  return (
    <div className="content">
      <div className="content-inner" key={id}>
        <div className="content-front">
          <img
            className="h-72 w-full object-cover"
            src={photo}
            alt=""
            loading="lazy"
          ></img>
        </div>
        <div className="content-back">
          <h1>{name}</h1>
          <ul>
            <li>
              <strong>Name: </strong> {name}
            </li>
            <li>
              <strong>Description: </strong> {description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
