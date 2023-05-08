import React from 'react'
import Filters from './Filters'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__nav'>
        <h2>Hakki <span>Shop</span></h2>
        <nav>
          <a href='#'>Home</a>
          <a href='#'>Categories</a>
          <a href='#'>Products</a>
          <a href='#'>Contact</a>
        </nav>
      </div>
      <Filters />
    </div>
  )
}

export default Header
