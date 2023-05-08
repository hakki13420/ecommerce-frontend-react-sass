import React, { createContext, useReducer } from 'react'
import { initialSate, cartReducer, Actions } from '../reducers/cart'

export const cartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialSate)

  const addToCart = (product) => {
    return dispatch({
      type: Actions.ADD_TO_CART,
      payload: product
    })
  }

  const removeToCart = (id) => {
    return dispatch({
      type: Actions.REMOVE_FROM_CART,
      payload: id
    })
  }

  const resetCart = () => {
    return dispatch({
      type: Actions.RESET_CART
    })
  }

  return (
    <cartContext.Provider value={{ cart: state, addToCart, removeToCart, resetCart }}>
      {children}
    </cartContext.Provider>
  )
}
