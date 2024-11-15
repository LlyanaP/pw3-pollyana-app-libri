import React from "react";
import { useState, useEffect } from "react";
import style from "./CreateBooks.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";


const CreateBooks = () =>{


    /*Define os state de dados da categoria*/
    const[categorias, setcategorias] = useState([])  

    /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DE LIVRO */
    const [book, setBook] = useState({})

    /* CAPTURA OS DADOS DA SELECT */
    function handleChangeCategory(event) {
            setBook({...book, cod_categoria: event.target.value});
            console.log(book);
        }

    /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
    function handlerChangeBook(event) {
    setBook({...book, [event.target.name] : event.target.value});
    console.log(book)
}

    /* recupera os dados de categoria api rest*/
    useEffect(() =>{
        fetch('http://localhost:5000/listagemCateorias', {
            method:'GET',
            headers:{
                'Content-Type':'application/jason',
                'Acess-Control-Allow-Origin':'*',
                "Acess-Control-Allow-Headers":'*',
            }
        }).then(
            (resp) =>
                // console.log('RESPOSTA' + resp)
                resp.json()
        ).then(
            (data)=> {
                console.log('DATA' + data.data.nome_categoria)
                setcategorias(data.data)
            } 
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    },[]);

    /* INSERÇÃO DOS DADOS DE LIVRO */
    function createBook(book) {
        
        // console.log(JSON.stringify(book))

        fetch('http://localhost:5000/inserirLivro', {
                method:'POST',
                mode:'cors',
                headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*'
                },
                body: JSON.stringify(book)
        })
        .then(
                (resp)=>resp.json()
        )
        .then(
                (data)=>{
                console.log(data);
                // navigate('/livros',{state:'LIVRO CADASTRADO COM SUCESSO!'});
                }
        )
        .catch(
                (err)=>{ console.log(err) }
        )
}
        /* FUNÇÃO DE SUBMIT */
        function submit(event) {
        event.preventDefault();
        createBook(book);
    }



    return(
        <section className={style.create_books_container}>
            <h1>Cadastro de livros</h1>

        <form onSubmit={submit}>

            <Input
                type="text"
                name="nome_livro"
                placeHolder="Digite o nome do seu livro aqui"
                text="Título do livro"
                handlerChangeBooks={handlerChangeBook}
            />

            <Input
                type="text"
                name="autor_livro"
                placeHolder="Digite o nome do autor"
                text="Nome do autor"
                handlerChangeBooks={handlerChangeBook}
            />

            <Input
                type="text"
                name="descricao_livro"
                placeHolder="Digite a descrição do livro"
                text="Descrição do livro"
                handlerChangeBooks={handlerChangeBook}
            />
            <Select
                name='Categoria'
                text='Escolha uma categoria de livro'
                options={categorias}
                handleChangeCategory={handleChangeCategory}
            />
            <Button
                rotulo='Cadastrar Livro'
            />
            </form> 
        </section>
    )
}

export default CreateBooks