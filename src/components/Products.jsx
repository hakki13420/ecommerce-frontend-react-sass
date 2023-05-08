import React, { useContext } from 'react'
import { cartContext } from '../context/cart'
import { useFilter } from '../hooks/useFilter'

const Products = () => {
  const { filtredProducts } = useFilter()
  const { addToCart } = useContext(cartContext)
  return (
    <div className='products'>
      {
        filtredProducts.map(product => {
          return (
            <div key={product.id} className='product'>
              <img src={product.thumbnail} alt='' />
              <div className='info'>
                <div className='title'>

                  <h1>{product.title}</h1>
                  <span>{product.price}$</span>
                </div>
                <div className='cart-'>
                  <i className='ri-shopping-cart-fill' onClick={() => addToCart(product)} />
                </div>
              </div>
            </div>
          )
        })
        }
    </div>
  )
}

export default Products
