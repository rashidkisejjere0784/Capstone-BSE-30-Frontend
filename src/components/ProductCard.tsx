import {Link} from "react-router-dom";

interface Props {
    amount: string;
    src: string;
    name: string;
    className?: string;
    id: string;
    handleAddToWishList?: (id: string)=>void,
    discount: number;
}
import {FaRegHeart} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import {LuEye} from "react-icons/lu";
const ProductCard = ({id, src, amount, name,discount, handleAddToWishList, className}:Props)=>{
    return (
        <>
            <div

                className={`border-[.5px] border-gray-100 relative text-wrap h-full w-full ${className}`}>
                <div data-hover={"hovered"} className="w-full h-[11.25rem] mx-auto relative group">
                    <div className={"absolute bg-black/20 top-0 bottom-0 left-0 right-0 z-[-99] opacity-0 group-hover:opacity-100 group-hover:z-[99] duration-300"}>
                        <div className={"h-full w-full flex items-center justify-center"}>
                            <div className={"flex gap-2 items-center"}>
                                <button onClick={()=> handleAddToWishList ? handleAddToWishList(id) : ''} className={"bg-white rounded-full p-3 center-item hover:bg-primary-500 hover:text-white duration-300"}>
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
                        alt={name}
                        className="w-auto h-full object-cover mx-auto p-4 "
                    />
                </div>
                {/*Stars*/}
                <Link to={`/product/${id}`} className={"w-full block border-t p-4 "}>
                    <p className="text-sm overflow-y-hidden h-[2.5rem]">
                        {name}
                    </p>
                    <div className="mt-2 flex gap-2 items-center font-bold text-sm">
                        <p className={`inline-block text-gray-300 line-through font-medium`}>{discount} ugx</p>
                        <p className="text-secondary-500">{amount} ugx</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard