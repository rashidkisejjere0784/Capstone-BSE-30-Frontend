// @ts-nocheck

import { Button } from '../ui/button'
import { Card, CardContent, CardFooter } from '../ui/card'

function AdminProductTile ({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete
}) {
  return (
    <Card className='w-full max-w-sm mx-auto'>
      <div>
        <div className='relative'>
          <img
            src={product?.image}
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
              setFormData(product)
            }}
          >
            Edit
          </Button>
          <Button onClick={() => handleDelete(product?._id)}>Delete</Button>
        </CardFooter>
      </div>
    </Card>
  )
}

export default AdminProductTile
