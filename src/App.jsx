import { Header } from './components/header'
import { Search } from './components/search'
import { CountriesList } from './countries/CountriesList'
import { getCountriesByName } from './actions/getCountriesByName'
import { useState } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);

  const handleSearch = async (search) => {
    if (!search.trim()) return;
    try {
      const result = await getCountriesByName(search);
      setCountries(result);
    } catch {
      setCountries([]);
    }
  };

  return (
    <>
      <Header title="Buscador de Países" description="Encuentra información sobre países." />
      <Search placeholder="Buscar país..." onSearch={handleSearch} />
      <CountriesList countries={countries} />
    </>
  )
}

export default App
