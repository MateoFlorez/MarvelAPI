import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";


export function NavBar() {
  return (
    <nav className="bg-stone-800 py-4 flex items-center justify-center font-bold text-white w-full">
      <ul className="flex items-center">
        <li className="">
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { borderBottom: "2px solid red", padding: "5px" }
                : {};
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img src={logo} className="h-16 w-64 cursor-pointer" alt=""></img>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { borderBottom: "2px solid red", padding: "5px" }
                : {};
            }}
            to="/characters"
          >
            Characters
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
