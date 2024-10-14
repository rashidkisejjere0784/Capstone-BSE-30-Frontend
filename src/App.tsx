import { Route, Routes } from 'react-router-dom'
import AuthPage from '@/pages/auth'
import PageNotFound from '@/pages/page-not-found.tsx'
import Base from '@/layouts/base.tsx'

import Home from '@/pages/home.tsx'
import Products from '@/pages/products.tsx'
import Product from '@/pages/product.tsx'
import Wishlist from '@/pages/wishlist.tsx'
import About from './pages/about'
import ContactUs from './pages/contactUs'
import Cart from '@/pages/cart.tsx'
import Checkout from '@/pages/checkout.tsx'
import CheckAuth from './components/auth/CheckAuth'
import { useEffect } from 'react'
import { checkAuth } from '@/store/auth-slice'

import { useDispatch, useSelector } from 'react-redux'
const App = () => {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(checkAuth())
  }, [dispatch])

  if (isLoading) return <p>Page Loading</p>

  console.log(isLoading, user)

  return (
    <Routes>
      <Route path='/' element={<Base />}>
        <Route
          index
          element={
            <Home />
          }
        />
        <Route
          path='auth'
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthPage />
            </CheckAuth>
          }
        />
        <Route
          path='products'
          element={
            <Products />
          }
        />
        <Route
          path='product/:productId'
          element={
            <Product />
          }
        />
        <Route
          path='wishlist'
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Wishlist />
            </CheckAuth>
          }
        />
        <Route
          path='/about'
          element={
            <About />
          }
        />
        <Route
          path='/cart'
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Cart />
            </CheckAuth>
          }
        />
        <Route
          path='/checkout'
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Checkout />
            </CheckAuth>
          }
        />
        <Route
          path='/contact'
          element={
            <ContactUs />
          }
        />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
export default App
