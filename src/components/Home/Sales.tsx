import camera from "/images/camera.png"
import SalesCard from "@/components/SalesCard.tsx";
import samsungGalaxy from "/images/samsung-galaxy.png";
import keyboard from "/images/accessories.png";
import ps5 from "/images/ps5.png"
const Sales = ()=>{
    return (
        <>
            <section className={"section py-8"}>
                <div className={"grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4"}>
                    <div>
                        <h3 className={"py-4 font-medium"}>FLASH SALE TODAY</h3>
                        <div className={"flex flex-col gap-4"}>
                            <SalesCard img={camera} title={"Bose Sport Earbuds-Wireless Earphones-Bluetooth in Ear..."} price={"$1,500"}/>
                            <SalesCard img={samsungGalaxy} title={"Simple Mobile 4G LTE Prepaid SmartPhone"} price={"$1,500"}/>
                            <SalesCard img={keyboard} title={"4K UHD Smart TV with Chromecast Built-in"} price={"$1,500"}/>

                        </div>
                    </div>
                    <div>
                        <h3 className={"py-4 font-medium"}>BEST SELLERS</h3>
                        <div className={"flex flex-col gap-4"}>
                            <SalesCard img={ps5} title={"Samsung Electronics Samsung Galaxy S21 5G"}
                                       price={"$1,500"}/>
                            <SalesCard img={samsungGalaxy} title={"Simple Mobile 4G LTE Prepaid SmartPhone"}
                                       price={"$1,500"}/>
                            <SalesCard img={keyboard} title={"4K UHD Smart TV with Chromecast Built-in"}
                                       price={"$1,500"}/>

                        </div>
                    </div>
                    <div>
                        <h3 className={"py-4 font-medium"}>TOP RATED</h3>
                        <div className={"flex flex-col gap-4"}>
                            <SalesCard img={camera} title={"Bose Sport Earbuds-Wireless Earphones-Bluetooth in Ear..."}
                                       price={"$1,500"}/>
                            <SalesCard img={samsungGalaxy} title={"Simple Mobile 4G LTE Prepaid SmartPhone"}
                                       price={"$1,500"}/>
                            <SalesCard img={keyboard} title={"4K UHD Smart TV with Chromecast Built-in"}
                                       price={"$1,500"}/>

                        </div>
                    </div>
                    <div>
                        <h3 className={"py-4 font-medium"}>NEW ARRIVALS</h3>
                        <div className={"flex flex-col gap-4"}>
                            <SalesCard img={camera} title={"Bose Sport Earbuds-Wireless Earphones-Bluetooth in Ear..."}
                                       price={"$1,500"}/>
                            <SalesCard img={samsungGalaxy} title={"Simple Mobile 4G LTE Prepaid SmartPhone"}
                                       price={"$1,500"}/>
                            <SalesCard img={keyboard} title={"4K UHD Smart TV with Chromecast Built-in"}
                                       price={"$1,500"}/>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Sales