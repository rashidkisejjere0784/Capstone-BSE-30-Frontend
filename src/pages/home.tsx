import Hero from "@/components/Home/Hero.tsx";
import BestDeals from "@/components/Home/BestDeals.tsx";
import {CarouselItems} from "@/components/Home/Carousel.tsx";
import FeaturedProducts from "@/components/Home/FeaturedProducts.tsx";
import Advertising from "@/components/Home/Advertising.tsx";
import ComputerAccessories from "@/components/Home/ComputerAccessories.tsx";
import Button from "@/components/Button.tsx";
import ShopNowButton from "@/components/ShopNowButton.tsx";

import macbook from "/images/macbook.png"
import Sales from "@/components/Home/Sales.tsx";
const Home = ()=>{
    return (
        <>
            <Hero />
            {/*    section 2 products*/}
            <BestDeals />
            <CarouselItems />
            <FeaturedProducts />
            <Advertising />
            <ComputerAccessories />
            <section className={"section-badge py-8"}>
                <div className={"grid grid-cols-11 bg-primary-100 py-4 px-[clamp(1rem,0.4208rem+3.0888vw,4rem)]"}>
                    <div className={"col-span-7 max-w-[26.5rem] mt-12"}>
                        <Button title={"SAVE UP TO $200.00"} className={"bg-secondary-500 text-gray-00 my-4"}/>
                        <h2 className={"text-[3rem] text-gray-900 font-extrabold mb-4"}>Macbook Pro</h2>
                        <h4 className={"text-2xl my-6"}>
                            Apple M1 Max Chip. 32GB Unified memory, 1TB SSD Storage
                        </h4>
                        <ShopNowButton />
                    </div>
                    <div className={"relative col-span-4"}>
                        <img src={macbook} alt={"Macbook Pro"}/>
                        <div
                            className="absolute top-4 left-4 border-4 border-gray-00 w-24 h-24 text-lg text-gray-900 font-bold flex items-center justify-center rounded-full bg-primary-200 z-10">
                            $590
                        </div>
                    </div>
                </div>
            </section>
            <Sales />
        </>
    )
}
export default Home
