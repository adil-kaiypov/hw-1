import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useParams, NavLink} from 'react-router-dom';

import classes from './singlePokemonPage.module.css'

const SinglePokemonPage = () =>{
    const {name} = useParams('');

    const [pokemon, setPokemon] = useState(null);
    const [imageUrl, setImageUrl] = useState({});

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(data => data.json())
        .then(data => {
            setPokemon(data);
            setImageUrl({
                default: data.sprites.front_default, 
                shiny: data.sprites.front_shiny,
            });
        })
    }, [name])
    return(
        <>
        {pokemon && (
        <div className={classes.pokemon}>
            <h1>{name}</h1>
            <div className={classes.forms}>
                <div>
                    <img src={imageUrl['default']} alt="" />                
                    <h2>Default</h2>
                </div>
                <div>
                    <img src={imageUrl['shiny']} alt="" />                
                    <h2>Shiny</h2>
                </div>
            </div>

            <div className={classes.br}></div>

            <div className={classes.stats}>
                <h2>Stats</h2>
                <ul>
                    {pokemon.stats.map(
                        stat => <li key={stat.stat.name}>{stat.stat.name}   {stat.base_stat}</li>
                    )}
                </ul>
            </div>

            <div className={classes.br}></div>

            <div className={classes.abilities}>
                <h2>Abilities</h2>
                <ul>
                    {pokemon.abilities.map(
                        abil => <li key={abil.ability.name}> <NavLink to={`/ability/${abil.ability.name}/${name}`}>{abil.ability.name}</NavLink></li>
                    )}
                </ul>
            </div>
        </div>
        )}
        </>
    )
}

export default SinglePokemonPage;