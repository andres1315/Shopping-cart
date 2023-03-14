import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from './Icons'
import './Cart.css'
import { useId } from 'react'
import { useCart } from '../hooks/useCart'

export function Cart () {
  const cartChechBoxId = useId()
  const { cart, removeFromCart, clearCart, addCart } = useCart()

  return (
    <>
      <label htmlFor={cartChechBoxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartChechBoxId} hidden />
      <aside className='cart'>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <strong>{item.title}</strong> - ${item.price}
              </div>
              <footer>
                <small>
                  Qty: {item.quantity}
                </small>
                <button onClick={() => addCart(item)}>+</button>
                <button style={{ backgroundColor: 'red' }} onClick={() => removeFromCart(item)}>
                  <RemoveFromCartIcon />
                </button>
              </footer>
            </li>
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
