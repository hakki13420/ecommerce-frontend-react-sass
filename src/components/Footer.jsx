import React from 'react'
// import { cartContext } from '../context/cart'
// import { filterContext } from '../context/filters'

const Footer = () => {
  // const { filters } = useContext(filterContext)
  // const { cart } = useContext(cartContext)
  return (
    <div className='footer'>
      {/* {
        JSON.stringify(cart, null, 4)
      } */}

      <p>All right arr reserved &copy;<span>{new Date().getFullYear()}</span></p>
    </div>
  )
}

export default Footer
