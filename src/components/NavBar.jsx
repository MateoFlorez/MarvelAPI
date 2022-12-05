import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";


export function NavBar() {
  return (
    <nav className="bg-stone-900 py-2 flex items-center justify-center font-bold text-white w-full sticky top-0 z-50">
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
            <img src={logo} className="h-14 w-52 cursor-pointer" alt=""></img>
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
