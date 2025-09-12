import { Header } from './components/header'
import { Search } from './components/search'
// import { CountriesList } from './components/countriesList'
// import { getCountriesByName } from './services/countries'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title="Buscador de Países" description="Encuentra información sobre países." />
      <Search placeholder="Buscar país..." onSearch={(search) => console.log(search)} />
    </>
  )
}

export default App
