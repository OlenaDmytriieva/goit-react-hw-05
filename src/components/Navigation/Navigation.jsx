import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <NavLink to="/" className={style.navLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={style.navLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
