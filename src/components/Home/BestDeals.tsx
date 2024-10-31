// @ts-nocheck

import ProductCard from '@/components/ProductCard.tsx'
import { FaArrowRight} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addWishListItem } from '@/store/shop/wishlist-slice'
import { toast } from '@/hooks/use-toast.ts'
import { getRandomProducts } from '@/assets/utils.ts'
import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
const BestDeals = () => {
  const { productList } = useSelector((state) => state.shopProducts)
  const dispatch = useDispatch()

  const handleAddToWishList = (productId)=>{
    dispatch(addWishListItem(productId)).then((data)=>{
      if(data?.payload?.success){
        toast({
          title: "Product Added to Wishlist Successfully",
          description: data?.payload?.message,
          variant: 'success'
        })
      }else{
        toast({
          title: "Failed to add Product to Wishlist",
          description: data?.payload?.message,
          variant: 'destructive'
        })
      }

    })
  }

  const renderCountDown = ({days, hours, minutes, seconds }) => {
    return (
      <span>
      {days}d : {hours}hr : {minutes}m : {seconds}s
    </span>
    );
  };


  return (
    <>
      <section className="section my-8">
        <div>
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex md:gap-4 gap-2 flex-wrap items-center">
              <h2 className="text-gray-900 font-extrabold text-2xl">
                Best Deals
              </h2>
              <p className="text-sm text-black ml-4">Deals end in</p>
              <div className="px-4 py-2 bg-warning-300 text-gray-900 text-base rounded-sm">
                <Countdown
                  date={Date.now() + 10000000}
                  renderer={renderCountDown}
                />
              </div>
            </div>
            <div>
              <a
                href="/products"
                className="flex gap-4 text-secondary-500 items-center"
              >
                <span>Browse All Product</span>
                <FaArrowRight />
              </a>
            </div>
          </div>
          {/*        content */}
          <div className="my-6 h-fit text-wrap">
              {/* /!*            Product 1*!/ */}
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {getRandomProducts(productList, 8).map(
                  (product: {
                    _id: string
                    product_image: string
                    name: string
                    price: string
                  }) => (
                    <ProductCard
                      key={product?._id}
                      id={product?._id}
                      handleAddToWishList={handleAddToWishList}
                      src={`${product?.product_image}`}
                      name={product?.name}
                      amount={product?.price}
                      className={'max-h-[20rem] overflow-hidden'}
                      discount={product?.discount}
                    />
                  )
                )}
              </div>
            </div>
        </div>
      </section>
    </>
  )
}
export default BestDeals
