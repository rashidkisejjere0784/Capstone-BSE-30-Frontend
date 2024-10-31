// @ts-nocheck

import {Link} from "react-router-dom";
import { useState } from 'react'
import watch from '/images/smart-watches.png'
import SearchInput from '@/components/SearchInput.tsx'
import ProductCard from '@/components/ProductCard.tsx'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { addWishListItem, getWishListItems } from '@/store/shop/wishlist-slice'
import { toast } from '@/hooks/use-toast.ts'

const Categories = [
  'Electronic Devices',
  'Computer & Laptop',
  'Computer Accessories',
  'Smart Phone',
  'HeadPhone',
  'Mobile Accessories',
  'Gaming Console',
  'Camera & Photo',
  'TV & Homes Appliances',
  'Watches & Accessories',
  'GPS & Navigation',
  'Wearable Technology'
]
const Brands = [
  'Apple',
  'Google',
  'Microsoft',
  'Dell',
  'Symphony',
  'Sony',
  'LG',
  'On ePlus',
  'Google',
  'Samsung',
  'HP',
  'Xiaomi',
  'Panasonic',
  'Intel',
  'Techno'
]
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [checkedBrands, setCheckedBrands] = useState<string[]>([])
  const { productList } = useSelector((state) => state.shopProducts)
  const { categoryList } = useSelector((state) => state.commonFeature)
  const dispatch = useDispatch()
  const { brandList } = useSelector((state) => state.commonFeature)
  const handleAddToWishList = (productId)=>{
    dispatch(addWishListItem(productId)).then((data)=>{
      if(data?.payload?.success){
        toast({
          title: "Product Added to Wishlist Successfully",
          description: data?.payload?.message,
          variant: 'success'
        })
        dispatch(getWishListItems())
      }else{
        toast({
          title: "Failed to add Product to Wishlist",
          description: data?.payload?.message,
          variant: 'destructive'
        })
      }

    })
  }

  const handleBrandChange = (brand: string) => {
    setCheckedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  const handleRadioChange = (category: string) => {
    setSelectedCategory(category)
  }

    return (
    <>
      <div className={'section py-5 bg-gray-50'}>
        <ul className={'flex gap-4 items-center text-gray-600 text-sm'}>
          <Link
            to={'/'}
            className={
              'flex duration-150 gap-4 items-center hover:text-secondary-500'
            }
          >
            <i className="fa-solid fa-house text-base"></i>
            <li>
              Home <i className="ml-2 fa-solid fa-angle-right"></i>
            </li>
          </Link>
          <Link to={'/'}>
            <li>
              Shop <i className="ml-2 fa-solid fa-angle-right"></i>
            </li>
          </Link>
          <Link to={'/products'}>
            <li className=" text-secondary-500">Products</li>
          </Link>
        </ul>
      </div>
      {/*    */}
      <section className={'section py-8'}>
        <div className={'lg:grid lg:grid-cols-12 lg:gap-6'}>
          <div className={'col-span-3'}>
            <div className={'flex gap-8 flex-wrap lg:block'}>
              <div className={'border-b-[1px] pb-8 w-full'}>
                <h3 className={'mb-4 text-gray-900 font-medium'}>CATEGORY</h3>
                <div className={'flex flex-col gap-4'}>
                  {categoryList.map((category) => (
                    <label
                      key={category?._id}
                      className={`${selectedCategory === category?.name ? 'text-gray-900 font-medium' : 'text-gray-700'} text-sm flex items-center gap-4`}
                    >
                      <input
                        checked={selectedCategory === category?.name}
                        onChange={() => handleRadioChange(category?.name)}
                        className={
                          "relative h-5 w-5 appearance-none rounded-full border-[1.9px] border-solid border-gray-200 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary-500 checked:after:bg-gray-00 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] checked:border-8 hover:before:shadow-primary-200 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-primary-500 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary-500 checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right"
                        }
                        type={'radio'}
                        value={category?.name}
                        name={'category'}
                      />
                      {category?.name}
                    </label>
                  ))}
                </div>
              </div>
              <div className={'border-b-[1px] pb-8 w-full'}>
                <h3 className={'text-gray-900 font-medium mt-6 mb-4'}>
                  POPULAR BRANDS
                </h3>
                <div className={'grid grid-cols-2 gap-4'}>
                  {brandList.map((brand) => (
                    <label
                      key={brand?._id}
                      className={`text-sm flex items-center gap-4 ${checkedBrands.includes(brand?.name) ? 'text-gray-900 font-bold' : 'text-gray-700'}`}
                    >
                      <input
                        onChange={() => handleBrandChange(brand?.name)}
                        className={'h-5 w-5 rounded-md'}
                        type={'checkbox'}
                        value={brand?.name}
                        name={brand?.name}
                      />
                      {brand?.name}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={
                'p-6 hidden border-4 border-primary-100 text-center xl:flex xl:flex-col xl:gap-2'
              }
            >
              <div className={'mx-auto w-fit'}>
                <img src={watch} alt={'Smart Watches'} />
              </div>
              <h3 className={'text-h2 text-gray-900 font-bold'}>Watches</h3>
              <p className={'text-danger-600 text-sm font-medium'}>SERIES 7</p>
              <div className={'text-2xl font-medium'}>
                <p className={'mb-2'}>Heavy on Features.</p>
                <p>Light on Price</p>
              </div>
              <div
                className={
                  'flex gap-4 items-center flex-wrap w-fit mx-auto my-4'
                }
              >
                <p className={'text-sm'}>Only for:</p>
                <button className="block text-xs left-4 top-4 ml-auto z-10 bg-warning-400 text-gray-900 font-bold rounded-sm px-4 py-2">
                  $299 USD
                </button>
              </div>
              <button
                className={`flex items-center justify-center rounded-sm text-gray-00 font-bold bg-primary-500 px-6 py-[.7rem] gap-4 mb-4`}
              >
                <span>
                  <i className="fa-brands fa-opencart"></i>
                </span>
                <a href={'#'}>ADD TO CART</a>
              </button>
              <button
                className={`flex items-center justify-center rounded-sm text-primary-500 font-bold bg-primary-50 border-2 border-primary-500 px-6 py-[.7rem] gap-4`}
              >
                <a href={'#'}>VIEW DETAILS</a>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </button>
            </div>
          </div>

          {/*Right section*/}
          <div className={'col-span-9'}>
            <div>
              <div
                className={'flex flex-wrap gap-4 items-center justify-between'}
              >
                <div className={'flex items-center flex-wrap'}>
                  <button className="block border-[1px] border-gray-100 text-sm ml-6 text-gray-700 rounded-sm px-4 py-2">
                    Most Popular
                    <i className="ml-4 fa-solid fa-angle-down"></i>
                  </button>
                </div>
              </div>
              {/**/}
            </div>
            <div className={'my-8'}>
              <div
                className={
                  'grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-rows-2 gap-4 flex-grow'
                }
              >
                {/*    Products Card*/}
                {productList.map(
                  (product: {
                    _id: string
                    product_image: string;
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
                      discount = {product?.discount}
                      className={'max-h-[20rem] overflow-hidden'}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Products