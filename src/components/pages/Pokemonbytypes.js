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
                <div className="inputContainer">
                    <select name="types" id="types-select">
                        <option value=""> -- Choisir un type --</option>
                        <option value="typeAcier">Acier</option>
                        <option value="typeCombat">Combat</option>
                        <option value="typeDragon">Dragon</option>
                        <option value="typeEau">Eau</option>
                        <option value="typeElectrik">Electrik</option>
                        <option value="typeFée">Fée</option>
                        <option value="typeFeu">Feu</option>
                        <option value="typeGlace">Glace</option>
                        <option value="typeInsecte">Insecte</option>
                        <option value="typeNormal">Normal</option>
                        <option value="typePlante">Plante</option>
                        <option value="typePoison">Poison</option>
                        <option value="typePsy">Psy</option>
                        <option value="typeRoche">Roche</option>
                        <option value="typeSol">Sol</option>
                        <option value="typeSpectre">Spectre</option>
                        <option value="typeTénèbres">Ténèbres</option>
                        <option value="typeVol">Vol</option>
                    </select>
                    <input type="submit" value=" Valider " />
                </div>
                
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