// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const SERVER = import.meta.env.VITE_SERVER;

const ALL_PRODUCTS_API = 'http://127.0.0.1:3000/api/product/all'
// const ADD_NEW_PRODUCT_API = 'http://127.0.0.1:3000/api/product/add'
const DELETE_PRODUCT_API = 'http://127.0.0.1:3000/api/product/delete'
const initialState = {
  isLoading: false,
  productList: []
}


const token = localStorage.getItem('token')

export const fetchAllProducts = createAsyncThunk(
  '/products/fetchAllProducts',

  async () => {
    const products = await axios.get(ALL_PRODUCTS_API)
    console.log(products.data)
    return products.data
  }
)

// export const addNewProduct = createAsyncThunk(
//   '/products/add-new-product',
//   async (formData) => {
//
//     const result = await axios.post(
//       ADD_NEW_PRODUCT_API,
//       formData, {
//         withCredentials: true,
//         headers: {
//           Authorization: `Bearer ${token}`, // Replace with your actual JWT token
//           'Content-Type': 'multipart/form-data'
//         }
//       }
//     )
//
//     return result?.data
//   }
// )

export const editProduct = createAsyncThunk(
  '/products/editProduct',
  async ({ id, formData }) => {
    const result = await axios.put(
      `${SERVER}/api/admin/products/edit/${id}`,
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
      }).addCase(deleteProduct.fulfilled, (state) => {
        state.isLoading = false
      })
  }
})

export default AdminProductsSlice.reducer
