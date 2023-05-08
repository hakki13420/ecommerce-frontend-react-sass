import React, { createContext, useState } from 'react'

export const cartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const checkProductIndex = cart.findIndex(el => el.id === product.id)
    if (checkProductIndex >= 0) {
      const deepCopyCart = JSON.parse(JSON.stringify(cart))
      console.log(checkProductIndex)
      deepCopyCart[checkProductIndex].quantity += 1
      setCart(deepCopyCart)
    } else {
      setCart(prev => [...prev, { ...product, quantity: 1 }])
    }
  }

  const removeToCart = (id) => {
    const filtredCart = cart.find(item => item.id === id)
    if (filtredCart.quantity > 1) {
      filtredCart.quantity -= 1
      setCart(cart.map(item => item.id === id ? filtredCart : item))
    } else setCart(cart.filter(item => item.id !== id))
  }

  const resetCart = () => {
    setCart([])
  }

  return (
    <cartContext.Provider value={{ cart, setCart, addToCart, removeToCart, resetCart }}>
      {children}
    </cartContext.Provider>
  )
}
