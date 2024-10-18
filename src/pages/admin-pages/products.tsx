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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  addNewProduct,
  deleteProduct,
  editProduct,
  fetchAllProducts
} from '@/store/admin/products-slice'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from '@/hooks/use-toast.ts'
import { getBrandItems, getCategoryItems } from '@/store/common-slice'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { productFormSchema } from '@/assets/types.ts'
import { Textarea } from '@/components/ui/textarea.tsx'
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function AdminProducts () {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false)
  const [formData, setFormData] = useState(initialFormData)
  const [imageFile, setImageFile] = useState(null)
  const [uploadedImageUrl, setUploadedImageUrl] = useState('')
  const [imageLoadingState, setImageLoadingState] = useState(false)
  const [currentEditedId, setCurrentEditedId] = useState(null)
  const { productList } = useSelector((state) => state.adminProducts)
  const { brandList } = useSelector((state) => state.commonFeature)
  const { categoryList } = useSelector((state) => state.commonFeature)
  const dispatch = useDispatch()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof productFormSchema>>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: '',
      price: '0',
      categoryId: '',
      description: '',
      discount: '',
      availability: '',
      quantity: '0',
      brandId: '',
      colors: '',
      rating: '0',
    },
  })
  useEffect(() => {
    dispatch(getCategoryItems())
    dispatch(getBrandItems())
    dispatch(fetchAllProducts()).then((data) => {

    })
  }, [dispatch])


  const submitForm = (values: z.infer<typeof productFormSchema>)=> {

    values.availability = values.availability === 'true'
    values.price = Number(values.price)
    values.discount = Number(values.discount)
    values.quantity = Number(values.quantity)
    values.rating = Number(values.rating)


    console.log(values)

    dispatch(addNewProduct(values)).then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchAllProducts())
          setOpenCreateProductsDialog(false)
          toast({
            title: 'Product add successfully'
          })
        }
      })
  }

  // function onSubmit (event) {
  //   event.preventDefault()
  //
  //   currentEditedId !== null
  //     ? dispatch(
  //       editProduct({
  //         id: currentEditedId,
  //         formData
  //       })
  //     ).then((data) => {
  //       if (data?.payload?.success) {
  //         dispatch(fetchAllProducts())
  //         setFormData(initialFormData)
  //         setOpenCreateProductsDialog(false)
  //         setCurrentEditedId(null)
  //       }
  //     })
  //     : dispatch(
  //       addNewProduct({
  //         ...formData,
  //         image: uploadedImageUrl
  //       })
  //     ).then((data) => {
  //       if (data?.payload?.success) {
  //         dispatch(fetchAllProducts())
  //         setOpenCreateProductsDialog(false)
  //         setImageFile(null)
  //         setFormData(initialFormData)
  //         toast({
  //           title: 'Product add successfully'
  //         })
  //       }
  //     })
  // }

  function handleDelete (getCurrentProductId) {
    dispatch(deleteProduct(getCurrentProductId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts())
      }
    })
  }

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
          {/* <ProductImageUpload */}
          {/*  imageFile={imageFile} */}
          {/*  setImageFile={setImageFile} */}
          {/*  uploadedImageUrl={uploadedImageUrl} */}
          {/*  setUploadedImageUrl={setUploadedImageUrl} */}
          {/*  setImageLoadingState={setImageLoadingState} */}
          {/*  imageLoadingState={imageLoadingState} */}
          {/*  isEditMode={currentEditedId !== null} */}
          {/* /> */}
          <div className='py-6'>
          {/*  Form elements */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Product name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input type={"number"} placeholder="Price" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/**/}
                <FormField
                  control={form.control}
                  name="categoryId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Product Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                           {
                             categoryList.map((category)=>(
                               <SelectItem value={category?._id}>{category?.name}</SelectItem>
                             ))
                           }
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/**/}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea rows={5} placeholder="Product Description" {...field}></Textarea>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/**/}
                <FormField
                  control={form.control}
                  name="discount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discount</FormLabel>
                      <FormControl>
                        <Input type={"number"} placeholder="Discount" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/**/}
                <FormField
                  control={form.control}
                  name="availability"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Availabilty</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Availability" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={"true"}>True</SelectItem>
                          <SelectItem value={"false"}>False</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/**/}
                <FormField
                  control={form.control}
                  name="qunatity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input placeholder="Quantity" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/**/}
                <FormField
                  control={form.control}
                  name="brandId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Brand</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Product Brand" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {
                            brandList.map((brand)=>(
                              <SelectItem value={brand?._id}>{brand?.name}</SelectItem>
                            ))
                          }
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/**/}
                <FormField
                  control={form.control}
                  name="colors"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Colors</FormLabel>
                      <FormControl>
                        <Input placeholder="Color" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/**/}
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rating</FormLabel>
                      <FormControl>
                        <Input type={'number'} placeholder="Product Rating" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button className={"py-2 px-5 bg-blue-500 text-white w-full rounded-lg"} type="submit">Submit</button>
              </form>
            </Form>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default AdminProducts
