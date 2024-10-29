// @ts-nocheck
import { Link, useNavigate, useParams } from 'react-router-dom'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@radix-ui/react-tabs";
import Feature from "@/components/Feature.tsx";
import Button from '@/components/Button.tsx'
import CartItems from '@/components/cart/CartItems.tsx'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from '@/hooks/use-toast.ts'
import { addCartItem, fetchAllCart } from '@/store/shop/cartSlice/index.ts'
import { addWishListItem, getWishListItems } from '@/store/shop/wishlist-slice'

const Product = ()=>{
    const {productId} = useParams()
    const [tab, setTab] = useState("description");
    const { productList } = useSelector((state) => state.shopProducts)
    const { user } = useSelector(state => state.auth)
    const { brandList } = useSelector((state) => state.commonFeature)
    const { categoryList } = useSelector((state) => state.commonFeature)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [cartItem, setCartItem] = useState<{ quantity: number, productId: string }>({
        quantity: 0,
        productId: ''
    })
    useEffect(() => {
        setCartItem({
            ...cartItem,
            productId: productId
        })
    }, [])
    const product = productList.length > 0 ? productList.find((product: { _id: string | undefined }) => product._id === productId) : []
    const productBrand = brandList !== [] ? brandList.find(brand => brand._id === product.brand_id).name : "no brand"
    const productCategory = categoryList !== [] ? categoryList.find(category => category._id === product.category_id).name : "no brand"

    const handleSetTab = (value: string)=>{
        setTab(value)
    }

    const handleAddToCart = () => {
        dispatch(addCartItem(cartItem)).then((data) => {
            if(data?.payload?.success){
                toast(({
                    title: "Product Added to Cart",
                    description: data?.payload?.message,
                    variant: 'success'
                }))
                dispatch(fetchAllCart())
            } else {
                toast(({
                    title: "Failed to add Product to Cart",
                    description: data?.payload?.message,
                    variant: 'destructive'
                }))
                user == null && navigate('/auth')
            }
        })
    }

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
    return (
      <>
        {
          <>
            <div className={'section py-5 bg-gray-50'}>
              <ul
                className={
                  'flex gap-4 items-center text-gray-600 text-sm flex-wrap'
                }
              >
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
                <Link to={'/'}>
                  <li>
                    Shop Grid <i className="ml-2 fa-solid fa-angle-right"></i>
                  </li>
                </Link>
                <Link to={'/products'}>
                  <li>
                    Products <i className="ml-2 fa-solid fa-angle-right"></i>
                  </li>
                </Link>
                <Link to={'#'}>
                  <li className=" text-secondary-500">{product?.name}</li>
                </Link>
              </ul>
            </div>
            <section className={'section py-8'}>
              {/* Product Details */}
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 border-gray-100">
                <div className="lg:col-span-5">
                  <div className="max-w-full max-h-[29rem] h-full w-full p-4 border-2 mx-auto">
                    <img
                      src={`http://${product?.product_image}`}
                      alt={product?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="vertical-spacing pb-6 mb-8 border-b-2 border-b-gray-100">
                    <h3 className="text-gray-900 font-medium text-lg md:text-2xl">
                      {product?.name}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="vertical-spacing">
                        <p className="text-gray-600 text-sm">
                          Brand:{' '}
                          <span className="text-gray-900 font-bold">
                            {productBrand}
                          </span>
                        </p>{' '}
                        <p className="text-gray-600 text-sm">
                          Category:{' '}
                          <span className="text-gray-900 font-bold">
                            {productCategory}
                          </span>
                        </p>
                      </div>
                      <div className="vertical-spacing">
                        <p className="text-gray-600 text-sm">
                          Availability:{' '}
                          <span
                            className={`${product?.availability ? 'text-success-500' : 'text-danger-500'} font-bold`}
                          >{`${product?.availability ? 'IN STOCK' : 'OUT OF STOCK'} `}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 items-center flex-wrap">
                      <h5 className="text-sm text-gray-400 font-bold line-through">
                        {product?.discount} ugx
                      </h5>
                      <h4 className="text-2xl text-secondary-500 font-bold">
                        {product?.price} ugx
                      </h4>
                      {product?.discount !== 0 && (
                        <Button
                          title={`${product?.discount} ugx OFF`}
                          className="bg-warning-400 text-sm ms-2"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-wrap">
                    {/* cart */}
                    <CartItems setCartItem={setCartItem} />
                    <button
                      onClick={handleAddToCart}
                      className="flex flex-1 items-center justify-center rounded-sm text-gray-00 font-bold bg-primary-500 px-6 py-4 gap-4 min-w-[10.7rem]"
                    >
                      ADD TO CART
                      <i className="fa-brands fa-opencart" />
                    </button>
                    <button className="rounded-sm text-primary-500 font-bold bg-primary-50 border-2 border-primary-500 px-6 py-4 gap-4 min-w-[7.4rem]">
                      <a href="#">Buy Now</a>
                    </button>
                  </div>
                  <button
                    onClick={() => handleAddToWishList(product?._id)}
                    className="flex text-sm cursor-pointer items-center gap-4 text-danger-500 rounded-sm font-bold bg-success-100 border-2 border-success-500 px-6 py-4 mt-8 min-w-[7.4rem]"
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
              {/* End of Product Details*/}
              <div className={'my-8'}>
                <Tabs
                  defaultValue="description"
                  className="w-full border-[1px] rounded-md border-gray-200"
                >
                  <TabsList
                    className={
                      'px-6 flex md:justify-center gap-4 text-sm flex-wrap border-b-[1px] border-gray-200'
                    }
                  >
                    <TabsTrigger
                      onClick={() => handleSetTab('description')}
                      value="description"
                      className={`${tab === 'description' ? 'border-b-4 border-primary-500' : ''} duration-300 px-6 py-[.8rem]`}
                    >
                      DESCRIPTION
                    </TabsTrigger>
                    <TabsTrigger
                      onClick={() => handleSetTab('additional-information')}
                      value="additional-information"
                      className={`${tab === 'additional-information' ? 'border-b-4 border-primary-500' : ''} duration-300 px-6 py-[.8rem]`}
                    >
                      ADDITIONAL INFORMATION
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="description"
                    className={'py-8 px-6 text-sm'}
                  >
                    <div
                      className={'grid lg:grid-cols-4 md:grid-cols-3 gap-14'}
                    >
                      <div
                        className={'col-span-2 vertical-spacing text-gray-600'}
                      >
                        <h3 className={'text-gray-900 font-bold'}>
                          Description
                        </h3>
                        <p>{product?.description}</p>
                      </div>
                      <div className={'vertical-spacing'}>
                        <h3 className={'font-bold'}>Feature</h3>
                        <div className={'flex flex-col gap-2'}>
                          <Feature
                            value={'Free 1 Year Warranty'}
                            icon={'fa-medal'}
                          />
                          <Feature
                            value={'Free 1 Year Warranty'}
                            icon={'fa-truck-moving'}
                          />
                          <Feature
                            value={'Free 1 Year Warranty'}
                            icon={'fa-handshake'}
                          />
                          <Feature
                            value={'Free 1 Year Warranty'}
                            icon={'fa-headphones'}
                          />
                          <Feature
                            value={'Free 1 Year Warranty'}
                            icon={'fa-credit-card'}
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent
                    value="additional-information"
                    className={'py-8 px-6'}
                  >
                    Any Additional Information about the product
                  </TabsContent>
                </Tabs>
              </div>
            </section>
          </>
        }
      </>
    )
}

export default Product