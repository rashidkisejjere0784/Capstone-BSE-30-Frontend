import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: false,
  productList: [],
  productDetails: null
}

const ALL_PRODUCTS_API = 'http://127.0.0.1:3000/api/product/all'

export const fetchAllProducts = createAsyncThunk(
  '/products/all',
  async () => {
    const products = await axios.get(ALL_PRODUCTS_API)
    console.log(products.data)
    return products.data
  }
)

export const fetchAllFilteredProducts = createAsyncThunk(
  '/products/fetchAllProducts',
  async ({ filterParams, sortParams }) => {
    console.log(fetchAllFilteredProducts, 'fetchAllFilteredProducts')

    const query = new URLSearchParams({
      ...filterParams,
      sortBy: sortParams
    })

    const result = await axios.get(
      `http://localhost:5000/api/shop/products/get?${query}`
    )

    console.log(result)

    return result?.data
  }
)

export const fetchProductDetails = createAsyncThunk(
  '/products/fetchProductDetails',
  async (id) => {
    const result = await axios.get(
      `http://localhost:5000/api/shop/products/get/${id}`
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
      .addCase(fetchAllFilteredProducts.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.productList = action.payload.data
      })
      .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
        state.isLoading = false
        state.productList = []
      })
      .addCase(fetchProductDetails.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.isLoading = false
        state.productDetails = action.payload.data
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.isLoading = false
        state.productDetails = null
      })
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.productList = action.payload
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false
        state.productDetails = null
      })
  }
})

export const { setProductDetails } = shoppingProductSlice.actions

export default shoppingProductSlice.reducer
