import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  isLoading: false,
  productList: [],
  productDetails: null
}
const SERVER = import.meta.env.VITE_SERVER
const ALL_PRODUCTS_API = `${SERVER}/api/product/all`

export const fetchAllProducts = createAsyncThunk(
  '/products/all',
  async () => {
    const products = await axios.get(ALL_PRODUCTS_API)
    return products.data
  }
)

export const fetchProductDetails = createAsyncThunk(
  '/products/fetchProductDetails',
  async (id) => {
    const result = await axios.get(
      `${SERVER}/api/shop/products/get/${id}`
    )
    return result?.data
  }
)

const shoppingProductSlice = createSlice({
  name: 'shoppingProducts',
  initialState,
  reducers: {
    setProductDetails: (state) => {
      state.productDetails = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.isLoading = false
        state.productDetails = action.payload.data
      })
      .addCase(fetchProductDetails.rejected, (state) => {
        state.isLoading = false
        state.productDetails = null
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.productList = action.payload
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.isLoading = false
        state.productDetails = null
      })
  }
})

export const { setProductDetails } = shoppingProductSlice.actions

export default shoppingProductSlice.reducer
