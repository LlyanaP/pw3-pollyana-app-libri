/* Importa o Arquivo do CSS*/
import './App.css'

/* Importa o Componente Card de Livro */
// import CardBooks from './components/CardBooks'

/*Importa o Aquivo de Imagem da Capa do Livro */
import capaLivro from './assets/livros/cavernas_aco.jpg'

/* Importa o Componente Menu */
import NavBar from './components/layout/NavBar'

function App() {


  return (
    <>
      <NavBar/>
      {/* <CardBooks
        titulo='As Cavernas de Aço'
        autor='Isaac Azimov'
        imagem={capaLivro}/> */}

      {/* <CardBooks
        titulo='O Sol Desvelado'
        autor='Isaac Azimov'/>

      <CardBooks
        titulo='O Senhor dos Áneis: A Sociedade do Anel'
        autor='J. R. R. Tolkien'/> */}
    </>
  )
}

export default App
