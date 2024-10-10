import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {categoriesShop} from "@/assets/data.ts";
function CarouselItems() {
    return (
        <section className="section md:my-8 overflow-hidden">
            <div className="my-4">
                <h2 className="text-center font-extrabold text-2xl md:text-h2 text-gray-900">Shop With Categories</h2>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="my-8"
            >
                <CarouselContent>
                    {categoriesShop.map(({img, title}, index) => (
                        <CarouselItem key={index} className="max-w-40 md:max-w-60 my-4">
                            {/*            Product 1*/}
                            <div className="border-[.5px] col-span-2 p-4 border-gray-100 relative text-wrap">
                                <div className="w-full h-auto mx-auto">
                                    <img
                                        src={img}
                                        alt={title}
                                        className="w-full object-cover"
                                    />
                                </div>
                                <h3 className="text-sm font-bold text-center">
                                    {title}
                                </h3>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="bg-primary-500 hover:bg-primary-200 text-gray-00" />
                <CarouselNext className="bg-primary-500 hover:bg-primary-200 text-gray-00"/>
            </Carousel>
        </section>
    )
}
export {CarouselItems}