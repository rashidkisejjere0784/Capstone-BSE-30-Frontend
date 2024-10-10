import ps5 from "/images/ps5.png";
import Discount from "@/components/Discount.tsx";
import {products} from "@/assets/data.ts";
import ProductCard from "@/components/ProductCard.tsx";
import {FaArrowRight, FaRegHeart, FaStar} from "react-icons/fa";
import {LuEye} from "react-icons/lu";
import {FiShoppingCart} from "react-icons/fi";
const BestDeals = ()=>{
    return (
        <>
            <section className="section my-8">
                <div>
                    <div className="flex justify-between items-center flex-wrap gap-4">
                        <div className="flex md:gap-4 gap-2 flex-wrap items-center">
                            <h2 className="text-gray-900 font-extrabold text-2xl">Best Deals</h2>
                            <p className="text-sm text-black ml-4">Deals end in</p>
                            <div className="px-4 py-2 bg-warning-300 text-gray-900 text-base rounded-sm">
                                16d : 21hr : 77m : 23s
                            </div>
                        </div>
                        <div>
                            <a href="#" className="flex gap-4 text-secondary-500 items-center">
                                <span>Browse All Product</span>
                                <FaArrowRight />
                            </a>
                        </div>
                    </div>
                    {/*        content*/}
                    <div className="my-6 h-fit text-wrap">
                        <div className="border-[.5px] border-gray-100 2xl:grid 2xl:grid-cols-11 2xl:grid-rows-2 2xl:h-[39.75rem]">
                            <div className="2xl:col-span-3 2xl:row-span-2 p-4 relative 2xl:h-[39.75rem]">
                                <button
                                    className="block text-xs absolute left-4 top-[1rem] ml-auto z-10 bg-warning-400 text-gray-900 font-bold rounded-sm px-4 py-2">
                                    32% OFF
                                </button>
                                <button
                                    className="block text-xs absolute left-4 top-[3.5rem] ml-auto z-10 bg-danger-500 text-gray-00 font-bold rounded-sm px-4 py-2">
                                    HOT
                                </button>
                                <div className="text-left">
                                    <div className="w-[18.3rem] mx-auto h-[16.1]">
                                        <img
                                            src={ps5}
                                            alt="Playstation 5"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex gap-2 items-center my-2 w-fit mx-auto">
                                            <div className="text-warning-500 flex gap-2">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <p className="text-gray-500">(52,677)</p>
                                        </div>
                                        <h3 className="text-gray-900 my-2 text-base font-medium mx-auto w-fit">
                                            Xbox Series S-512GB SSD Console with Wireless Controller-EU
                                            Version...
                                        </h3>
                                        <Discount className={"mx-auto w-fit"} price={"$865.99"} discount={"$442.12"} discountPosition={"right"} />
                                        <p className="my-2 text-gray-600 text-sm mx-auto w-fit">
                                            Game built using the Xbox Series X|s development kit showcase
                                            unparalleled load times, visuals
                                        </p>
                                        <div className="flex gap-2 flex-wrap mx-auto items-center mt-4 text-sm w-fit">
                                            <div
                                                className="center-item text-gray-900 py-4 px-6 text-base bg-primary-100">
                                                <FaRegHeart className={"text-lg"}/>
                                            </div>
                                            <div className="text-gray-00 py-4 px-8 bg-primary-500 flex gap-2 items-center">
                                                <FiShoppingCart className={"text-lg"}/> <p>ADD TO CART</p>
                                            </div>
                                            <div
                                                className="center-item text-gray-900 py-4 px-6 text-base bg-primary-100">
                                                <LuEye className={"text-lg"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           {/* /!*            Product 1*!/*/}
                           <div className={"2xl:col-span-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 2xl:h-[39.75rem]"}>
                               {
                                   products.slice(0,8).map(({id, image, discount, price, deals, name})=> (
                                       <ProductCard key={id} id={id} src={image} name={name} amount={price}
                                                    deal={deals}
                                                    className={"max-h-[20rem] overflow-hidden"} discount={discount}/>
                                   ))
                               }
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default BestDeals