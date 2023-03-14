import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'
export const CartContext = createContext()

export function CartProvider ({ children }) {
  const { state, clearCart, addCart, removeFromCart } = useCartReducer()
  return (
    <CartContext.Provider value={{ cart: state, clearCart, addCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
