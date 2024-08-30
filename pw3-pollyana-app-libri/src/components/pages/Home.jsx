import React from "react";

import  style from './Home.module.css'

const Home = () =>{

    return(
        <section className={style.home_container}>
            <h1>Bem Vindo ao <span>LIBRI</span></h1>
            <p>Sua plataforma web de gestão de livros</p>
            <img src="./book_home.jpg" alt="Home" />            
        </section>
    )
}

export default Home