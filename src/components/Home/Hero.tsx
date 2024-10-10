import console from "/images/console.png";
import phone from "/images/google-pixel.png";
import pods from "/images/pods.png"
import {FaArrowRight, FaCreditCard, FaMedal} from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import {BiSupport} from "react-icons/bi";
import {GoDot, GoDotFill} from "react-icons/go";
const Hero = ()=>{
    return (
        <>
            {/*    Section one Hero*/}
            <section className="section my-8">
                <div>
                    <div className="flex flex-col">
                        <div className="xl:grid xl:grid-cols-10 gap-4">
                            <div className="bg-gray-50 rounded-md p-10 xl:col-span-6 flex md:gap-4 xl:gap-6">
                                <div className="max-w-[19rem] text-wrap">
                                    <div className=" my-[clamp(1.5rem,1.0174rem+2.574vw,4rem)]">
                                        <h3 className="text-secondary-600 font-extrabold">
                                            <span>-</span>THE BEST PLACE TO PLAY
                                        </h3>
                                        <h2 className="text-gray-900 mt-6 font-extrabold text-3xl">
                                            Xbox Consoles
                                        </h2>
                                        <p className="text-gray-700 my-8">
                                            Save up to 50% on select Xbox games. Get 3 months of PC Game
                                            Pass for $2 USD
                                        </p>
                                        <button className="rounded-sm text-gray-00 font-bold bg-primary-500 px-6 py-4 flex gap-4 items-center">
                                            <a href={"#"}>SHOP NOW</a>
                                            <span><FaArrowRight /></span>
                                        </button>
                                    </div>
                                    <div className={"flex gap-2 items-center"}>
                                        <GoDotFill />
                                        <GoDot />
                                        <GoDot />
                                    </div>
                                </div>
                                <div className="relative">
                                    <img
                                        src={console}
                                        alt="console"
                                        className="w-auto object-cover"
                                    />
                                    <div className="absolute top-4 right-4 border-2 border-gray-00 w-16 h-16 text-gray-00 font-bold flex items-center justify-center rounded-full bg-secondary-500">
                                        $299
                                    </div>
                                </div>
                            </div>
                            {/*              right*/}
                            <div className="xl:col-span-4">
                                <div className="grid w-full h-full grid-rows-2 gap-4">
                                    <div className="bg-gray-900 rounded-md relative">
                                        <div className="grid grid-cols-2 gap-4 lg:p-10 p-8">
                                            <div className="text-wrap">
                                                <h3 className="text-warning-500 text-base font-bold">
                                                    SUMMER SALES
                                                </h3>
                                                <h2 className="text-gray-00 my-4 font-bold text-2xl">
                                                    New Google Pixel 6 Pro
                                                </h2>
                                                <button className="rounded-sm text-gray-00 font-bold bg-primary-500 px-6 py-4 flex gap-4 items-center">
                                                    <a>SHOP NOW</a>{" "}
                                                    <span><FaArrowRight /></span>
                                                </button>
                                            </div>
                                            <div className="relative">
                                                <button className="block absolute right-0 ml-auto z-10 bg-warning-400 text-gray-o00 font-bold rounded-sm px-4 py-2">
                                                    29% OFF
                                                </button>
                                            </div>
                                        </div>
                                        <img
                                            src={phone}
                                            alt="Samsung Phone"
                                            className="block absolute bottom-0 right-0 z-[1]"
                                        />
                                    </div>
                                    {/*                  second card*/}
                                    <div className="bg-gray-50 rounded-lg">
                                        <div className="grid grid-cols-2 gap-4 lg:p-10 p-8 items-center">
                                            <div>
                                                <img src={pods} alt={"Black Air Pods"}/>
                                            </div>
                                            <div className="text-wrap">
                                                <h3 className="text-gray-900 text-2xl font-medium">
                                                    Xiaomi FlipBuds Pro
                                                </h3>
                                                <p className="text-secondary-500 my-4 font-medium text-lg">
                                                    $299 USD
                                                </p>
                                                <button className="rounded-sm text-gray-00 font-bold bg-primary-500 px-6 py-4 flex gap-4 items-center">
                                                    <a>SHOP NOW</a>{" "}
                                                    <span><FaArrowRight /></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*          Services*/}
                    <div className="border-[1px] border-gray-100 rounded-md grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-6 my-10">
                        <div className="border-l-[1px] border-l-gray-100 lg:border-none text-gray-900 flex gap-4 items-center px-6">
                            <FaTruckFast className={"md:text-3xl text-2xl"} />
                            <div>
                                <h3 className="font-medium">FASTEST DELIVERY</h3>
                                <p className="text-gray-600 text-sm">Delivery in 24/HR</p>
                            </div>
                        </div>
                        {/*            */}
                        <div className="border-l-[1px] border-l-gray-100 text-gray-900 flex gap-4 items-center px-6">
                            <FaMedal className={"md:text-3xl text-2xl"}  />
                            <div>
                                <h3 className="font-medium">24 HOURS RETURN</h3>
                                <p className="text-gray-600 text-sm">100% money-back guarantee</p>
                            </div>
                        </div>
                        {/*            */}
                        <div className="border-l-[1px] border-l-gray-100 text-gray-900 flex gap-4 items-center px-6">
                            <FaCreditCard className={"md:text-3xl text-2xl"}  />
                            <div>
                                <h3 className="font-medium">SECURE PAYMENT</h3>
                                <p className="text-gray-600 text-sm">Your money is safe</p>
                            </div>
                        </div>
                        {/*            */}
                        <div className="border-l-[1px] border-l-gray-100 text-gray-900 flex gap-4 items-center px-6">
                            <BiSupport className={"md:text-3xl text-2xl"}  />
                            <div>
                                <h3 className="font-medium">SUPPORT 24/7</h3>
                                <p className="text-gray-600 text-sm">Live contact/message</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero