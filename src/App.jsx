import React from 'react'

import Footer from './components/Footer'
import { IS_DEVELOPMENT } from './config'

import Products from './components/Products'
import Header from './components/Header'
import Cart from './components/Cart'
import { CartContextProvider } from './context/cart'

function App () {
  return (
    <CartContextProvider>
      <div className='app'>
        <Header />
        <Cart />
        <Products />
        {IS_DEVELOPMENT && <Footer />}
      </div>
    </CartContextProvider>
  )
}

export default App
