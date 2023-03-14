import { useReducer } from 'react'
import { cardInitialState, reducer, CARD_ACTION_TYPES } from '../reducers/cart'

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(reducer, cardInitialState)

  const addCart = (product) => dispatch({
    type: CARD_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: CARD_ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  })

  const clearCart = () => dispatch({ type: CARD_ACTION_TYPES.CLEAR_CART })

  return {
    state,
    addCart,
    removeFromCart,
    clearCart
  }
}
