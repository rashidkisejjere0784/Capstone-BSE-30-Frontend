// @ts-nocheck

import { useEffect, useState } from 'react'
import Button from '@/components/Button.tsx'
import DropDown from '@/components/DropDown.tsx'
import CartItems from '@/components/cart/CartItems.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '@/store/admin/products-slice'
import { addCartItem } from '@/store/shop/cart-slice'

const Details = ({ product }) => {
  console.log('Detail Product: ', product)


  return (
    <>

    </>
  )
}
export default Details
