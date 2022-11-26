import React from 'react';

const Pokemonarticle = ({pokemon}) => {
    return (
        <article className="artcilePokemon">
            <h2>{pokemon.name}</h2>
            <div>
                <img src={pokemon.image} alt={"L'image d'"+pokemon.name} />
            </div>
        </article>
    );
};

export default Pokemonarticle;