export const initialSate = JSON.parse(window.localStorage.getItem('cart')) || []

export const Actions = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  RESET_CART: 'RESET_CART'
}

const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD_TO_CART:{
      const checkProductIndex = state.findIndex(el => el.id === action.payload.id)
      if (checkProductIndex >= 0) {
        const deepCopyCart = JSON.parse(JSON.stringify(state))
        console.log(checkProductIndex)
        deepCopyCart[checkProductIndex].quantity += 1
        updateLocalStorage(deepCopyCart)
        return [...deepCopyCart]
      } else {
        const newState = [...state, { ...action.payload, quantity: 1 }]
        updateLocalStorage(newState)
        return newState
      }
    }
    case Actions.REMOVE_FROM_CART:{
      const filtredCart = state.find(el => el.id === action.payload)

      if (filtredCart?.quantity > 1) {
        // filtredCart.quantity = filtredCart.quantity - 1
        const newState = state.map(el => el.id === action.payload ? { ...filtredCart, quantity: filtredCart.quantity - 1 } : el)
        updateLocalStorage(newState)
        return newState
      } else {
        const newState = state.filter(el => el.id !== action.payload)
        updateLocalStorage(newState)
        return newState
      }
    }
    case Actions.RESET_CART: {
      updateLocalStorage([])
      return []
    }
    default: return state
  }
}
