// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const ALL_PRODUCTS_API = 'http://127.0.0.1:3000/api/product/all'
const ADD_NEW_PRODUCT_API = 'http://127.0.0.1:3000/api/product/add'
const initialState = {
  isLoading: false,
  productList: []
}

export const fetchAllProducts = createAsyncThunk(
  '/products/fetchAllProducts',

  async () => {
    const products = await axios.get(ALL_PRODUCTS_API)
    console.log(products.data)
    return products.data
  }
)

export const addNewProduct = createAsyncThunk(
  '/products/add-new-product',
  async (formData) => {
    const result = await axios.post(
      ADD_NEW_PRODUCT_API,
      formData
    )

    return result?.data
  }
)

export const editProduct = createAsyncThunk(
  '/products/editProduct',
  async ({ id, formData }) => {
    const result = await axios.put(
      `http://localhost:5000/api/admin/products/edit/${id}`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    return result?.data
  }
)

export const deleteProduct = createAsyncThunk(
  '/products/deleteProduct',
  async (id) => {
    const result = await axios.delete(
      `http://localhost:5000/api/admin/products/delete/${id}`
    )

    return result?.data
  }
)

const AdminProductsSlice = createSlice({
  name: 'adminProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.productList = action.payload
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.isLoading = false
        state.productList = []
      })
  }
})

export default AdminProductsSlice.reducer
