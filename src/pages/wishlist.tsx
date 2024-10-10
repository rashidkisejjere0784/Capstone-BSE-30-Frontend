import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {products} from "@/assets/data.ts";
import Discount from "@/components/Discount.tsx";
import Button from "@/components/Button.tsx";
const WishlistPage = () => {

    const filteredProducts = products.filter((product: {whishlist: boolean}) => product.whishlist);
    return (
        <>
            <section className={"section my-8"}>
                <div className={"w-full border-[1px] border-gray-100 rounded-sm"}>

                    <h3 className={"p-6 text-lg font-bold"}>Wishlist</h3>
                    <Table className={"min-w-[37.5rem]"}>
                        <TableCaption className={"py-6"}>A list of your wishlist items</TableCaption>
                        <TableHeader>
                            <TableRow className={"bg-gray-50 px-6 py-2 border-y-2 border-y-gray-100"}>
                                <TableHead className="">PRODUCTS</TableHead>
                                <TableHead className={"pl-8"}>PRICE</TableHead>
                                <TableHead className={"pl-8"}>STOCK STATUS</TableHead>
                                <TableHead className="pl-8">ACTIONS</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                filteredProducts.map(({id,image, name, availability, price, discount}: {id: string; image: string; name: string; availability: string, price: string; discount: string})=>(
                                    <TableRow key={id}>
                                        <TableCell className={"max-w-96 pl-8"}>
                                            <div className={"flex gap-4 items-center"}>
                                                <div className={"h-16 w-16"}>
                                                    <img src={image} alt={"Item Image"} className={"block h-full w-full"}/>
                                                </div>
                                                <p className={"hidden md:block"}>{name}</p>
                                            </div>
                                        </TableCell>
                                        <TableCell className={"pl-8 text-center"}>
                                            <Discount price={price} discount={discount} discountPosition={"left"} priceColor={"text-gray-700 font-bold"}/>
                                        </TableCell>
                                        <TableCell className={"pl-8"}>
                                            <div>
                                                {

                                                    availability &&
                                                        availability !== "OUT OF STOCK" ?
                                                        <p className={"text-success-500"}>IN STOCK</p> :
                                                        <p className={"text-danger-500"}>OUT OF STOCK</p>
                                                }
                                            </div>
                                        </TableCell>
                                        <TableCell className={"pl-8"}>
                                            <div className={"flex gap-4 items-center"}>
                                                <div>
                                                    {
                                                        availability &&
                                                            availability !== "OUT OF STOCK" ?
                                                            <Button title={"ADD TO CART"} icon={"fa-opencart ml-4"} className={"mr-auto bg-primary-500 text-gray-00"}/> :
                                                            <Button title={"ADD TO CART"} icon={"fa-opencart ml-4"} className={"mr-auto bg-gray-300 text-gray-00 accent-muted cursor-default"}/>
                                                    }
                                                </div>
                                                <div><i className="fa-regular fa-circle-xmark text-gray-400 text-lg cursor-pointer hover:text-danger-500"></i></div>
                                            </div>

                                        </TableCell>
                                    </TableRow>
                                    )
                                )}

                        </TableBody>
                    </Table>

                </div>
            </section>
        </>
    )
}
export default WishlistPage