// @ts-nocheck

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const SERVER = import.meta.env.VITE_SERVER
const REGISTER_USER_API = `${SERVER}/api/auth/signup`
const LOG_IN_API = `${SERVER}/api/auth/signin`
// const CHECK_AUTH_API = `${SERVER}/api/auth/check-auth`
const LOG_OUT_API = `${SERVER}/api/auth/logout`

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null
}
export const registerUser = createAsyncThunk(
  '/auth/register',
  async (formData) => {
    const response = await axios.post(
      REGISTER_USER_API,
      formData,
      {
        withCredentials: true
      }
    )
    return response.data
  }
)
export const loginUser = createAsyncThunk(
  '/auth/login',
  async (formData) => {
    console.log('Form Data: ', formData)
    const response = await axios.post(
      LOG_IN_API,
      formData
    )
    window.localStorage.setItem('token', response.data.token)
    return response.data
  }
)
export const logoutUser = createAsyncThunk(
  '/auth/logout',

  async () => {
    const response = await axios.post(
      LOG_OUT_API,
      {},
      {
        withCredentials: true
      }
    )
    return response.data
  }
)
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        window.localStorage.setItem('token', action.payload.token)
        state.isLoading = false
        state.user = action.payload.success ? action.payload.user : null
        state.isAuthenticated = action.payload.success
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false
      })
      .addCase(logoutUser.fulfilled, (state) => {
        window.localStorage.removeItem('token')
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false
      })
  }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer
