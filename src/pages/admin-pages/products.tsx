// @ts-nocheck

import ProductImageUpload from '@/components/admin-components/image-upload.tsx'
import AdminProductTile from '@/components/admin-components/product-tile'
import CommonForm from '@/components/common/form'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import { addProductFormElements } from '@/config'
import {
  addNewProduct,
  deleteProduct,
  editProduct,
  fetchAllProducts
} from '@/store/admin/products-slice'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from '@/hooks/use-toast.ts'

const initialFormData = {
  image: null,
  name: '',
  description: '',
  category: '',
  brand: '',
  price: '',
  totalStock: '',
  averageReview: 0
}

function AdminProducts () {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false)
  const [formData, setFormData] = useState(initialFormData)
  const [imageFile, setImageFile] = useState(null)
  const [uploadedImageUrl, setUploadedImageUrl] = useState('')
  const [imageLoadingState, setImageLoadingState] = useState(false)
  const [currentEditedId, setCurrentEditedId] = useState(null)

  const { productList } = useSelector((state) => state.adminProducts)
  const dispatch = useDispatch()
  const { toast } = useToast()

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  function onSubmit (event) {
    event.preventDefault()

    currentEditedId !== null
      ? dispatch(
        editProduct({
          id: currentEditedId,
          formData
        })
      ).then((data) => {
        console.log(data, 'edit')

        if (data?.payload?.success) {
          dispatch(fetchAllProducts())
          setFormData(initialFormData)
          setOpenCreateProductsDialog(false)
          setCurrentEditedId(null)
        }
      })
      : dispatch(
        addNewProduct({
          ...formData,
          image: uploadedImageUrl
        })
      ).then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchAllProducts())
          setOpenCreateProductsDialog(false)
          setImageFile(null)
          setFormData(initialFormData)
          toast({
            title: 'Product add successfully'
          })
        }
      })
  }
console.log("Form Data: ", formData)
  function handleDelete (getCurrentProductId) {
    dispatch(deleteProduct(getCurrentProductId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts())
      }
    })
  }

  // function isFormValid () {
  //   return Object.keys(formData)
  //     .filter((currentKey) => currentKey !== 'averageReview')
  //     .map((key) => formData[key] !== '')
  //     .every((item) => item)
  // }

  return (
    <>
      <div className='mb-5 w-full flex justify-end'>
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>
      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {productList && productList.length > 0
          ? productList.map((productItem, index) => (
            <AdminProductTile
              key={index}
              setFormData={setFormData}
              setOpenCreateProductsDialog={setOpenCreateProductsDialog}
              setCurrentEditedId={setCurrentEditedId}
              product={productItem}
              handleDelete={handleDelete}
            />
          ))
          : <p>No Products fetched</p>}

      </div>
      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false)
          setCurrentEditedId(null)
          setFormData(initialFormData)
        }}
      >
        <SheetContent side='right' className='overflow-auto'>
          <SheetHeader>
            <SheetTitle>
              {currentEditedId !== null ? 'Edit Product' : 'Add New Product'}
            </SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoadingState={setImageLoadingState}
            imageLoadingState={imageLoadingState}
            isEditMode={currentEditedId !== null}
          />
          <div className='py-6'>
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText={currentEditedId !== null ? 'Edit' : 'Add'}
              formControls={addProductFormElements}
              // isBtnDisabled={!isFormValid()}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default AdminProducts
