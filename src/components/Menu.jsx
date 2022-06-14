import React from 'react'
import { Link } from "react-router-dom";

import FavoriteContext from "./contexts/favoritesContext";

const { useContext } = React;

const Menu = () => {
    const { favoritePokemons } = useContext(FavoriteContext);

    return (
        <div >
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/alive">Favoritos</Link>



            </nav>
            <nav>
                <div />
                <div>
                </div>
                <div>&#10084;&#65039; {favoritePokemons.length}</div>
            </nav>
        </div>
    )
}
export default Menu