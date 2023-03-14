export const cardInitialState = []
export const CARD_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}
export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CARD_ACTION_TYPES.ADD_TO_CART:{
      const productInCart = state.findIndex(item => item.id === actionPayload.id)
      if (productInCart >= 0) {
        const newState = structuredClone(state)
        newState[productInCart].quantity += 1
        return newState
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }
    case CARD_ACTION_TYPES.REMOVE_FROM_CART:{
      return state.filter(item => item.id !== actionPayload.id)
    }
    case CARD_ACTION_TYPES.CLEAR_CART:{
      return cardInitialState
    }
  }
  return state
}
