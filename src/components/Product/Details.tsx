import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {categoriesShop} from "@/assets/data.ts";
import {useState} from "react";
import Button from "@/components/Button.tsx";
import DropDown from "@/components/DropDown.tsx";
import CartItems from "@/components/cart/CartItems.tsx";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Details = ({product})=> {
    const [productImage, setProductImage] = useState(product.image);

    console.log("Product",product)
    const handleProductImage = (img: string)=>{
        setProductImage(img)
    }


    return (
        <>
            <div className={"grid lg:grid-cols-12 gap-6 lg:gap-12 border-gray-100"}>
                <div className={"lg:col-span-5"}>
                    <div className={"max-w-full max-h-[29rem] h-full w-full p-4 border-2 mx-auto"}>
                        <img
                            src={productImage}
                            alt={product.name}
                            className={"w-full h-full object-cover"}
                        />
                    </div>

                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="my-8"
                    >
                        <CarouselContent>
                            {categoriesShop.map(({img, title}, index) => (
                                <CarouselItem key={index} className="max-w-24 my-4">
                                    {/*            Product 1*/}
                                    <button
                                        onClick={()=>{handleProductImage(img)}}
                                        className="border-[.5px] col-span-2 p-4 border-gray-100 hover:scale-125 transition-all duration-200">
                                        <div className="w-full h-auto mx-auto">
                                            <img
                                                src={img}
                                                alt={title}
                                                className="w-full object-cover"
                                            />
                                        </div>
                                    </button>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-primary-500 hover:bg-primary-200 text-gray-00 h-10 w-10" />
                        <CarouselNext className="bg-primary-500 hover:bg-primary-200 text-gray-00 h-10 w-10"/>
                    </Carousel>

                </div>
                <div className={"lg:col-span-7"}>
                    <div className={"vertical-spacing pb-6 mb-8 border-b-2 border-b-gray-100"}>
                        <div className={"flex gap-2 text-sm flex-wrap"}>
                            <div className={"text-primary-500"}>
                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                className="fa-solid fa-star"></i>
                            </div>
                            <h4 className={"text-gray-900 font-medium"}>4.7 Star Rating</h4>
                            <p className={"text-gray-600"}>(21,671 User Feedback</p>
                        </div>
                        <h3 className={"text-gray-900 font-medium text-lg md:text-2xl"}>
                            {product.name}
                        </h3>
                        <div className={"grid sm:grid-cols-2 gap-4"}>
                            <div className={"vertical-spacing"}>
                                <p className={"text-gray-600 text-sm"}>Tag: <span
                                    className={"text-gray-900 font-bold"}>{product.tag}</span></p>
                                <p className={"text-gray-600 text-sm"}>Brand: <span
                                    className={"text-gray-900 font-bold"}>{product.brand}</span></p>
                            </div>
                            <div className={"vertical-spacing"}>
                                <p className={"text-gray-600 text-sm"}>Availability: <span
                                    className={`${product.availability.toUpperCase() === "IN STOCK" ? "text-success-500" : "text-danger-500"} font-bold`}>{product.availability}</span></p>
                                <p className={"text-gray-600 text-sm"}>Category: <span
                                    className={"text-gray-900 font-bold"}>{product.category}</span></p>
                            </div>
                        </div>

                        <div className={"flex gap-2 items-center flex-wrap"}>
                            <h5 className={"text-sm text-gray-400 font-bold line-through"}>{product.discount}</h5>
                            <h4 className={"text-2xl text-secondary-500 font-bold"}>$1699</h4>
                            {
                                product.discount !== "" && <Button title={"21% OFF"} className={"bg-warning-400 text-sm ms-2"} />
                            }
                        </div>
                    </div>
                    <div className={"grid sm:grid-cols-2 gap-6 mb-8"}>
                        <div className={"vertical-spacing"}>
                            <h3 className={"text-sm font-medium"}>Color</h3>
                            <div className={"flex items-center gap-4 flex-wrap"}>
                                <div className={"h-10 w-10 center-item rounded-full cursor-pointer border-[1px] border-danger-500"}>
                                    <i className="fa-solid fa-circle text-h2 text-gray-700"></i>
                                </div>
                                <div className={"h-10 w-10 rounded-full center-item cursor-pointer hover:border-[1px] hover:border-danger-500"}>
                                    <i className="fa-solid fa-circle text-h2 text-secondary-500"></i>
                                </div>
                            </div>
                        </div>
                        <DropDown className={"vertical-spacing font-medium"} title={"Size"} value={"14-inch Liquid Retina XDR display"}/>

                        {/*    */}
                        <DropDown className={"vertical-spacing font-medium"} title={"Memory"} value={"16GB unified memory"} />
                        {/*    */}
                        <DropDown className={"vertical-spacing font-medium"} title={"Storage"} value={"1TV SSD Storage"} />

                    </div>

                    <div className={"flex items-center gap-4 flex-wrap"}>
                        {/*cart*/}
                        <CartItems />
                        <button
                            className={`flex flex-1 items-center justify-center rounded-sm text-gray-00 font-bold bg-primary-500 px-6 py-4 gap-4 min-w-[10.7rem]`}>
                            <a href={"#"}>ADD TO CART</a>
                            <span><i className="fa-brands fa-opencart"></i></span>
                        </button>
                        <button
                            className={`rounded-sm text-primary-500 font-bold bg-primary-50 border-2 border-primary-500 px-6 py-4 gap-4 min-w-[7.4rem]`}>
                            <a href={"#"}>Buy Now</a>
                        </button>
                    </div>
                    <div className={"flex my-8 items-center gap-8 text-gray-600"}>
                        <div className={"flex text-sm cursor-pointer items-center gap-4"}>
                            <i className={`text-2xl fa-solid fa-heart ${product.wishlist ? "text-danger-500": "product-gray-600"}`}></i>

                            <h4>Add to Wishlist</h4>
                        </div>

                        <div className={"flex cursor-copy items-center gap-4"}>
                            <h4>Share Product: </h4>
                            <i className="text-2xl fa-regular fa-copy"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Details