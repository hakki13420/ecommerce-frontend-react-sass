import React, { useContext } from 'react'
import { cartContext } from '../context/cart'
import { filterContext } from '../context/filters'

const Footer = () => {
  const { filters } = useContext(filterContext)
  const { cart } = useContext(cartContext)
  return (
    <div className='footer'>
      {
        JSON.stringify(cart, null, 4)
      }
    </div>
  )
}

export default Footer
