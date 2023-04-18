import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Pokemon from "../../components/Pokemon";
import {Link} from 'react-router-dom'
import classes from './pokemonsPage.module.css' 


export const PokemonsPage = () =>{

    const [pokemons, setPokemons] = useState([]);

    useEffect(() =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
        .then(data => data.json())
        .then(data => setPokemons(data.results))
    }, [pokemons])

    return(
        <div className={classes.pokemonsPage}>
            {
            pokemons.map
                (pokemon =>
                    <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}> <Pokemon name={pokemon.name}> </Pokemon></Link>
                )
                }
        </div>
    )
};

export default PokemonsPage;