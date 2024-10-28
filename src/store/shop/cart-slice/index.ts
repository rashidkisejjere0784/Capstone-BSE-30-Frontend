import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getUserCookie } from '@/assets/utils.ts'

const initialState = {
  isLoading: false,
  cartList: []
}
const SERVER = import.meta.env.VITE_LOCAL_SERVER

const ALL_CART_API = `${SERVER}/cart/all`
const ADD_CART_API = `${SERVER}/cart/add`
const DELETE_CART_API = `${SERVER}/cart/delete`

const token = getUserCookie().token
export const getCartItems = createAsyncThunk(
  '/cart/getCartItems',
  async () => {
    const response = await axios.get(
      ALL_CART_API, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  }
)

export const addCartItem = createAsyncThunk(
  '/cart/addCartItem',
  async (data) => {
    console.log('Cart Data: ', data)
    const response = await axios.post(
      ADD_CART_API, data, {
        withCredentials: true,
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
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  }
)

const userCartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true
      }).addCase(getCartItems.rejected, (state) => {
        state.isLoading = false
        state.cartList = []
      }).addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.cartList = action.payload
      }).addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.cartList = action.payload
      })
  }
})

export default userCartSlice.reducer
