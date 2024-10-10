import {Link} from "react-router-dom";
import Input from "@/components/Input.tsx";
import {products} from "@/assets/data.ts";
import {FaAngleRight, FaHome} from "react-icons/fa";

const CheckoutPage = () => {
    const filteredProducts = products.filter((product: { cart: boolean; }) => product.cart);

    return (
        <>
            <div className={"section py-5 bg-gray-50"}>
                <ul className={"flex gap-4 items-center text-gray-600 text-sm"}>

                    <Link to={"/"} className={"flex duration-150 gap-4 items-center hover:text-secondary-500"}>
                        <FaHome className={"text-xl"} />
                        <li className={"flex items-center gap-2"}>Home <FaAngleRight /></li>
                    </Link>
                    <Link to={"/cart"}>
                        <li className={"flex items-center gap-2"}>Shopping Cart <FaAngleRight /></li>
                    </Link>
                    <Link to={"/checkout"}>
                        <li className=" text-secondary-500">Checkout</li>
                    </Link>

                </ul>
            </div>

            <section className={"section my-8"}>
                <form className={"lg:grid lg:grid-cols-5 lg:gap-8"}>
                    <div className={"lg:col-span-3"}>
                        <div className={"vertical-spacing"}>
                            <h3 className={"mb-4 font-medium text-2xl"}>Billing Information</h3>
                            <div className={"grid md:grid-cols-2 gap-4"}>
                                <div className={"vertical-spacing"}>
                                    <p>User name</p>
                                    <div className={"grid sm:grid-cols-2 gap-4"}>
                                        <Input placeHolder={"First Name"} type={"text"}/>
                                        <Input placeHolder={"Last Name"} type={"text"}/>
                                    </div>
                                </div>
                                <div className={"vertical-spacing"}>
                                    <p>Company Name <span className={"text-gray-600"}>(Optional)</span></p>
                                    <Input  type={"text"} placeHolder={"company Name"}/>
                                </div>
                            </div>
                            <div className={"vertical-spacing"}>
                                <p>Address</p>
                                <Input type={"text"} placeHolder={"current address"}/>
                            </div>
                            <div className={"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4"}>
                                <div className={"vertical-spacing"}>
                                    <p>Country</p>
                                    <Input/>
                                </div>
                                <div className={"vertical-spacing"}>
                                    <p>Region/State</p>
                                    <Input/>
                                </div>
                                <div className={"vertical-spacing"}>
                                    <p>City</p>
                                    <Input/>
                                </div>
                                <div className={"vertical-spacing"}>
                                    <p>Zip Code</p>
                                    <Input placeHolder={"zip"}/>
                                </div>
                            </div>
                            <div className={"grid sm:grid-cols-2 gap-4"}>
                                <div className={"vertical-spacing"}>
                                    <p>Email</p>
                                    <Input type={"email"} placeHolder={"example@gmail.com"}/>
                                </div>
                                <div className={"vertical-spacing"}>
                                    <p>Phone Number</p>
                                    <Input type={"number"}/>
                                </div>
                            </div>
                            <div>
                                <label className={"flex gap-4 items-center"}>
                                    <input type={"checkbox"} name={"unique-address"} className={"w-5 h-5"}/>
                                    Ship into different address
                                </label>
                            </div>
                            <div className={"rounded-lg border-[1px] border-gray-100"}>
                                <h3 className={"p-4 border-b-[1px] border-b-gray-100 font-medium text-2xl"}>Payment Option</h3>
                                <div className={"p-4 grid grid-cols-2 gap-4 border-b-[1px] border-b-gray-100"}>
                                    <div className={"vertical-spacing"}>
                                        <p className={"text-3xl text-primary-500 w-fit mx-auto"}>$</p>
                                        <p className={"w-fit mx-auto"}>Cash On Delivery</p>
                                        <input type={"radio"} className={"h-5 w-5 mx-auto"} name={"cash"}/>
                                    </div>
                                    <div className={"vertical-spacing"}>
                                        <p className={"text-3xl text-primary-500 w-fit mx-auto"}><i
                                            className="fa-regular fa-credit-card"></i></p>
                                        <p className={"w-fit mx-auto"}>Debit/Credit Card</p>
                                        <input type={"radio"} checked={true} className={"h-5 w-5 mx-auto"} name={"cash"}/>
                                    </div>
                                </div>
                                <div className={"p-4"}>
                                    <div>
                                        <div className={"vertical-spacing"}>
                                            <p>Name on Card</p>
                                            <Input placeHolder={"Name"} type={"text"}/>
                                        </div>
                                        <div className={"vertical-spacing"}>
                                            <p>Name on Card</p>
                                            <Input placeHolder={"card Number"} type={"number"} />
                                        </div>
                                        <div className={"grid sm:grid-cols-2 gap-4"}>

                                            <div className={"vertical-spacing"}>
                                                <p>Expiry Date</p>
                                                <Input placeHolder={"card Number"} type={"date"}/>
                                            </div>

                                            <div className={"vertical-spacing"}>
                                                <p>CVC</p>
                                                <Input placeHolder={"card Number"} type={"number"}/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"lg:col-span-2 p-6 lg:mt-0 mt-8 border-[1px] h-fit border-gray-100"}>
                        <h3 className={"p-4 mb-4 font-medium text-2xl"}>Order Summary</h3>
                        <div className={"vertical-spacing"}>


                            {
                                filteredProducts.map(({id,image, name, price, quantity}: {
                                    id: string;
                                    image: string;
                                    name: string;
                                    price: string;
                                    quantity: number
                                }) => (

                                    <div key={id} className={"flex gap-4 items-center"}>
                                        <button
                                            className={"flex items-center justify-center border-[1px] border-gray-400 text-gray-400 hover:border-danger-500 w-5 h-5 rounded-full hover:text-danger-500"}>
                                            <i className="fa-solid fa-xmark"></i></button>
                                        <div className={"h-16 w-16"}>
                                            <img src={image} alt={"Item Image"}
                                                 className={"block h-full w-full"}/>
                                        </div>
                                        <div>
                                            <p>{name}</p>
                                            <p className={"text-gray-600 text-sm"}>{quantity} x <span
                                                className={"text-secondary-500"}>{price}</span></p>
                                        </div>
                                    </div>

                                ))
                            }
                            </div>

                        <div  className={"mt-6"}>
                            <div className={"grid grid-cols-2 py-6 border-b-[1px] border-gray-100 text-sm"}>
                                <div className={"vertical-spacing"}>
                                    <p className={"text-gray-600"}>Sub-total</p>
                                    <p className={"text-gray-600"}>Shipping</p>
                                    <p className={"text-gray-600"}>Discount</p>
                                    <p className={"text-gray-600"}>Tax</p>
                                </div>
                                <div className={"font-medium text-end vertical-spacing"}>
                                    <p>$320</p>
                                    <p>Free</p>
                                    <p>$24</p>
                                    <p>$66.99</p>
                                </div>
                            </div>
                            <div className={"grid grid-cols-2 text-sm font-medium py-6"}>
                                <div>
                                    <p>Total</p>
                                </div>
                                <div className={"text-end"}>
                                    $357.99 USD
                                </div>
                            </div>
                            <button type={"submit"}
                                    className={"block text-gray-00 bg-primary-500 rounded-lg text-center hover:bg-primary-200 font-medium py-4 px-8 w-full"}>
                                Place Order
                                <i className="fa-solid fa-truck-fast ml-4"></i>
                            </button>

                        </div>
                    </div>
                </form>


            </section>
        </>
    )
}
export default CheckoutPage