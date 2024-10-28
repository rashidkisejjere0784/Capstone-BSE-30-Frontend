// @ts-nocheck

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import Discount from "@/components/Discount.tsx";
import { calculateDiscount, calculateSubTotal, calculateTotal } from '@/assets/utils.ts'
import Button from "@/components/Button.tsx";
import { useDispatch, useSelector } from 'react-redux'
import { toast } from '@/hooks/use-toast.ts'
import { deleteCartItem } from '@/store/shop/cartSlice/index.ts'
import { TiDeleteOutline } from 'react-icons/ti'
import { fetchAllCart } from '@/store/shop/cartSlice'
import { useParams } from 'react-router-dom'

const Cart = ()=>{
    const { cartItems } = useSelector((state) => state.shopCart)
    const dispatch = useDispatch()

    const cartProducts = cartItems?.products?.length > 0
      ? Object.values(
        cartItems.products.reduce((productMap, item) => {
            const productId = item.product._id;
            const totalQuantity = item.cartItem.quantity;
            if (productMap[productId]) {
                productMap[productId].quantity += totalQuantity;
            } else {
                productMap[productId] = {
                    ...item.product,
                    quantity: totalQuantity,
                };
            }
            return productMap;
        }, {})
      )
      : [];


    // cartItems.products.forEach((item) => {
    //     const productId = item.product._id;
    //     const totalQuantity = item.cartItem.quantity;
    //     if (productMap[productId]) {
    //         productMap[productId].quantity += totalQuantity;
    //     } else {
    //         productMap[productId] = {
    //             ...item.product,
    //             quantity: totalQuantity,
    //         };
    //     }
    // });
    // const cartProducts = Object.values(productMap);

    const handleRemoveFromCart = (cartId) => {
        dispatch(deleteCartItem(cartId)).then((data) => {
            if (data?.payload?.success) {
                toast({
                    title: 'Product removed from Cart List Successfully',
                    description: data?.payload?.message,
                    variant: 'success'
                })
                dispatch(fetchAllCart())
            } else {
                toast({
                    title: 'Failed to remove Product from Cart List',
                    description: data?.payload?.message,
                    variant: 'destructive'
                })
            }
        })
    }
    const subTotal = calculateSubTotal(cartProducts);
    const discount = calculateDiscount(cartProducts);
    const total = calculateTotal(cartProducts);

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
                                    cartItems ?
                                      cartProducts.map(({_id, product_image, name, price, discount, quantity}: {
                                            _id: string;
                                            product_image: string;
                                            name: string;
                                            discount: number;
                                            price: string;
                                            quantity: number
                                        }) => (
                                          <TableRow key={_id}>
                                              <TableCell className={"max-w-96 pl-8"}>
                                                  <div className={"flex gap-4 items-center"}>
                                                      <button
                                                        onClick={()=>handleRemoveFromCart(_id)}
                                                        className={"flex items-center justify-center text-gray-400 hover:border-danger-500 w-5 h-5 rounded-full hover:text-danger-500"}>
                                                          <TiDeleteOutline className={"text-2xl"} />
                                                      </button>
                                                      <div className={"h-16 w-16"}>
                                                          <img src={`http://${product_image}`} alt={"Item Image"}
                                                               className={"block h-full w-full"}/>
                                                      </div>
                                                      <p className={"hidden md:block"}>{name}</p>
                                                  </div>
                                              </TableCell>
                                              <TableCell className={"pl-8"}>
                                                  <Discount price={price} discount={discount} discountPosition={"left"}
                                                            priceColor={"text-gray-700 font-bold"}/>
                                              </TableCell>
                                              <TableCell className={"pl-8 text-center"}>
                                                  {quantity}
                                              </TableCell>
                                              <TableCell className={"pl-8"}>
                                                  <p>{price * quantity}</p>
                                              </TableCell>
                                          </TableRow>
                                        )
                                      )
                                      :
                                      <TableRow className={"text-2xl font-medium"}>No Products In cart</TableRow>
                                }
                            </TableBody>
                        </Table>
                    </div>

                    <div className={"lg:col-span-2 lg:mt-0 mt-6"}>
                        <div className={"border-[1px] border-gray-100 p-6 rounded-lg"}>
                            <h3 className={"font-medium text-2xl"}>Cart Tools</h3>
                            <div className={"grid grid-cols-2 py-6 border-b-[1px] border-gray-100 text-sm"}>
                                <div className={"vertical-spacing"}>
                                    <p className={"text-gray-600"}>Sub-total</p>
                                    <p className={"text-gray-600"}>Discount</p>
                                </div>
                                <div className={"font-medium text-end vertical-spacing"}>
                                    <p>{subTotal} ugx</p>
                                    <p>{discount} ugx</p>
                                </div>
                            </div>
                            <div className={"grid grid-cols-2 text-sm font-medium py-6"}>
                                <div>
                                    <p>Total</p>
                                </div>
                                <div className={"text-end"}>
                                    {total} ugx
                                </div>
                            </div>
                            <a href={"/checkout"} className={"block text-gray-00 bg-primary-500 rounded-lg text-center hover:bg-primary-200 font-medium py-4 px-8 w-full"}>Proceed to Checkout <i
                                className="fa-solid fa-arrow-right-long ml-4"></i></a>
                        </div>
                    </div>
                </div>

            </section>
        </>
)
}

export default Cart