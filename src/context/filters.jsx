import React, { createContext, useState } from 'react'

export const filterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    price: 0,
    category: 'all'
  })
  return (
    <filterContext.Provider value={{ filters, setFilters }}>
      {children}
    </filterContext.Provider>
  )
}
