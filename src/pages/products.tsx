import {Link} from "react-router-dom";
import {useState} from "react";
import { Slider } from "@/components/ui/slider";
import {popularTags,products} from "@/assets/data.ts";
import watch from "/images/smart-watches.png"
import SearchInput from "@/components/SearchInput.tsx";
import ProductCard from "@/components/ProductCard.tsx";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";

const Categories = [
    "Electronic Devices", "Computer & Laptop", "Computer Accessories",
    "Smart Phone", "HeadPhone", "Mobile Accessories", "Gaming Console",
    "Camera & Photo", "TV & Homes Appliances", "Watches & Accessories",
    "GPS & Navigation", "Wearable Technology"
]

const prices = [
    "App Price","Under $20", "$25 to $100", "$100 to $300",
    "$300 to $500", "$500 to $ 1,000", "$1,000 to $10,000"
]
const Brands = [
    "Apple", "Google", "Microsoft", "Dell", "Symphony",
    "Sony", "LG", "On ePlus", "Google", "Samsung", "HP",
    "Xiaomi", "Panasonic", "Intel", "Techno"
]
const Products = ()=>{
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPrice, setSelectedPrice] = useState("");
    const [checkedBrands, setCheckedBrands] = useState<string[]>([]);


    const handleBrandChange = (brand: string) => {
        setCheckedBrands(prev =>
            prev.includes(brand)
                ? prev.filter(b => b !== brand)
                : [...prev, brand]
        );
    }
    const handlePriceChange = (price:string)=>{
        setSelectedPrice(price);
    }


    const handleRadioChange = (category: string) => {
        setSelectedCategory(category);
    };
    return (
        <>
            <div className={"section py-5 bg-gray-50"}>
                <ul className={"flex gap-4 items-center text-gray-600 text-sm"}>

                    <Link to={"/"} className={"flex duration-150 gap-4 items-center hover:text-secondary-500"}>
                        <i className="fa-solid fa-house text-base"></i>
                        <li>Home <i className="ml-2 fa-solid fa-angle-right"></i></li>
                    </Link>
                    <Link to={"/"}>
                        <li>Shop <i className="ml-2 fa-solid fa-angle-right"></i></li>
                    </Link>
                    <Link to={"/products"}>
                        <li className=" text-secondary-500">Products</li>
                    </Link>

                </ul>
            </div>
        {/*    */}
            <section className={"section py-8"}>
                <div className={"lg:grid lg:grid-cols-12 lg:gap-6"}>
                    <div className={"col-span-3"}>
                        <div className={"flex gap-8 flex-wrap lg:block"}>
                            <div className={"border-b-[1px] pb-8 w-full"}>
                                <h3 className={"mb-4 text-gray-900 font-medium"}>CATEGORY</h3>
                                <div className={"flex flex-col gap-4"}>
                                    {
                                        Categories.map((category, index) => (
                                            <label
                                                key={index}
                                                className={`${selectedCategory === category ? 'text-gray-900 font-medium' : 'text-gray-700'} text-sm flex items-center gap-4`}>
                                                <input
                                                    checked={selectedCategory === category}
                                                    onChange={() => handleRadioChange(category)}
                                                    className={"relative h-5 w-5 appearance-none rounded-full border-[1.9px] border-solid border-gray-200 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary-500 checked:after:bg-gray-00 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] checked:border-8 hover:before:shadow-primary-200 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-primary-500 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary-500 checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right"}
                                                    type={"radio"} value={category} name={"category"}/>
                                                {category}
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={"border-b-[1px] pb-8 w-full"}>
                                <h3 className={"text-gray-900 font-medium mt-6 mb-4"}>PRICE RANGE</h3>
                                <div className={"mt-4 mb-6"}>
                                    <Slider defaultValue={[33]} max={100} step={1}/>
                                </div>
                                <div className={"grid grid-cols-2 gap-4 items-center my-2"}>
                                    <div className={"border border-gray-200 py-2 px-4 text-gray-600"}>Mini Price</div>
                                    <div className={"border border-gray-200 py-2 px-4 text-gray-600"}>Max Price</div>
                                </div>
                                <div className={"flex flex-col gap-4 my-4"}>
                                    {
                                        prices.map((price: string, index) => (
                                            <label
                                                key={index}
                                                className={`${selectedPrice === price ? 'text-gray-900 font-medium' : 'text-gray-700'} text-sm flex items-center gap-4`}>
                                                <input
                                                    checked={selectedPrice === price}
                                                    onChange={() => handlePriceChange(price)}
                                                    className={"relative h-5 w-5 appearance-none rounded-full border-[1.9px] border-solid border-gray-200 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary-500 checked:after:bg-gray-00 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] checked:border-8 hover:before:shadow-primary-200 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-primary-500 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary-500 checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right"}
                                                    type={"checkbox"} value={price} name={"price"}/>
                                                {price}
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>
                            {/*    */}
                            <div className={"border-b-[1px] pb-8 w-full"}>
                                <h3 className={"text-gray-900 font-medium mt-6 mb-4"}>POPULAR BRANDS</h3>
                                <div className={"grid grid-cols-2 gap-4"}>
                                    {
                                        Brands.map((brand, index) => (
                                            <label
                                                key={index}
                                                className={`text-sm flex items-center gap-4 ${checkedBrands.includes(brand) ? 'text-gray-900' : 'text-gray-700'}`}>
                                                <input
                                                    onChange={() => handleBrandChange(brand)}
                                                    className={"h-5 w-5 rounded-md"}
                                                    type={"checkbox"} value={brand} name={brand}/>
                                                {brand}
                                            </label>
                                        ))
                                    }

                                </div>
                            </div>

                        </div>
                        {/*    */}
                        <div className={"xl:border-b-[1px] pb-8"}>
                            <h3 className={"text-gray-900 font-medium mt-6 mb-4"}>POPULAR TAGS</h3>
                            <div className="flex gap-2 flex-wrap font-bold text-sm">
                                {
                                    popularTags.map(({name, link}, index) => (
                                        <Link key={index} to={link}
                                              className="rounded-sm border-[1px] text-gray-900 border-gray-100 w-fit p-2 hover:text-primary-500 focus:text-primary-500 hover:bg-primary-50 focus:border-primary-500 hover:border-primary-500 focus:bg-primary-50">
                                            {name}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        {/**/}
                        <div
                            className={"p-6 hidden border-4 border-primary-100 text-center xl:flex xl:flex-col xl:gap-2"}>
                            <div className={"mx-auto w-fit"}>
                                <img src={watch} alt={"Smart Watches"}/>
                            </div>
                            <h3 className={"text-h2 text-gray-900 font-bold"}>Watches</h3>
                            <p className={"text-danger-600 text-sm font-medium"}>SERIES 7</p>
                            <div className={"text-2xl font-medium"}>
                                <p className={"mb-2"}>Heavy on Features.</p>
                                <p>Light on Price</p>
                            </div>
                            <div className={"flex gap-4 items-center flex-wrap w-fit mx-auto my-4"}>
                                <p className={"text-sm"}>Only for:</p>
                                <button
                                    className="block text-xs left-4 top-4 ml-auto z-10 bg-warning-400 text-gray-900 font-bold rounded-sm px-4 py-2">
                                    $299 USD
                                </button>
                            </div>
                            <button
                                className={`flex items-center justify-center rounded-sm text-gray-00 font-bold bg-primary-500 px-6 py-[.7rem] gap-4 mb-4`}>
                                <span><i className="fa-brands fa-opencart"></i></span>
                                <a href={"#"}>ADD TO CART</a>
                            </button>
                            <button
                                className={`flex items-center justify-center rounded-sm text-primary-500 font-bold bg-primary-50 border-2 border-primary-500 px-6 py-[.7rem] gap-4`}>
                                <a href={"#"}>VIEW DETAILS</a>
                                <span><i className="fa-solid fa-arrow-right"/></span>
                            </button>
                        </div>
                    </div>


                    {/*Right section*/}
                    <div className={"col-span-9"}>
                        <div>
                            <div className={"flex flex-wrap gap-4 items-center justify-between"}>
                                <SearchInput maxWidth={"w-[25rem]"} className={"border-[1px] border-gray-100"}/>

                                <div className={"flex items-center flex-wrap"}>
                                    <p className={"text-sm"}>Sort by:</p>
                                    <button
                                        className="block border-[1px] border-gray-100 text-sm ml-6 text-gray-700 rounded-sm px-4 py-2">
                                        Most Popular
                                        <i className="ml-4 fa-solid fa-angle-down"></i>
                                    </button>
                                </div>
                            </div>
                            {/**/}
                            <div className={"py-[.8rem] px-6 my-4 rounded-md bg-gray-50"}>
                                <ul className={"flex gap-4 items-center text-sm"}>

                                    <button className={"text-gray-600 flex duration-150 gap-4 items-center"}>
                                        <li>Active Filters:</li>
                                    </button>
                                    <button>
                                        <li className={"text-gray-900 font-medium"}>Electronics Devices <i
                                            className="text-gray-600 ml-2 fa-solid fa-xmark"></i></li>
                                    </button>
                                    <button>
                                        <li className={"text-gray-900 font-medium"}>5 Star Rating <i
                                            className="text-gray-600 ml-2 fa-solid fa-xmark"></i></li>
                                    </button>

                                </ul>
                            </div>
                        </div>
                        <div className={"my-8"}>
                            <div
                                className={"grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-rows-2 gap-4 flex-grow"}>
                                {/*    Products Card*/}
                                {
                                    products.slice(0, 32).map(({id, image, name, price, deals, discount}) => (
                                        <ProductCard key={id} id={id} src={image} name={name} amount={price}
                                                     deal={deals}
                                                     className={"max-h-[20rem] overflow-hidden"} discount={discount}/>
                                    ))
                                }
                            </div>
                        </div>

                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="/products"/>
                                </PaginationItem>
                                <div className={"flex items-center max-w-[30rem] overflow-hidden"}>
                                    {
                                        products.map((_, index) => (
                                            <PaginationItem key={index}>
                                                <PaginationLink href="#">{index}</PaginationLink>
                                        </PaginationItem>
                                    ))
                                }
                            </div>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">{products.length-1}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Products