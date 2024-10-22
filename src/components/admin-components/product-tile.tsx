// @ts-nocheck

import { Button } from '../ui/button'
import { Card, CardContent, CardFooter } from '../ui/card'
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader, AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog.tsx'


function AdminProductTile ({
  product,
  handleEdit,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete
}) {
  const productImage = `http://${product?.product_image}`
  return (
    <Card className='w-full max-w-sm mx-auto'>
      <div>
        <div className='relative'>
          <img
            src={productImage}
            alt={product?.name}
            className='w-full h-[300px] object-cover rounded-t-lg'
          />
        </div>
        <CardContent>
          <h2 className='text-xl font-bold mb-2 mt-2'>{product?.name}</h2>
          <div className='flex justify-between items-center mb-2'>
            {product?.price > 0
              ? (
                <span className='font-medium'>{product?.price}ugx</span>
                )
              : null}
          </div>
        </CardContent>
        <CardFooter className='flex justify-between items-center'>
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true)
              setCurrentEditedId(product?._id)
              handleEdit(product?._id)
            }}
          >
            Edit
          </Button>


          <AlertDialog>
            <AlertDialogTrigger
              className='py-1 px-3 bg-red-500 text-white rounded-lg'
            >Delete
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your Category
                  ({product?.name})
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => handleDelete(product?._id)}
                >Continue
                </AlertDialogAction>
              </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialog>

        </CardFooter>
      </div>
    </Card>
  )
}

export default AdminProductTile
