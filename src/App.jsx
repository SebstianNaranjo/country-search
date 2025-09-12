import { Header } from './components/header'
import { Search } from './components/search'
import { CountriesList } from './countries/CountriesList'
import { getCountriesByName } from './actions/getCountriesByName'
import { useState } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header title="Buscador de Países" description="Encuentra información sobre países." />
      <Search placeholder="Buscar país..." onSearch={(search) => console.log(search)} />
    </>
  )
}

export default App
