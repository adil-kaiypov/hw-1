import React from "react";
import classes from './infoPage.module.css'

const InfoPage = () =>{
    return(
        <div>
            <h1>Info</h1>
            <p>This is a simple React app that allows you to browse information about Pokemons and their abilities.</p>
            <p>It was created as a learning exercise for building React applications and using the PokeAPI.</p>
            <br />
            <h3>Developers:</h3>
            <img src="https://sun9-29.userapi.com/impf/c630523/v630523215/42872/Z76Hy9O1lC8.jpg?size=976x610&quality=96&sign=a102300a604f29167789d9633fda4eab&c_uniq_tag=5QWZZOLgxCm_wXoTn4sQRuGObpZdI-pzFtttRxoq7Zs&type=album" alt="" />
            <p>Adil</p>
        </div>
    )
};

export default InfoPage;
