import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: false,
  featureImageList: [],
  categoryList: []
}
const SERVER = import.meta.env.VITE_LOCAL_SERVER

const ALL_CATEGORY_API = `${SERVER}category/all`
const DELETE_CATEGORY_API = `${SERVER}category/delete`
const ADD_CATEGORY_API = `${SERVER}category/add`
const EDIT_CATEGORY_API = `${SERVER}category/edit`
export const getFeatureImages = createAsyncThunk(
  '/order/getFeatureImages',
  async () => {
    const response = await axios.get(
      'http://localhost:5000/api/common/feature/get'
    )

    return response.data
  }
)

export const getCategoryItems = createAsyncThunk(
  '/order/getCategoryItems',
  async () => {
    const response = await axios.get(
      ALL_CATEGORY_API
    )
    return response.data
  }
)

export const addCategoryItem = createAsyncThunk(
  '/order/deleteCategoryItem',
  async (data) => {
    const response = await axios.post(
      ADD_CATEGORY_API, data, {
        withCredentials: true
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
        withCredentials: true
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
        withCredentials: true
      }
    )
    return response.data
  }
)

export const addFeatureImage = createAsyncThunk(
  '/order/addFeatureImage',
  async (image) => {
    const response = await axios.post(
      'http://localhost:5000/api/common/feature/add',
      { image }
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
      .addCase(getFeatureImages.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFeatureImages.fulfilled, (state, action) => {
        state.isLoading = false
        state.featureImageList = action.payload.data
      })
      .addCase(getFeatureImages.rejected, (state) => {
        state.isLoading = false
        state.featureImageList = []
      }).addCase(getCategoryItems.pending, (state) => {
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
      })
  }
})

export default commonSlice.reducer
