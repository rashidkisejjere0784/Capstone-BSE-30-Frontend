import {Link} from 'react-router-dom'
import logo from "/misercom_logo.png";
import SearchInput from "@/components/SearchInput.tsx";
import { IoCartOutline } from "react-icons/io5";
import {
    FaRegHeart,
    FaRegBookmark,
    FaRegUserCircle,
    FaFacebook,
    FaInstagram,
    FaRegLightbulb, FaChevronDown
} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {MdOutlineSmartphone, MdOutlineSupportAgent} from "react-icons/md";
import {useState} from "react";

const Header = () => {
    const [activeTab, setActiveTab] = useState("all-category");

    const handleActiveTab = (value: string)=>{
        setActiveTab(value);
    }
    return (
        <>
            <header id="header">
                <div className="bg-secondary-700 ">
                    <div className="section flex justify-between gap-4 items-center flex-wrap py-2 border-b-2 border-b-divider">
                        <h3 className="text-gray-00 text-base">
                            Welcome to Misercom e-commerce Store
                        </h3>
                        <div className="flex gap-4 items-center">
                            <div className="flex gap-4 text-gray-00 items-center">
                                <h3 className="text-base">Follow us:</h3>
                                <FaFacebook />
                                <FaInstagram />
                                <FaXTwitter />
                            </div>
                            <div className="border-l-2 border-l-divider">
                                <div className="relative ">
                                    <button className="flex items-center px-6 py-2 text-sm font-medium uppercase text-gray-00 transition duration-150 ease-in-out" type="button">
                                        USD
                                        <span className="ml-2"><FaChevronDown /></span>
                                    </button>
                                    <ul className="absolute z-[1000] m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white text-base">
                                        <li>
                                            <a className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700" href="#">
                                                UGX
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700" href="#">
                                                EUR
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section flex justify-between items-center gap-6 py-6 flex-wrap">
                        <Link to={"/"} className="flex gap-2 items-center text-white">
                            <img src={logo} alt="Misercom Logo" className="w-14 h-14" />
                            <h1 className="text-3xl font-extrabold">Misercom</h1>
                        </Link>
                        <SearchInput />
                        <div className="flex gap-6 text-gray-00 text-2xl">
                            <Link to={"/cart"} className="relative">
                                <div className="absolute -top-2 -right-2 bg-white w-5 h-5 text-secondary-700 flex items-center justify-center text-sm  rounded-full">
                                    2
                                </div>
                                <IoCartOutline />
                            </Link>
                            <Link to={"/wishlist"}>
                                <FaRegHeart />
                            </Link>
                            <Link to={"/auth"}>
                                <div>
                                    <FaRegUserCircle />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/*      navigation*/}
                <nav className="section bg-gray-00 py-4 border-b-2 border-b-gray-50">
                    <div className="flex items-center gap-4 justify-between">
                        <div className={"w-full"}>
                            <ul className="list-none text-gray-600 flex gap-2 flex-wrap">
                                <button onClick={()=>handleActiveTab("all-category")}  className={`px-4 py-2 flex gap-2 ${activeTab === "all-category" ? "bg-gray-50" : ""} hover:text-gray-900 hover:bg-gray-50 transition-all duration-250 items-center text-sm`}>
                                    <Link to="/">All Category</Link>
                                    <FaChevronDown />
                                </button>
                                <button onClick={()=>handleActiveTab("products")} className={`px-4 py-2 flex gap-2 ${activeTab === "products" ? "bg-gray-50" : ""} hover:text-gray-900 hover:bg-gray-50 transition-all duration-250 items-center text-sm`}>
                                    <FaRegBookmark />
                                    <Link to={"/products"}>Products</Link>
                                </button>
                                <button onClick={()=>handleActiveTab("wishlist")}  className={`px-4 py-2 flex gap-2 hover:text-gray-900 ${activeTab === "wishlist" ? "bg-gray-50" : ""} hover:bg-gray-50 transition-all duration-250 items-center text-sm`}>
                                    <FaRegHeart />
                                    <Link to={"/wishlist"}>Wishlist</Link>
                                </button>
                                <button onClick={()=>handleActiveTab("about-us")}  className={`px-4 py-2 flex gap-2 hover:text-gray-900 ${activeTab === "about-us" ? "bg-gray-50" : ""} hover:bg-gray-50 transition-all duration-250 items-center text-sm`}>
                                    <FaRegLightbulb />
                                    <Link to={"/about"}>About Us</Link>
                                </button>
                                <button onClick={()=>handleActiveTab("support")}  className={`px-4 py-2 flex gap-2 hover:text-gray-900 ${activeTab === "support" ? "bg-gray-50" : ""} hover:bg-gray-50 transition-all duration-250 items-center text-sm`}>
                                    <MdOutlineSupportAgent />
                                    <Link to={"/contact"}>Customer Support</Link>
                                </button>
                            </ul>
                        </div>
                        <div className="text-gray-800 font-bold text-lg hidden lg:block w-fit">
                            <a href="#" className={"flex gap-2 items-center"}>
                                <MdOutlineSmartphone className={"text-2xl"}/>
                                <p className={"text-nowrap"}>+256 777777777</p>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Header;