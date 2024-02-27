import css from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'movies'}>
                <div className={css.HeaderLink}>Movies</div>
            </NavLink>
            <NavLink to={'genres'}>
                <div className={css.HeaderLink}>Genres</div>
            </NavLink>
            <NavLink to={'search'}>
                <div className={css.HeaderLink}>Search</div>
            </NavLink>
        </div>
    );
};

export {Header};