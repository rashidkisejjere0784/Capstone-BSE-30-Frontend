import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import Discount from "@/components/Discount.tsx";
import {products} from "@/assets/data.ts";
import CartItems from "@/components/cart/CartItems.tsx";
import {extractNum} from "@/assets/utils.ts";
import Button from "@/components/Button.tsx";

const Cart = ()=>{
    const filteredProducts = products.filter((product: { cart: boolean; }) => product.cart);

    return (
        <>
            <section className={"section my-8"}>
                <div className={"lg:grid lg:grid-cols-6 lg:gap-6"}>
                    <div className={"lg:col-span-4"}>
                        <Table className={"min-w-[37.5rem]"}>
                            <TableCaption className={"py-6"}>Shopping Cart</TableCaption>
                            <TableHeader>
                                <TableRow className={"bg-gray-50 px-6 py-2 border-y-2 border-y-gray-100"}>
                                    <TableHead className="">PRODUCTS</TableHead>
                                    <TableHead className={"pl-8"}>PRICE</TableHead>
                                    <TableHead className={"pl-8"}>Quantity</TableHead>
                                    <TableHead className="pl-8">Sub Total</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    filteredProducts.map(({id,image, name, price, discount, quantity}: {
                                            id: string;
                                            image: string;
                                            name: string;
                                            discount: string;
                                            price: string;
                                            quantity: number
                                        }) => (
                                            <TableRow key={id}>
                                                <TableCell className={"max-w-96 pl-8"}>
                                                    <div className={"flex gap-4 items-center"}>
                                                        <button
                                                            className={"flex items-center justify-center border-[1px] border-gray-400 text-gray-400 hover:border-danger-500 w-5 h-5 rounded-full hover:text-danger-500"}>
                                                            <i className="fa-solid fa-xmark"></i></button>
                                                        <div className={"h-16 w-16"}>
                                                            <img src={image} alt={"Item Image"}
                                                                 className={"block h-full w-full"}/>
                                                        </div>
                                                        <p className={"hidden md:block"}>{name}</p>
                                                    </div>
                                                </TableCell>
                                                <TableCell className={"pl-8"}>
                                                    <Discount price={price} discount={discount} discountPosition={"left"}
                                                              priceColor={"text-gray-700 font-bold"}/>
                                                </TableCell>
                                                <TableCell className={"pl-8"}>
                                                    <CartItems qty={quantity}/>
                                                </TableCell>
                                                <TableCell className={"pl-8"}>
                                                    <p>{extractNum(price) * quantity}</p>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    )}
                            </TableBody>
                        </Table>
                    </div>

                    <div className={"lg:col-span-2 lg:mt-0 mt-6"}>
                        <div className={"border-[1px] border-gray-100 p-6 rounded-lg"}>
                            <h3 className={"font-medium text-2xl"}>Cart Tools</h3>
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
                            <a href={"/checkout"} className={"block text-gray-00 bg-primary-500 rounded-lg text-center hover:bg-primary-200 font-medium py-4 px-8 w-full"}>Proceed to Checkout <i
                                className="fa-solid fa-arrow-right-long ml-4"></i></a>
                        </div>
                        <div className={"border-[1px] border-gray-100 rounded-lg mt-6"}>
                            <h3 className={"font-medium text-2xl p-4 border-b-[1px] border-b-400"}>Coupon Code</h3>
                            <form className={"p-6"}>
                                <div
                                    className={`w-full mb-6 bg-white rounded-sm py-[.9rem] px-6 flex gap-4 justify-between items-center border border-gray-100`}>

                                    <input
                                        id="coupon"
                                        type="text"
                                        className="w-full text-gray-500 ring-0 border-0 outline-none focus:outline-none"
                                        placeholder="coupon code"
                                    />
                                </div>

                                <Button title={"APPLY COUPON"}
                                        className={"bg-secondary-500 text-gray-00 font-bold rounded-lg text-center"}/>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>
)
}

export default Cart