// @ts-nocheck

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
import Admin from '@/layouts/Admin.tsx'
import AdminProducts from '@/pages/admin-pages/products.tsx'
import AdminCategories from '@/pages/admin-pages/categories.tsx'
import AdminBrands from '@/pages/admin-pages/brands.tsx'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAuthenticated, setUser } from '@/store/auth-slice'
import { getWishListItems } from '@/store/shop/wishlist-slice'
import { fetchAllProducts } from '@/store/shop/products-slice'
import { getCategoryItems } from '@/store/common-slice'
import { fetchAllCart } from '@/store/shop/cartSlice'
const App = () => {
  const { user, isAuthenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setUser())
    dispatch(setIsAuthenticated())
    dispatch(fetchAllProducts())
    dispatch(getWishListItems())
    dispatch(getCategoryItems())
    dispatch(fetchAllCart())
  }, [])
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

      <Route path='/admin' element={<Admin />}>
        <Route index element={<AdminProducts />} />
        <Route path='products' element={<AdminProducts />} />
        <Route path='categories' element={<AdminCategories />} />
        <Route path='brands' element={<AdminBrands />} />
      </Route>

      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
export default App
