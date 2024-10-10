import computerAccessories from "/images/computer-accessories.jpg";
import ProductCard from "@/components/ProductCard.tsx";
import {products} from "@/assets/data.ts";

const FeaturedProducts = ()=>{
    return (
        <>
            <section className="section my-8">
                <div className={"grid 2xl:grid-cols-12"}>
                    <div className="hidden 2xl:col-span-3 bg-warning-300 max-w-[19.5rem] w-full 2xl:flex flex-col gap-4 ">
                        <div>
                            <h3 className="text-danger-600 text-sm text-center pt-8">COMPUTER & ACCESSORIES</h3>
                            <h2 className={"text-2xl text-gray-900 font-extrabold text-center py-4"}>32% Discount</h2>
                            <p className={"text-xs text-gray-700 text-center"}>For all electronics Products</p>
                            <div className={"flex gap-4 items-center flex-wrap w-fit mx-auto mt-4 mb-8"}>
                                <p className={"text-sm"}>Offers ends in:</p>
                                <button
                                    className="block text-xs left-4 top-4 ml-auto z-10 bg-gray-00 text-gray-900 font-bold rounded-sm px-4 py-2">
                                    ENDS OF CHRISTMAS
                                </button>
                            </div>
                            <button
                                className="mb-4 rounded-sm text-gray-00 font-bold bg-primary-500 px-6 py-4 flex gap-4 mx-auto">
                                <a href={"#"}>SHOP NOW</a>
                                <span><i className="fa-solid fa-arrow-right"/></span>
                            </button>
                        </div>
                        <div className={"flex-1"}>
                            <img src={computerAccessories} alt={"Computer Accessories"} className={"w-full h-full"}/>
                        </div>
                    </div>
                    <div className={"col-span-9 w-full h-full flex flex-col gap-6"}>
                        <div className="flex justify-between items-center h-auto flex-wrap">
                            <div className="flex gap-4 items-center">
                                <h2 className="text-gray-900 font-extrabold text-2xl">Featured Products</h2>
                            </div>
                            <div className={"flex gap-6 text-sm flex-wrap"}>
                                <ul className={"text-gray-600 list-none flex items-center gap-4 flex-wrap"}>
                                    <li className={" py-2 border-b-2 border-b-primary-500 text-gray-900 font-bold  transition-all duration-100 px-2"}>All
                                        Product
                                    </li>
                                    <li className={" py-2 hover:text-gray-900 hover:border-b-2 hover:border-b-primary-500 hover:font-bold px-2 transition-all duration-100"}>Smart Phone</li>
                                    <li className={" py-2 hover:text-gray-900 hover:border-b-2 hover:border-b-primary-500 hover:font-bold px-2  transition-all duration-100"}>Laptop</li>
                                    <li className={"py-2 hover:text-gray-900 hover:border-b-2 hover:border-b-primary-500 hover:font-bold px-2  transition-all duration-100"}>Headphone</li>
                                    <li className={"py-2 hover:text-gray-900 hover:border-b-2 hover:border-b-primary-500 hover:font-bold px-2  transition-all duration-100"}>TV</li>
                                </ul>
                                <a href="#" className="flex gap-2 hover:text-secondary-500 text-primary-500 items-center  transition-all duration-100">
                                    <span>Browse All Product</span>
                                    <i className="fa-solid fa-arrow-right"/>
                                </a>
                            </div>
                        </div>
                    {/*    Products*/}
                        <div className={"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-rows-2 gap-4 flex-grow"}>
                        {/*    Products Card*/}
                            {
                                products.slice(0,8).map(({id, image, name, price, deals,discount})=>(
                                    <ProductCard key={id} id={id} src={image} name={name} amount={price} deal={deals} className={"max-h-[20rem] overflow-hidden"} discount={discount}/>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FeaturedProducts