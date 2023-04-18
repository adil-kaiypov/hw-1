import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from './pokemon.module.css';


const Pokemon = ({name}) =>{
    const [imgUrl, setImgUrl] = useState('');

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(data => data.json())
        .then(data => setImgUrl(data.sprites.front_default))
    }, [imgUrl])

    return(
        <div className={classes.pokemon}>
            <img src={imgUrl} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Pokemon;