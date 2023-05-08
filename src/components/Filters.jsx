import React, { useContext, useEffect, useState } from 'react'
import { filterContext } from '../context/filters'
import { products } from '../data/data.json'

const Filters = () => {
  const [categories, setCategories] = useState([])
  const { filters, setFilters } = useContext(filterContext)
  useEffect(() => {
    const categoriesData = products.map(product => product.category)
      .reduce((acc, curr) => {
        if (!acc.includes(curr)) acc.push(curr)
        return acc
      }, [])
    setCategories(categoriesData)
  }, [products])

  const handelChange = (e) => {
    setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className='filters'>
      <div className='option'>
        <label htmlFor='range'>Price</label>
        <input type='range' name='price' id='range' value={filters.price} min='0' max='1000' onChange={handelChange} />
        <span>{filters.price} $</span>
      </div>
      <div className='option' />
      <select name='category' id='category' onChange={handelChange}>
        <option key='all' value='all'>all</option>
        {
          categories.map(cat => <option key={cat} value={cat}>{cat}</option>)
        }
      </select>
    </div>
  )
}

export default Filters
