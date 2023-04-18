import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {useParams, NavLink} from "react-router-dom"
import classes from './abiltyPage.module.css'

const AbilityPage = () =>{
    const {name, from} = useParams();
    
    const [ability, setAbility] = useState({});

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/ability/${name}`)
        .then(data => data.json())
        .then(data => setAbility(data))
    }, [name]);

    console.log(ability, "ability")

    return(
        <>
        {ability && (
            <div className={classes.ability}>
                <h1>{name}</h1>
                {ability.effect_entries && (
                    <p>{ability.effect_entries[1].effect}</p>
                )}
            </div>
        )}

        <NavLink to={`/pokemon/${from}`}>Back</NavLink>
        </>
    )
}

export default AbilityPage;
