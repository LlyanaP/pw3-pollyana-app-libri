import style from '../pages/DetailBook.module.css'

import {React, useState, useEffect} from "react";

import { useParams } from 'react-router-dom';

import Button from '../Button';

import caverna from '../../assets/livros/cavernas_aco.jpg'

const DetailBook = () => {
    /*Recuperar o codigo do livro, tem que estar dentro de chaves*/

    const {cod_livro} = useParams()
    console.log('Código livro' + cod_livro)

    /*Criação da state dos livros*/
    const[book, setBook] = useState({})

    /* RECUPERANDO OS DADOS DE LIVRO PARA A EDIÇAO */
    useEffect(()=>{

        fetch(`http://localhost:5000/listagemLivro/${cod_livro}`, {
            method: 'GET',
            mode:'cors',
            headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*',
        },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
            setBook(data.data);
            console.log('blabla' + data.data.cod_livro );
        })
        .catch((err)=>{console.log(err)});

        },[]);

    return(
        <div className={style.grid}>

            <div className={style.container_img}>
                <img className={style.img_book_detail} src={caverna} alt='Capa do livro: As cavernas de aço' />
            </div>

            <div className={style.info}>
                <span className={style.titulo}>{book.nome_livro}</span>
                <span className={style.autor}>{book.autor_livro}</span>

                <span className={style.descricao}>
                    {book.descricao_livro}
                </span>

                <div className={style.container_buttons}>
                    <Button 
                        label='EDITAR'
                        router='/updateBook/'
                        cod_livro={book.cod_livro}
                    />

                    <Button 
                        label='EXCLUIR'
                        router='/deleteBook/'
                        cod_livro={book.cod_livro}
                    />

                </div>
                
            </div>

            
        </div>
    )
}

export default DetailBook