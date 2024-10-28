// @ts-nocheck
import {Link, useParams} from "react-router-dom";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@radix-ui/react-tabs";
import Feature from "@/components/Feature.tsx";
import Button from '@/components/Button.tsx'
import DropDown from '@/components/DropDown.tsx'
import CartItems from '@/components/cart/CartItems.tsx'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from '@/hooks/use-toast.ts'
import { addCartItem } from '@/store/shop/cart-slice/index.ts'

const Product = ()=>{
    const {productId} = useParams();
    const [tab, setTab] = useState("description");
    const [product, setProduct] = useState({})
    const { productList } = useSelector((state) => state.shopProducts)
    const dispatch = useDispatch()
    const [cartItem, setCartItem] = useState<{
        quantity: number,
        productId: string
    }>({
        quantity: 0,
        productId: ''
    })

    console.log("Product: ", productList)

    useEffect(() => {
        if(productList.length > 0){
            const productItem = productList.find(
              (product: { _id: string | undefined }) => product._id === productId
            )
            setProduct(productItem)
        }
    }, [dispatch])


    const handleSetTab = (value: string)=>{
        setTab(value)
    }

    // Cart Logic
    const handleAddToCart = () => {
        setCartItem({
            ...cartItem,
            productId: productId
        })
        dispatch(addCartItem(cartItem)).then((data) => {

            if(data?.payload?.success){
                toast(({
                    title: "Product Added to Cart",
                    description: data?.payload?.message,
                    variant: 'success'
                }))
            } else {
                toast(({
                    title: "Failed to add Product to Cart",
                    description: data?.payload?.message,
                    variant: 'desctructive'
                }))
            }

        })
    }
    return (
        <>
        {
            <>
                <div className={"section py-5 bg-gray-50"}>
                    <ul className={"flex gap-4 items-center text-gray-600 text-sm flex-wrap"}>

                        <Link to={"/"} className={"flex duration-150 gap-4 items-center hover:text-secondary-500"}>
                            <i className="fa-solid fa-house text-base"></i>
                            <li>Home <i className="ml-2 fa-solid fa-angle-right"></i></li>
                        </Link>
                        <Link to={"/"}>
                            <li>Shop <i className="ml-2 fa-solid fa-angle-right"></i></li>
                        </Link>
                        <Link to={"/"}>
                            <li>Shop Grid <i className="ml-2 fa-solid fa-angle-right"></i></li>
                        </Link>
                        <Link to={"/products"}>
                            <li>Products <i className="ml-2 fa-solid fa-angle-right"></i>
                            </li>
                        </Link>
                        <Link to={"#"}>
                            <li className=" text-secondary-500">{product?.name}</li>
                        </Link>

                    </ul>
                </div>
                <section className={"section py-8"}>
                    {/* Product Details */}
                    <div className='grid lg:grid-cols-12 gap-6 lg:gap-12 border-gray-100'>
                        <div className='lg:col-span-5'>
                            <div className='max-w-full max-h-[29rem] h-full w-full p-4 border-2 mx-auto'>
                                <img
                                  src={`http://${product?.product_image}`}
                                  alt={product?.name}
                                  className='w-full h-full object-cover'
                                />
                            </div>
                        </div>
                        <div className='lg:col-span-7'>
                            <div className='vertical-spacing pb-6 mb-8 border-b-2 border-b-gray-100'>
                                <div className='flex gap-2 text-sm flex-wrap'>
                                    <div className='text-primary-500'>
                                        <i className='fa-solid fa-star' />
                                        <i className='fa-solid fa-star' />
                                        <i className='fa-solid fa-star' />
                                        <i className='fa-solid fa-star' />
                                        <i className='fa-solid fa-star' />
                                    </div>
                                    <h4 className='text-gray-900 font-medium'>4.7 Star Rating</h4>
                                    <p className='text-gray-600'>(21,671 User Feedback</p>
                                </div>
                                <h3 className='text-gray-900 font-medium text-lg md:text-2xl'>
                                    {product?.name}
                                </h3>
                                <div className='grid sm:grid-cols-2 gap-4'>
                                    <div className='vertical-spacing'>

                                        <p className='text-gray-600 text-sm'>Brand:
                                            {/* <span className='text-gray-900 font-bold'>{product.brand}</span> */}
                                        </p>
                                    </div>
                                    <div className='vertical-spacing'>
                                        <p className='text-gray-600 text-sm'>Availability: <span
                                          className={`${product?.availability ? 'text-success-500' : 'text-danger-500'} font-bold`}>{`${product?.availability ? 'IN STOCK' : 'OUT OF STOCK'} `}</span>
                                        </p>
                                        <p className='text-gray-600 text-sm'>Category:
                                            {/* <span className='text-gray-900 font-bold'>{product.category}</span> */}
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-2 items-center flex-wrap'>
                                    <h5 className='text-sm text-gray-400 font-bold line-through'>{product?.discount}</h5>
                                    <h4 className='text-2xl text-secondary-500 font-bold'>$1699</h4>
                                    {product?.discount !== 0 &&
                                      <Button title='21% OFF' className='bg-warning-400 text-sm ms-2' />}
                                </div>
                            </div>
                            <div className='grid sm:grid-cols-2 gap-6 mb-8'>
                                <div className='vertical-spacing'>
                                    <h3 className='text-sm font-medium'>Color</h3>
                                    <div className='flex items-center gap-4 flex-wrap'>
                                        <div
                                          className='h-10 w-10 center-item rounded-full cursor-pointer border-[1px] border-danger-500'>
                                            <i className='fa-solid fa-circle text-h2 text-gray-700' />
                                        </div>
                                        <div
                                          className='h-10 w-10 rounded-full center-item cursor-pointer hover:border-[1px] hover:border-danger-500'>
                                            <i className='fa-solid fa-circle text-h2 text-secondary-500' />
                                        </div>
                                    </div>
                                </div>
                                <DropDown className='vertical-spacing font-medium' title='Size'
                                          value='14-inch Liquid Retina XDR display' />

                                {/*    */}
                                <DropDown className='vertical-spacing font-medium' title='Memory'
                                          value='16GB unified memory' />
                                {/*    */}
                                <DropDown className='vertical-spacing font-medium' title='Storage'
                                          value='1TV SSD Storage' />

                            </div>

                            <div className='flex items-center gap-4 flex-wrap'>
                                {/* cart */}
                                <CartItems setCartItem={setCartItem} />
                                <button
                                  onClick={handleAddToCart}
                                  className='flex flex-1 items-center justify-center rounded-sm text-gray-00 font-bold bg-primary-500 px-6 py-4 gap-4 min-w-[10.7rem]'
                                >
                                    ADD TO CART
                                    <i className='fa-brands fa-opencart' />
                                </button>
                                <button
                                  className='rounded-sm text-primary-500 font-bold bg-primary-50 border-2 border-primary-500 px-6 py-4 gap-4 min-w-[7.4rem]'
                                >
                                    <a href='#'>Buy Now</a>
                                </button>
                            </div>
                            <div className='flex my-8 items-center gap-8 text-gray-600'>
                                <div className='flex text-sm cursor-pointer items-center gap-4'>
                                    <i
                                      className={`text-2xl fa-solid fa-heart ${product.wishlist ? 'text-danger-500' : 'product-gray-600'}`} />

                                    <h4>Add to Wishlist</h4>
                                </div>

                                <div className='flex cursor-copy items-center gap-4'>
                                    <h4>Share Product: </h4>
                                    <i className='text-2xl fa-regular fa-copy' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Product Details*/}
                    <div className={"my-8"}>
                        <Tabs defaultValue="description" className="w-full border-[1px] rounded-md border-gray-200">
                            <TabsList
                              className={"px-6 flex md:justify-center gap-4 text-sm flex-wrap border-b-[1px] border-gray-200"}>
                                <TabsTrigger onClick={() => handleSetTab("description")} value="description"
                                             className={`${tab === "description" ? "border-b-4 border-primary-500" : ""} duration-300 px-6 py-[.8rem]`}>DESCRIPTION</TabsTrigger>
                                <TabsTrigger onClick={() => handleSetTab("additional-information")}
                                             value="additional-information"
                                             className={`${tab === "additional-information" ? "border-b-4 border-primary-500" : ""} duration-300 px-6 py-[.8rem]`}>ADDITIONAL
                                    INFORMATION</TabsTrigger>
                                <TabsTrigger onClick={() => handleSetTab("specification")} value="specification"
                                             className={`${tab === "specification" ? "border-b-4 border-primary-500" : ""} duration-300 px-6 py-[.8rem]`}>SPECIFICATION</TabsTrigger>
                                <TabsTrigger onClick={() => handleSetTab("review")} value="review"
                                             className={`${tab === "review" ? "border-b-4 border-primary-500" : ""} px-6 duration-300 py-[.8rem]`}>REVIEW</TabsTrigger>
                            </TabsList>
                            <TabsContent value="description" className={"py-8 px-6 text-sm"}>
                                <div className={"grid lg:grid-cols-4 md:grid-cols-3 gap-14"}>
                                    <div className={"col-span-2 vertical-spacing text-gray-600"}>
                                        <h3 className={"text-gray-900 font-bold"}>Description</h3>
                                        <p>
                                            The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or
                                            M1 Max chip
                                            — the first Apple silicon designed for pros — you get groundbreaking
                                            performance and
                                            amazing battery life. Add to that a stunning Liquid Retina XDR display, the
                                            best camera
                                            and audio ever in a Mac notebook, and all the ports you need. The first
                                            notebook of its
                                            kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance
                                            of the M1
                                            architecture to a whole new level for pro users.
                                        </p>
                                        <p>
                                            Even the most ambitious projects are easily handled with up to 10 CPU cores,
                                            up to 16
                                            GPU cores, a 16‑core Neural Engine, and dedicated encode and decode media
                                            engines that
                                            support H.264, HEVC, and ProRes codecs.
                                        </p>
                                    </div>
                                    <div className={"vertical-spacing"}>
                                        <h3 className={"font-bold"}>Feature</h3>
                                        <div className={"flex flex-col gap-2"}>
                                            <Feature value={"Free 1 Year Warranty"} icon={"fa-medal"} />
                                            <Feature value={"Free 1 Year Warranty"} icon={"fa-truck-moving"} />
                                            <Feature value={"Free 1 Year Warranty"} icon={"fa-handshake"} />
                                            <Feature value={"Free 1 Year Warranty"} icon={"fa-headphones"} />
                                            <Feature value={"Free 1 Year Warranty"} icon={"fa-credit-card"} />
                                        </div>
                                    {/*    */}
                                    </div>
                                    <div className={"border-l-[1px] border-l-gray-100 pl-6 vertical-spacing"}>
                                        <h3 className={"text-gray-900 font-bold"}>Shipping Information</h3>
                                        <div className={"flex flex-col gap-2"}>
                                            <p>Courier: <span className={"text-gray-600"}>2-4 days, free shipping</span>
                                            </p>
                                            <p>Local Shipping: <span
                                              className={"text-gray-600"}>up to one week, $19.00</span></p>
                                            <p>UPS Ground Shipping: <span
                                              className={"text-gray-600"}>4-6 days, $29.00</span></p>
                                            <p>Uni shop Global Export: <span className={"text-gray-600"}>3-4 days, $39.00</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="additional-information" className={"py-8 px-6"}>Any Additional
                                Information about the product</TabsContent>
                            <TabsContent value="specification" className={"py-8 px-6"}>Add your Product Specification
                                here.</TabsContent>
                            <TabsContent value="review" className={"py-8 px-6"}>Add product Reviews here</TabsContent>
                        </Tabs>
                    </div>
                </section>
            </>
        }

        </>
    )
}

export default Product