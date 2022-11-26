import React from 'react';
import Footer from '../childrens/Footer';
import Header from '../childrens/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <main>
                <h1>Site sur les pokémons</h1>
                <section>
                    <h2>Titre de la section</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit nostrum aperiam nesciunt ut vel non enim, doloremque mollitia, hic alias. Aperiam provident hic, unde veniam sed nulla eius, commodi maiores neque adipisci eum dolor. Rerum vero aperiam optio expedita ipsum est, aliquid deleniti ut, aut perspiciatis, sunt atque fugit!</p>
                </section>
                <section>
                    <h2>La NewsLetter</h2>
                    <input type="email" name="" id="" placeholder="Votre email ici"/>
                    <input type="submit" value=" Valider " />
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;