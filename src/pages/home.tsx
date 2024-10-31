// @ts-nocheck

import BestDeals from '@/components/Home/BestDeals.tsx'
import Advertising from '@/components/Home/Advertising.tsx'
import ComputerAccessories from '@/components/Home/ComputerAccessories.tsx'
import Button from '@/components/Button.tsx'
import ShopNowButton from '@/components/ShopNowButton.tsx'
import { useSelector } from 'react-redux'
import { getRandomProducts } from '@/assets/utils.ts'
const Home = () => {
  const { productList } = useSelector((state) => state.shopProducts)
  const product = getRandomProducts(productList, 1)[0]
  return (
    <>
      <BestDeals />
      <Advertising />
      <ComputerAccessories />
      <section className='section-badge py-8'>
        <div className='grid grid-cols-11 bg-primary-100 py-4 px-[clamp(1rem,0.4208rem+3.0888vw,4rem)]'>
          <div className='col-span-7 max-w-[26.5rem] mt-12'>
            <Button title={`SAVE UP TO ${product?.discount} ugx`} className='bg-secondary-500 text-gray-00 my-4' />
            <h2 className='text-[3rem] text-gray-900 font-extrabold mb-4'>{product?.name}</h2>
            <h4 className='text-2xl my-6'>
              {product?.description}
            </h4>
            <ShopNowButton link={`/product/${product?._id}`} />
          </div>
          <div className='relative col-span-4'>
            <img src={product?.product_image} alt='Macbook Pro' className='h-full w-auto' />
            <div
              className='absolute top-4 left-4 border-4 border-gray-00 w-24 h-24 text-sm text-gray-900 font-bold flex items-center justify-center rounded-full bg-primary-200 z-10'
            >
              {product?.price} ugx
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
