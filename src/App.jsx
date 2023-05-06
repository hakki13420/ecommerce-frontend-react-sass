import React, { useState } from 'react'
import Filters from './components/Filters'
import { products } from './data/data.json'

import Products from './components/Products'
import { useFilter } from './hooks/useFilter'

function App () {
  const { filters, setFilters, filtredProducts } = useFilter()
  return (
    <div className='app'>
      <Filters filters={filters} setFilters={setFilters} />
      <Products />
    </div>
  )
}

export default App
