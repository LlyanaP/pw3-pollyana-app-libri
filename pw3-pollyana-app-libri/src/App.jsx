import './App.css'
import CardBooks from './components/CardBooks'


function App() {


  return (
    <>
      <CardBooks
        titulo='As Cavernas de Aço'
        autor='Isaac Azimov'/>

      <CardBooks
        titulo='O Sol Desvelado'
        autor='Isaac Azimov'/>

      <CardBooks
        titulo='O Senhor dos Áneis: A Sociedade do Anel'
        autor='J. R. R. Tolkien'/>
    </>
  )
}

export default App
