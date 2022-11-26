import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../childrens/Footer';
import Header from '../childrens/Header';
import Pokemonarticle from '../childrens/Pokemonarticle';

const Pokemons = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get("https://pokebuildapi.fr/api/v1/pokemon/limit/151")
        .then((apiPokemons)=>setPokemons(apiPokemons.data)).catch((e) => console.error(e));
    }, []);

    return (
        <div>
            <Header/>
            <main>
                <h1>Les Pokémons</h1>
                <section className="pokemonsContainer">
                    {pokemons.map((pokemon)=>
                        <article>
                            <Pokemonarticle pokemon={pokemon}/>
                        </article>
                    )}
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Pokemons;