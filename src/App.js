import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header'
import Vendors from './components/Vendors'
import Filter from './components/Filter'
import './App.css';

const App = () =>  {
  const [isLoading, setIsLoading] = useState([true])
  const [vendors, setVendors] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const getVendors = async () => {
      setIsLoading(true)
      const res = await axios(`https://api.openbrewerydb.org/breweries?by_name=${filter}`)
      setVendors(res.data)
      setIsLoading(false)
    }
    getVendors()
  }, [filter])

  return(
    <div className='container'>
      <Header />
      <Filter getFilter={(q) => setFilter(q)} />
      <Vendors isLoading = {isLoading} vendors = {vendors} />
    </div>
  )
}

export default App
