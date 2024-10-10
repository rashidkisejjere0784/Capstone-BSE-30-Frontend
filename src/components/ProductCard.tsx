import {Link} from "react-router-dom";

interface Props {
    src: string;
    amount: string;
    name: string;
    deal?: string;
    className?: string;
    discount?: string;
    id: string;
}
import {FaRegHeart, FaStar} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import {LuEye} from "react-icons/lu";
const ProductCard = ({id,src, amount, name, deal, className, discount}:Props)=>{
    return (
        <>
            <div

                className={`border-[.5px] p-4 border-gray-100 relative text-wrap h-full w-full ${className}`}>
                {/*Deals*/}
                <div className={"flex flex-col gap-4 absolute left-4 top-4"}>
                    <button
                        className={`${deal?.includes("OFF") ? "block" : "hidden"} text-xs  ml-auto z-10 bg-warning-400 text-gray-900 font-bold rounded-sm px-4 py-2`}>32%
                        OFF
                    </button>
                    <button
                        className={`${deal === "HOT" ? "block" : "hidden"} text-xs ml-auto z-10 bg-danger-500 text-gray-00 font-bold rounded-sm px-4 py-2`}>HOT
                    </button>
                    <button
                        className={`${deal === "BEST DEALS" ? "block" : "hidden"}  text-xs ml-auto z-10 bg-secondary-500 text-gray-00 font-bold rounded-sm px-4 py-2`}>BEST
                        DEALS
                    </button>
                    <button
                        className={`${deal === "SOLD OUT" ? "block" : "hidden"} text-xs ml-auto z-10 bg-gray-400 text-gray-00 font-bold rounded-sm px-4 py-2`}>SOLD
                        OUT
                    </button>
                    <button
                        className={`${deal === "ENDS OF CHRISTMAS" ? "block" : "hidden"} text-xs ml-auto z-10 bg-gray-00 text-gray-900 font-bold rounded-sm px-4 py-2`}>
                        ENDS OF CHRISTMAS
                    </button>
                    <button
                        className={`${deal === "SALE" ? "block" : "hidden"} text-xs ml-auto z-10 bg-success-500 text-gray-00 font-bold rounded-sm px-4 py-2`}>
                        SALE
                    </button>
                </div>
                {/*End Deals*/}
                <div data-hover={"hovered"} className="w-full h-[11.25rem] mx-auto relative group">
                    <div className={"absolute bg-black/20 top-0 bottom-0 left-0 right-0 z-[-99] opacity-0 group-hover:opacity-100 group-hover:z-[99] duration-300"}>
                        <div className={"h-full w-full flex items-center justify-center"}>
                            <div className={"flex gap-2 items-center"}>
                                <button className={"bg-white rounded-full p-3 center-item hover:bg-primary-500 hover:text-white duration-300"}>
                                    <FaRegHeart className={"text-lg"}/>
                                </button>
                                <button
                                    className={"bg-white rounded-full p-3 center-item hover:bg-primary-500 hover:text-white duration-300"}>
                                    <FiShoppingCart className={"text-lg"}/>
                                </button>
                                <Link to={`/product/${id}`}
                                    className={"bg-white rounded-full p-3 center-item hover:bg-primary-500 hover:text-white duration-300"}>
                                    <LuEye className={"text-lg"}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img
                        src={src}
                        alt="White Drone"
                        className="w-auto h-full object-cover mx-auto"
                    />
                </div>
                {/*Stars*/}
                <Link to={`/product/${id}`} className={"w-full block"}>
                    {
                        <div className="flex gap-2 items-center my-2 text-sm">
                            <div className="text-warning-500 flex gap-2">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className="text-gray-500">(52,677)</p>
                        </div>
                    }
                    {/*End Stars*/}
                    <p className="text-sm overflow-y-hidden h-[2.5rem]">
                        {name}
                    </p>
                    <div className="mt-2 flex gap-2 items-center font-bold text-sm">
                        <p className={`${discount && "inline-block"} hidden text-gray-300 line-through font-medium`}>$865</p>
                        <p className="text-secondary-500">{amount}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard