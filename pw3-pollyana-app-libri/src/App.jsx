/*Importa os componentes de navegação das paginas*/
import { BrowserRouter, Route, Routes } from 'react-router-dom'



/* Importa o Arquivo do CSS*/
import './App.css'


/* Importa o Componente Menu */
import NavBar from './components/layout/NavBar'

/* Importa o componente de Container*/
import Container from './components/layout/Container'

import Home from './components/pages/Home'

import ListBooks from './components/pages/ListBooks'

import CreateBooks from './components/pages/CreateBooks'

import DetailBook from './components/pages/DetailBook'

import DeleteBook from './components/pages/DeleteBook'

import UpdateBooks from './components/pages/UpdateBooks'


function App() {


  return (
    <>
      {/*Estrutura de navegação*/}
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/' element={<NavBar/>}>
            <Route path='/' element = {<Home/>}/>
            <Route path='/listBooks' element = {<ListBooks/>}/>
            <Route path='/createBooks' element = {<CreateBooks/>}/>  
            <Route path='/Detailbook/:cod_livro' element ={<DetailBook/>}/>
            <Route path='/deleteBook/:cod_livro' element={<DeleteBook/>} />
            <Route path='/updateBook/:cod_livro' element={<UpdateBooks/>} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
