import { useContext } from 'react'
import { filterContext } from '../context/filters'
import { products } from '../data/data.json'

export const useFilter = () => {
  const { filters, setFilters } = useContext(filterContext)

  const filtredProducts = products.filter(product => {
    return (product.price >= filters.price && (product.category === filters.category || filters.category === 'all'))
  })
  return {
    filters, setFilters, filtredProducts
  }
}
