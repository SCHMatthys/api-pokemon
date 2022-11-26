import React from 'react';

const Pokemontype = ({pokemon}) => {
    return (
        <article className="pokemonTypeArticle">
            <h2> {pokemon.name} </h2>
            <img src={pokemon.image} alt={"L'image d'"+pokemon.name} />
        </article>
    );
};

export default Pokemontype;