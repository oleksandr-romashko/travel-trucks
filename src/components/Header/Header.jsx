import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

import sprite from "@/assets/icons/sprite.svg";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css["page-header"]}>
      <div className={clsx(css["header-container"],"container")}>
        <Link to='/' className={css["logo-link"]}>
          <svg className={css.logo} aria-label="logotype">
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
        </Link>
        <nav className={css["nav-menu"]}>
          <NavLink to="/" className={css["nav-menu-item"]}>Home</NavLink>
          <NavLink to="/catalog" end className={css["nav-menu-item"]}>Catalog</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;