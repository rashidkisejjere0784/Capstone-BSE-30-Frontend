import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getUserCookie } from '@/assets/utils.ts'
const initialState = {
  isLoading: false,
  cartItems: []
}
const SERVER = import.meta.env.VITE_LOCAL_SERVER
const ALL_CART_API = `${SERVER}/cart/all`
const ADD_CART_API = `${SERVER}/cart/add`
const DELETE_CART_API = `${SERVER}/cart/delete`

const token = getUserCookie().token

export const fetchAllCart = createAsyncThunk(
  'cart/fetchAllCart',
  async () => {
    const response = await axios.get(ALL_CART_API, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  }
)
export const addCartItem = createAsyncThunk(
  '/cart/addCartItem',
  async (data) => {
    const response = await axios.post(
      ADD_CART_API, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  }
)

export const deleteCartItem = createAsyncThunk(
  '/cart/deleteCartItem',
  async (id) => {
    const obj = {
      cartId: id
    }
    const response = await axios.post(
      DELETE_CART_API, obj, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  }
)
const cartProductsSlice = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
    setCartDetails: (state) => {
      state.cartItems = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCart.pending, (state) => {
        console.log('Cart is Pending: ')
        state.isLoading = true
      }).addCase(fetchAllCart.rejected, (state) => {
        state.isLoading = false
        console.log('Cart is Rejected: ')
        state.cartItems = []
      }).addCase(fetchAllCart.fulfilled, (state, action) => {
        state.isLoading = false
        console.log('Fulfilled Get CartItems')
        state.cartItems = action.payload
      }).addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.cartItems = action.payload
      })
  }
})

export const { setCartDetails } = cartProductsSlice.actions

export default cartProductsSlice.reducer
