import React, { useState } from 'react';
import Footer from '../childrens/Footer';
import Header from '../childrens/Header';

const Arrayjson = () => {
   
    const [cars, setCars] = useState(
        [
            {brand:"Toyota", desc:"ChingChangToyotaShiChong"},
            {brand:"Honda", desc:"ChingChanHondaShigChong"},
            {brand:"Kia", desc:"ChingChangKiaShiChong"},
        ]
    )

    return (
        <div>
            <Header/>
            <main>
                <h1>Les Pokémons</h1>
                <section>
                    {cars.map((car)=>{
                        return(
                            <article>
                                <h2>{car.brand}</h2>
                                <p>{car.desc}</p>
                            </article>
                        )
                    })}
                </section>
            </main>
            <Footer/>
        </div>
    );
};
export default Arrayjson;