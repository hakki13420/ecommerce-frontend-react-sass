import React, { useContext } from 'react'

import { cartContext } from '../context/cart'

const CartItem = (props) => {
  const { addToCart, removeToCart } = useContext(cartContext)
  return (
    <div className='cart__item'>
      <div className='cart__item__id'>{props.index + 1}</div>
      <div className='cart__item__image'>
        <img src={props.thumbnail} alt='image-product-cart' />
        <div className='meta'>
          <span>{props.id}</span>
          <span>{props.title}</span>
        </div>
      </div>
      <div className='option'>
        <div className='option__left'>
          <button onClick={() => addToCart({ ...props })}>+</button>
          <button onClick={() => removeToCart(props.id)}>-</button>
        </div>
        <div className='option__right'>

          <span>Qte :{props.quantity}</span>
          <span>{props.price}</span>
        </div>
      </div>

      <div className='subtotal'>
        <span>{props.quantity * props.price}</span>
      </div>
    </div>
  )
}

const Cart = () => {
  const { cart } = useContext(cartContext)
  return (
    <>
      <label htmlFor='cart-menu' className='cart-btn'>
        <i className='ri-shopping-cart-fill' />
      </label>
      <input type='checkbox' id='cart-menu' hidden />
      <span className='badge'>{cart.length}</span>
      <div className='cart'>

        {
          cart.length
            ? cart.map((item, index) => {
              return <CartItem index={index} {...item} />
            })
            : 'no items'
        }

      </div>
    </>
  )
}

export default Cart
