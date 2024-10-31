import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getUserCookie } from '@/assets/utils.ts'

const initialState = {
  isLoading: false,
  categoryList: [],
  brandList: []
}
const SERVER = import.meta.env.VITE_LOCAL_SERVER

const ALL_CATEGORY_API = `${SERVER}/api/category/all`
const DELETE_CATEGORY_API = `${SERVER}/api/category/delete`
const ADD_CATEGORY_API = `${SERVER}/api/category/add`
const EDIT_CATEGORY_API = `${SERVER}/api/category/edit`
// bRAND APIS
const ALL_BRAND_API = `${SERVER}/api/brand/all`
const DELETE_BRAND_API = `${SERVER}/api/brand/delete`
const ADD_BRAND_API = `${SERVER}/api/brand/add`
const EDIT_BRAND_API = `${SERVER}/api/brand/edit`
const token = getUserCookie().token
export const getCategoryItems = createAsyncThunk(
  '/order/getCategoryItems',
  async () => {
    const response = await axios.get(ALL_CATEGORY_API)
    return response.data
  }
)

export const addCategoryItem = createAsyncThunk(
  '/order/deleteCategoryItem',
  async (data) => {
    const response = await axios.post(
      ADD_CATEGORY_API, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  }
)

export const editCategoryItem = createAsyncThunk(
  '/order/deleteCategoryItem',
  async (data) => {
    const response = await axios.post(
      EDIT_CATEGORY_API, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  }
)

export const deleteCategoryItem = createAsyncThunk(
  '/order/deleteCategoryItem',
  async (categoryID) => {
    const obj = {
      CategoryId: categoryID
    }
    const response = await axios.post(
      DELETE_CATEGORY_API, obj, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  }
)

export const getBrandItems = createAsyncThunk(
  '/order/getBrandItems',
  async () => {
    const response = await axios.get(
      ALL_BRAND_API
    )
    return response.data
  }
)

export const addBrandItem = createAsyncThunk(
  '/order/deleteBrandItem',
  async (data) => {
    const response = await axios.post(
      ADD_BRAND_API, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  }
)

export const editBrandItem = createAsyncThunk(
  '/order/deleteBrandItem',
  async (data) => {
    const response = await axios.post(
      EDIT_BRAND_API, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  }
)

export const deleteBrandItem = createAsyncThunk(
  '/order/deleteBrandItem',
  async (categoryID) => {
    const obj = {
      CategoryId: categoryID
    }
    const response = await axios.post(
      DELETE_BRAND_API, obj, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  }
)

const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryItems.pending, (state) => {
        state.isLoading = true
      }).addCase(getCategoryItems.rejected, (state) => {
        state.isLoading = false
        state.categoryList = []
      }).addCase(getCategoryItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.categoryList = action.payload
      }).addCase(deleteCategoryItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.categoryList = action.payload
      }).addCase(getBrandItems.pending, (state) => {
        state.isLoading = true
      }).addCase(getBrandItems.rejected, (state) => {
        state.isLoading = false
        state.brandList = []
      }).addCase(getBrandItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.brandList = action.payload
      }).addCase(deleteBrandItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.brandList = action.payload
      })
  }
})

export default commonSlice.reducer
