// @ts-nocheck
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import Discount from '@/components/Discount.tsx'
import Button from '@/components/Button.tsx'
import { useSelector, useDispatch } from 'react-redux'
import { deleteWishListItem, getWishListItems } from '@/store/shop/wishlist-slice'
import { TiDeleteOutline } from 'react-icons/ti'
import { toast } from '@/hooks/use-toast.ts'
import { getWishListProducts } from '@/assets/utils.ts'
import { Link, useNavigate } from 'react-router-dom'
import { fetchAllProducts } from '@/store/shop/products-slice'

const WishlistPage = () => {
  const { wishList } = useSelector((state) => state.shopWishList)
  const { productList } = useSelector((state) => state.shopProducts)
  const dispatch = useDispatch()
  const wishListProducts = getWishListProducts(productList, wishList)
  const navigate = useNavigate()

  const handleRemoveFromWishList = (wishListId) => {
    dispatch(deleteWishListItem(wishListId)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: 'Product removed from Wishlist Successfully',
          description: data?.payload?.message,
          variant: 'success'
        })
        dispatch(getWishListItems())
        dispatch(fetchAllProducts())
        navigate(0)
      } else {
        toast({
          title: 'Failed to remove Product from Wishlist',
          description: data?.payload?.message,
          variant: 'destructive'
        })
      }
    })
  }
  const getWishListId = (id) => {
    return wishList.find(item => item.product_id === id)._id
  }
  return (
    <>
      <section className='section my-8'>
        <div className='w-full border-[1px] border-gray-100 rounded-sm'>
          <h3 className='p-6 text-lg font-bold'>Wishlist</h3>
          <Table className='min-w-[42.5rem]'>
            <TableCaption className='py-6'>
              A list of your wishlist items
            </TableCaption>
            <TableHeader>
              <TableRow className='bg-gray-50 px-6 py-2 border-y-2 border-y-gray-100'>
                <TableHead className=''>PRODUCTS</TableHead>
                <TableHead className='pl-8'>PRICE</TableHead>
                <TableHead className='pl-8'>STOCK STATUS</TableHead>
                <TableHead className='pl-8'>ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                wishListProducts.map(
                  ({
                    _id,
                    name,
                    discount,
                    price,
                    availability,
                    product_image
                  }) => (
                    <TableRow key={_id}>
                      <TableCell className='max-w-96 pl-8'>
                        <div className='flex gap-4 items-center'>
                          <button
                            onClick={() =>
                              handleRemoveFromWishList(getWishListId(_id))}
                            className='text-2xl hover:text-red-500 duration-300'
                          >
                            <TiDeleteOutline />
                          </button>
                          <div className='h-16 w-16'>
                            <img
                              src={`${product_image}`}
                              alt={name}
                              className='block h-full w-full object-cover'
                            />
                          </div>
                          <p className='hidden md:block'>{name}</p>
                        </div>
                      </TableCell>
                      <TableCell className='pl-8 text-center'>
                        <Discount
                          price={price}
                          discount={discount}
                          discountPosition='left'
                          priceColor='text-gray-700 font-bold'
                        />
                      </TableCell>
                      <TableCell className='pl-8'>
                        <div>
                          {availability
                            ? (
                              <p className='text-success-500'>IN STOCK</p>
                              )
                            : (
                              <p className='text-danger-500'>OUT OF STOCK</p>
                              )}
                        </div>
                      </TableCell>
                      <TableCell className='pl-8'>
                        <div className='flex gap-4 items-center'>
                          <div>
                            {availability
                              ? (
                                <Link
                                  to={`/product/${_id}`}
                                  className='mr-auto bg-primary-500 text-gray-00 ml-auto z-10 font-bold rounded-sm px-4 py-2'
                                >
                                  ADD TO CART
                                  <i className='fa-brands fa-opencart ml-4' />
                                </Link>
                                )
                              : (
                                <Button
                                  title='ADD TO CART'
                                  icon='fa-opencart ml-4'
                                  className='mr-auto bg-gray-300 text-gray-00 accent-muted cursor-defauADD TO CARTlt'
                                />
                                )}
                          </div>
                          <div>
                            <i className='fa-regular fa-circle-xmark text-gray-400 text-lg cursor-pointer hover:text-danger-500' />
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                )
              }
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  )
}
export default WishlistPage
