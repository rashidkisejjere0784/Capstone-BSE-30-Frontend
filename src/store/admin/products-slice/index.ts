// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getUserCookie } from '@/assets/utils.ts'
const SERVER = import.meta.env.VITE_SERVER
const DELETE_PRODUCT_API = `${SERVER}/api/product/delete`
const initialState = {
  isLoading: false,
  productList: []
}
const token = getUserCookie().token

export const editProduct = createAsyncThunk(
  '/products/editProduct',
  async ({ id, formData }) => {
    const result = await axios.put(
      `${SERVER}/api/admin/products/edit/${id}`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }
    )

    return result?.data
  }
)

export const deleteProduct = createAsyncThunk(
  '/products/deleteProduct',
  async (id) => {
    const result = await axios.post(
      DELETE_PRODUCT_API,
      {
        productId: id
      },
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
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
      .addCase(deleteProduct.fulfilled, (state) => {
        state.isLoading = false
      })
  }
})

export default AdminProductsSlice.reducer
