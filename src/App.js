import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Arrayjson from "./components/pages/Arrayjson";
import Error404 from "./components/pages/Error404";
import Home from "./components/pages/Home";
import Pokemonbytypes from "./components/pages/Pokemonbytypes";
import Pokemons from "./components/pages/Pokemons";

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pokemons" element={<Pokemons/>} />
          <Route path="/arrayjson" element={<Arrayjson/>} />
          <Route path="/poekmonstype" element={<Pokemonbytypes/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;