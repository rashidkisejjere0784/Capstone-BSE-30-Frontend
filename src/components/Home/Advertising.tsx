import homepod from "/images/homepod.png";
import phone from "/images/xiaomi-mi.png";
import ShopNowButton from "@/components/ShopNowButton.tsx";

const Advertising = ()=>{
    return (
        <>
            <section className={"section my-8"}>
                <div className="xl:grid xl:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-md p-10 flex md:gap-4 xl:gap-6">
                        <div className="max-w-[19rem] text-wrap">
                            <div className="my-4">
                                <button
                                    className="text-sm bg-secondary-500 text-gray-00 font-bold rounded-sm px-4 py-2">
                                    INTRODUCING
                                </button>
                                <h2 className="text-gray-900 my-4 font-bold text-h2">
                                    New Apple Homepod Mini
                                </h2>
                                <p className="text-gray-700 text-sm my-4">
                                    Jam-packed with innovation, HomePod mini delivers unexpectedly
                                </p>
                                <ShopNowButton className={"text-sm"}/>
                            </div>
                        </div>
                        <div>
                            <img
                                src={homepod}
                                alt="console"
                                className="w-auto object-cover"
                            />
                        </div>
                    </div>
                    {/*              right*/}

                    <div className={"bg-green-300"}>
                        <div className="bg-gray-900 rounded-md relative h-full">
                            <div className="lg:p-10 p-8 max-w-[25rem] ">
                                <div className="my-4">
                                    <button className="block text-xsml-auto z-10 bg-warning-400 text-gray-900 font-bold rounded-sm px-4 py-2">
                                        INTRODUCING NEW
                                    </button>
                                    <h2 className="text-gray-00 my-4 font-bold text-h2">
                                        Xiaomi Mi 11 Ultra 125GB+256GB
                                    </h2>
                                    <p className="text-gray-300 text-sm my-4">
                                        *Data provided bu internal laboratories. Industry measurement
                                    </p>
                                    <ShopNowButton className={"text-sm"}/>
                                </div>
                            </div>
                            <img
                                src={phone}
                                alt="Samsung Phone"
                                className="block absolute bottom-0 right-0 z-[1]"
                            />
                            <div
                                className="absolute top-4 right-4 border-2 border-gray-00 w-20 h-20 text-lg text-gray-00 font-bold flex items-center justify-center rounded-full bg-secondary-500 z-10">
                                $590
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Advertising