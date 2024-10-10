import {Link, useParams} from "react-router-dom";
import Details from "@/components/Product/Details.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@radix-ui/react-tabs";
import {useState} from "react";
import Feature from "@/components/Feature.tsx";
import Sales from "@/components/Home/Sales.tsx";
import {products} from "@/assets/data.ts";

interface Product {
    id: string;
    name: string;
    price: string;
    category: string;
    description: string;
    discount?: string; // optional field
    availability: string;
    brand: string;
    image: string;
    images: string[];
    colors: string[];
    deals?: string; // optional field
    size: string;
    capacity: string;
    cart: boolean;
    tag?: string; // optional field
    quantity: number;
    whishlist: boolean;
    rating: number[];
}

const Product = ()=>{
    const {productId} = useParams();
    console.log(productId);

    const product = products.find((product=>product.id === productId)) as Product;


    const [tab, setTab] = useState("description");
    const handleSetTab = (value: string)=>{
        setTab(value)
    }
    return (
        <>
        {
            <>
                <div className={"section py-5 bg-gray-50"}>
                    <ul className={"flex gap-4 items-center text-gray-600 text-sm flex-wrap"}>

                        <Link to={"/"} className={"flex duration-150 gap-4 items-center hover:text-secondary-500"}>
                            <i className="fa-solid fa-house text-base"></i>
                            <li>Home <i className="ml-2 fa-solid fa-angle-right"></i></li>
                        </Link>
                        <Link to={"/"}>
                            <li>Shop <i className="ml-2 fa-solid fa-angle-right"></i></li>
                        </Link>
                        <Link to={"/"}>
                            <li>Shop Grid <i className="ml-2 fa-solid fa-angle-right"></i></li>
                        </Link>
                        <Link to={"/products"}>
                            <li>Products <i className="ml-2 fa-solid fa-angle-right"></i>
                            </li>
                        </Link>
                        <Link to={"#"}>
                            <li className=" text-secondary-500">{product.name}</li>
                        </Link>

                    </ul>
                </div>
                <section className={"section py-8"}>
                    <Details product={product}/>
                    <div className={"my-8"}>
                        <Tabs defaultValue="description" className="w-full border-[1px] rounded-md border-gray-200">
                            <TabsList className={"px-6 flex md:justify-center gap-4 text-sm flex-wrap border-b-[1px] border-gray-200"}>
                                <TabsTrigger onClick={() => handleSetTab("description")} value="description"
                                             className={`${tab === "description" ? "border-b-4 border-primary-500" : ""} duration-300 px-6 py-[.8rem]`}>DESCRIPTION</TabsTrigger>
                                <TabsTrigger onClick={() => handleSetTab("additional-information")}
                                             value="additional-information"
                                             className={`${tab === "additional-information" ? "border-b-4 border-primary-500" : ""} duration-300 px-6 py-[.8rem]`}>ADDITIONAL
                                    INFORMATION</TabsTrigger>
                                <TabsTrigger onClick={() => handleSetTab("specification")} value="specification"
                                             className={`${tab === "specification" ? "border-b-4 border-primary-500" : ""} duration-300 px-6 py-[.8rem]`}>SPECIFICATION</TabsTrigger>
                                <TabsTrigger onClick={() => handleSetTab("review")} value="review"
                                             className={`${tab === "review" ? "border-b-4 border-primary-500" : ""} px-6 duration-300 py-[.8rem]`}>REVIEW</TabsTrigger>
                            </TabsList>
                            <TabsContent value="description" className={"py-8 px-6 text-sm"}>
                                <div className={"grid lg:grid-cols-4 md:grid-cols-3 gap-14"}>
                                    <div className={"col-span-2 vertical-spacing text-gray-600"}>
                                        <h3 className={"text-gray-900 font-bold"}>Description</h3>
                                        <p>
                                            The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or
                                            M1 Max chip
                                            — the first Apple silicon designed for pros — you get groundbreaking
                                            performance and
                                            amazing battery life. Add to that a stunning Liquid Retina XDR display, the
                                            best camera
                                            and audio ever in a Mac notebook, and all the ports you need. The first
                                            notebook of its
                                            kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance
                                            of the M1
                                            architecture to a whole new level for pro users.
                                        </p>
                                        <p>
                                            Even the most ambitious projects are easily handled with up to 10 CPU cores,
                                            up to 16
                                            GPU cores, a 16‑core Neural Engine, and dedicated encode and decode media
                                            engines that
                                            support H.264, HEVC, and ProRes codecs.
                                        </p>
                                    </div>
                                    <div className={"vertical-spacing"}>
                                        <h3 className={"font-bold"}>Feature</h3>
                                        <div className={"flex flex-col gap-2"}>
                                            <Feature value={"Free 1 Year Warranty"} icon={"fa-medal"}/>
                                            <Feature value={"Free 1 Year Warranty"} icon={"fa-truck-moving"}/>
                                            <Feature value={"Free 1 Year Warranty"} icon={"fa-handshake"}/>
                                            <Feature value={"Free 1 Year Warranty"} icon={"fa-headphones"}/>
                                            <Feature value={"Free 1 Year Warranty"} icon={"fa-credit-card"}/>
                                        </div>
                                    </div>
                                    <div className={"border-l-[1px] border-l-gray-100 pl-6 vertical-spacing"}>
                                        <h3 className={"text-gray-900 font-bold"}>Shipping Information</h3>
                                        <div className={"flex flex-col gap-2"}>
                                            <p>Courier: <span className={"text-gray-600"}>2-4 days, free shipping</span>
                                            </p>
                                            <p>Local Shipping: <span
                                                className={"text-gray-600"}>up to one week, $19.00</span></p>
                                            <p>UPS Ground Shipping: <span
                                                className={"text-gray-600"}>4-6 days, $29.00</span></p>
                                            <p>Uni shop Global Export: <span className={"text-gray-600"}>3-4 days, $39.00</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="additional-information" className={"py-8 px-6"}>Any Additional
                                Information about the
                                product</TabsContent>
                            <TabsContent value="specification" className={"py-8 px-6"}>Add your Product Specification
                                here.</TabsContent>
                            <TabsContent value="review" className={"py-8 px-6"}>Add product Reviews here</TabsContent>
                        </Tabs>
                    </div>
                </section>
                <Sales/>
            </>
        }

        </>
    )
}

export default Product