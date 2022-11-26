import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../childrens/Footer';
import Header from '../childrens/Header';
import Pokemontype from '../Pokemontype';

const Pokemonbytypes = () => {

    const [pokemontype, setPokemontype] = useState([]);
    
    useEffect(()=> {
        axios.get("https://pokebuildapi.fr/api/v1/pokemon/type/tenebres")
        .then((apiTypes)=>setPokemontype(apiTypes.data)).catch((e)=> console.error(e));
    })
    return (
        <div>
            <Header/>
            <main>
                <h1>Les pokémons par types</h1>
                <section>
                    {pokemontype.map((pokemon)=>
                    <article>
                        <Pokemontype pokemon={pokemon}/>
                    </article>
                    )}
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Pokemonbytypes;