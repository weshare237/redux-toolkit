import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      const itemID = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID)
    },
    increaseAmount: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload.id)
      item.amount += 1
      // state.cartItems = state.cartItems.map((item) => {
      //   return item.id === itemID ? { ...item, amount: item.amount + 1 } : item
      // })
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload.id)

      item.amount -= 1
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0

      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })

      state.amount = amount
      state.total = total
    },
  },
})

export const {
  clearCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  calculateTotals,
} = cartSlice.actions

export default cartSlice.reducer
