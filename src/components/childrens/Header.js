import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <div className="filter">
                    <nav >
                        <ul className="navContainer">
                            <li>
                                <NavLink to={"/"}>HOME</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/pokemons"}>Pokemons</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/arrayjson"}>Array</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/poekmonstype"} >Types</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;