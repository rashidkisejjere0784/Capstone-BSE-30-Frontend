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
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route
          index
          element={
            <CheckAuth>
              <Home />
            </CheckAuth>
          }
        />
        <Route
          path={'auth'}
          element={
            <CheckAuth>
              <AuthPage />
            </CheckAuth>
          }
        />
        <Route
          path={'products'}
          element={
            <CheckAuth>
              <Products />
            </CheckAuth>
          }
        />
        <Route
          path={'product/:productId'}
          element={
            <CheckAuth>
              <Product />
            </CheckAuth>
          }
        />
        <Route
          path={'wishlist'}
          element={
            <CheckAuth>
              <Wishlist />
            </CheckAuth>
          }
        />
        <Route
          path={'/about'}
          element={
            <CheckAuth>
              {' '}
              <About />
            </CheckAuth>
          }
        />
        <Route
          path={'/cart'}
          element={
            <CheckAuth>
              <Cart />
            </CheckAuth>
          }
        />
        <Route
          path={'/checkout'}
          element={
            <CheckAuth>
              <Checkout />
            </CheckAuth>
          }
        />
        <Route
          path={'/contact'}
          element={
            <CheckAuth>
              <ContactUs />
            </CheckAuth>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}
export default App
