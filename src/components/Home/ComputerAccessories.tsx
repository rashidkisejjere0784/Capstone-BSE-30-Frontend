import earBuds from "/images/wireless-earbuds.png";
import ProductCard from "@/components/ProductCard.tsx";
import {products} from "@/assets/data.ts";
import ShopNowButton from "@/components/ShopNowButton.tsx";
import Button from "@/components/Button.tsx";
const ComputerAccessories =()=>{
    return (
        <>

            <section className="section my-8">
                <div className={"grid 2xl:grid-cols-12 gap-6"}>

                    <div className={"2xl:col-span-9 w-full h-full flex flex-col gap-6"}>
                        <div className="flex justify-between items-center h-auto flex-wrap">
                            <div className="flex gap-4 items-center">
                                <h2 className="text-gray-900 font-extrabold text-2xl">Computer Accessories</h2>
                            </div>
                            <div className={"flex gap-6 text-sm flex-wrap"}>
                                <ul className={"text-gray-600 list-none flex items-center gap-4 flex-wrap"}>
                                    <li className={" py-2 border-b-2 border-b-primary-500 text-gray-900 font-bold  transition-all duration-100 px-2"}>All
                                        Product
                                    </li>
                                    <li className={" py-2 hover:text-gray-900 hover:border-b-2 hover:border-b-primary-500 hover:font-bold px-2 transition-all duration-100"}>Smart
                                        Phone
                                    </li>
                                    <li className={" py-2 hover:text-gray-900 hover:border-b-2 hover:border-b-primary-500 hover:font-bold px-2  transition-all duration-100"}>Laptop</li>
                                    <li className={"py-2 hover:text-gray-900 hover:border-b-2 hover:border-b-primary-500 hover:font-bold px-2  transition-all duration-100"}>Headphone</li>
                                    <li className={"py-2 hover:text-gray-900 hover:border-b-2 hover:border-b-primary-500 hover:font-bold px-2  transition-all duration-100"}>TV</li>
                                </ul>
                                <a href="#"
                                   className="flex gap-2 hover:text-secondary-500 text-primary-500 items-center  transition-all duration-100">
                                    <span>Browse All Product</span>
                                    <i className="fa-solid fa-arrow-right"/>
                                </a>
                            </div>
                        </div>
                        {/*    Products*/}
                        <div className={"grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 2xl:grid-rows-2 gap-4 flex-grow"}>
                            {/*    Products Card*/}
                            {
                                products.slice(0, 8).map(({id, image, name, price, deals, discount}) => (
                                    <ProductCard key={id} id ={id} src={image} name={name} amount={price} deal={deals}
                                                 className={"max-h-[20rem] overflow-hidden"} discount={discount}/>
                                ))
                            }
                        </div>
                    </div>

                    {/*    */}
                    <div className="2xl:col-span-3 w-full flex flex-col gap-4">
                        <div className={"bg-warning-200 rounded-lg p-6"}>
                            <img src={earBuds} alt={"Wireless EarBuds"} className={"mx-auto"}/>
                            <h3 className="text-gray-900 text-h2 font-bold text-center">Xiaomi Trues Wireless Earbuds</h3>
                            <p className={"text-gray-700 text-center mt-4 mb-2"}>Escape the noise, It is time to hear the magic with Xiaomi Earbuds</p>
                            <div className={"flex gap-4 items-center flex-wrap w-fit mx-auto mb-4"}>
                                <p className={"text-sm"}>Only for:</p>
                                <button
                                    className="text-xs bg-gray-00 text-gray-900 font-bold rounded-sm px-4 py-2">
                                    $299 USD
                                </button>
                            </div>
                            <ShopNowButton className={"w-full"}/>
                        </div>
                        {/**/}
                        <div className={"rounded-lg p-6 bg-dark-blue-800 flex flex-col justify-center"}>
                            <Button title={"SUMMER SALES"} className={"mt-4 bg-dark-blue-200 text-sm text-gray-00 mx-auto"}/>
                            <h3 className={"text-gray-00 text-2xl my-4 w-fit mx-auto font-bold"}>37% DISCOUNT</h3>
                            <p className={"text-gray-00 mx-auto mb-4"}>only for <span className={"text-warning-500"}>SmartPhone</span>product.</p>
                            <ShopNowButton className={"text-sm text-center w-full bg-secondary-500"}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ComputerAccessories