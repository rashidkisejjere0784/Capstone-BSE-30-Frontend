import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth-slice'
import adminProductsSlice from './admin/products-slice'
import shopProductsSlice from './shop/products-slice'
import userWishListSlice from './shop/wishlist-slice'
import cartProductsSlice from './shop/cartSlice'
import commonFeatureSlice from './common-slice'

const store = configureStore({
  reducer: {
    auth: authReducer,

    adminProducts: adminProductsSlice,
    // adminOrder: adminOrderSlice,
    //
    shopWishList: userWishListSlice,
    shopCart: cartProductsSlice,
    shopProducts: shopProductsSlice,
    // shopCart: shopCartSlice,
    // shopAddress: shopAddressSlice,
    // shopOrder: shopOrderSlice,
    // shopSearch: shopSearchSlice,
    // shopReview: shopReviewSlice,
    //
    commonFeature: commonFeatureSlice
  }
})

export default store
