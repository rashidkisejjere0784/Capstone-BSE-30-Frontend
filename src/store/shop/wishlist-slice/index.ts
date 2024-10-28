import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: false,
  wishList: []
}
const SERVER = import.meta.env.VITE_LOCAL_SERVER

const ALL_WISHLIST_API = `${SERVER}wishlist/all`
const ADD_WISHLIST_API = `${SERVER}wishlist/add`
const DELETE_WISHLIST_API = `${SERVER}wishlist/delete`
const EDIT_WISHLIST_API = `${SERVER}wishlist/edit`

// eslint-disable-next-line no-undef
const token = localStorage.getItem('token')
export const getWishListItems = createAsyncThunk(
  '/wishlist/getWishListItems',
  async () => {
    const response = await axios.get(
      ALL_WISHLIST_API, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  }
)

export const addWishListItem = createAsyncThunk(
  '/wishlist/addWishListItem',
  async (data) => {
    const response = await axios.post(
      ADD_WISHLIST_API, {
        productId: data
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  }
)

export const editWishListItem = createAsyncThunk(
  '/wishlist/editWishListItem',
  async (data) => {
    const response = await axios.post(
      EDIT_WISHLIST_API, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  }
)

export const deleteWishListItem = createAsyncThunk(
  '/wishlist/deleteWishListItem',
  async (id) => {
    const obj = {
      wishListId: id
    }
    const response = await axios.post(
      DELETE_WISHLIST_API, obj, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  }
)

const userWishListSlice = createSlice({
  name: 'wishListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWishListItems.pending, (state) => {
        state.isLoading = true
      }).addCase(getWishListItems.rejected, (state) => {
        state.isLoading = false
        state.wishList = []
      }).addCase(getWishListItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.wishList = action.payload
      }).addCase(deleteWishListItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.wishList = action.payload
      })
  }
})

export default userWishListSlice.reducer
