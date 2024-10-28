// @ts-nocheck
import AdminProductTile from '@/components/admin-components/product-tile'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import {
  deleteProduct,
  editProduct,
  fetchAllProducts
} from '@/store/admin/products-slice'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from '@/hooks/use-toast.ts'
import { getBrandItems, getCategoryItems } from '@/store/common-slice'
import axios from 'axios'
import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react'

const SERVER = import.meta.env.VITE_SERVER;

const ADD_NEW_PRODUCT_API = `${SERVER}/api/product/add`

function AdminProducts () {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false)
  const [currentEditedId, setCurrentEditedId] = useState(null)
  const { productList } = useSelector((state) => state.adminProducts)
  const { brandList } = useSelector((state) => state.commonFeature)
  const { categoryList } = useSelector((state) => state.commonFeature)
  const dispatch = useDispatch()
  const inputRef = useRef(null)
  const [editFilePath, setEditFilePath] = useState('')
  const { toast } = useToast()
  useEffect(() => {
    dispatch(getCategoryItems())
    dispatch(getBrandItems())
    dispatch(fetchAllProducts()).then((data) => {

    })
  }, [dispatch])
  // new code
  const [file, setFile] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [description, setDescription] = useState('')
  const [discount, setDiscount] = useState('')
  const [availability, setAvailability] = useState(true) // Assume true means available
  const [quantity, setQuantity] = useState('')
  const [brandId, setBrandId] = useState('')

  const token = localStorage.getItem('token')

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Create a FormData object to hold the file and other product data
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', name)
    formData.append('price', price)
    formData.append('categoryId', categoryId)
    formData.append('description', description)
    formData.append('discount', discount)
    formData.append('availability', availability)
    formData.append('quantity', quantity)
    formData.append('brandId', brandId)

    try {
      // Make POST request to the backend
      const response = await axios.post(ADD_NEW_PRODUCT_API, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      })
      dispatch(fetchAllProducts())
      setOpenCreateProductsDialog(false)
      toast({
        title: 'New Product Added Successfully',
        description: response.data.message,
        variant: 'success'
      })
      resetForm()
    } catch (error) {
      toast({
        title: 'Error uploading product',
        description: response.data.message,
        variant: 'destructive'
      })
    }
  }
  const handleEdit = (productId) => {
    const product = productList.find(product => product?._id === productId)
    setName(product?.name)
    setPrice(product?.price)
    setDescription(product?.description)
    setAvailability(product?.availability)
    setBrandId(product?.brand_id)
    setCategoryId(product?.category_id)
    setDiscount(product?.discount)
    setQuantity(product?.quantity)
    setEditFilePath(product?.product_image)
  }
  // Reset form fields
  const resetForm = () => {
    setFile(null)
    setName('')
    setPrice('')
    setCategoryId('')
    setDescription('')
    setDiscount('')
    setAvailability(true)
    setQuantity('')
    setBrandId('')
  }

  // end new code

  function handleDelete (getCurrentProductId) {
    dispatch(deleteProduct(getCurrentProductId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts())
        toast({
          title: 'Deleted product Successfully',
          variant: 'success'
        })
      } else {
        dispatch(fetchAllProducts())
        toast({
          title: 'Failed to Delete product',
          variant: 'destructive'
        })
      }
    })
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  function handleImageFileChange (event) {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  function handleDrop (event) {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files?.[0]
    if (droppedFile) setFile(droppedFile)
  }

  function handleRemoveImage () {
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }
  return (
    <>
      <div className='mb-5 w-full flex justify-end'>
        <Button
          onClick={() => {
            setOpenCreateProductsDialog(true)
            resetForm()
            setEditFilePath('')
          }}
        >
          Add New Product
        </Button>
      </div>
      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {productList && productList.length > 0
          ? (
              productList.map((productItem, index) => (
                <AdminProductTile
                  key={index}
                  handleEdit={handleEdit}
                  setOpenCreateProductsDialog={setOpenCreateProductsDialog}
                  setCurrentEditedId={setCurrentEditedId}
                  product={productItem}
                  handleDelete={handleDelete}
                />
              ))
            )
          : (
            <p>No Products fetched</p>
            )}
      </div>
      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false)
          setCurrentEditedId(null)
        }}
      >
        <SheetContent side='right' className='overflow-auto'>
          <SheetHeader>
            <SheetTitle>
              {currentEditedId !== null ? 'Edit Product' : 'Add New Product'}
            </SheetTitle>
          </SheetHeader>

          <form onSubmit={handleSubmit} className='vertical-spacing mt-8'>

            {editFilePath !== '' && (
              <div className='h-32 w-32'>
                <img src={`http://${editFilePath}`} alt='Edit product image' className='block w-full h-full object-cover'/>
              </div>
            )}
            <div className='w-full  mt-4 max-w-md mx-auto'>
              <Label className='text-lg font-semibold mb-2 block'>
                {currentEditedId !== null ? 'Edit Product Image' : 'Upload Image'}

              </Label>
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className='border-2 border-dashed rounded-lg p-4'
              >
                <Input
                  id='image-upload'
                  type='file'
                  className='hidden'
                  ref={inputRef}
                  onChange={handleImageFileChange}
                />
                {!file
                  ? (
                    <Label
                      htmlFor='image-upload'
                      className='flex flex-col items-center justify-center h-32 cursor-pointer'
                    >
                      <UploadCloudIcon className='w-10 h-10 text-muted-foreground mb-2' />
                      <span>Drag & drop or click to upload image</span>
                    </Label>
                    )
                  : (
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center'>
                        <FileIcon className='w-8 text-primary mr-2 h-8' />
                      </div>
                      <p className='text-sm font-medium'>{file.name}</p>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='text-muted-foreground hover:text-foreground'
                        onClick={handleRemoveImage}
                      >
                        <XIcon className='w-4 h-4' />
                        <span className='sr-only'>Remove File</span>
                      </Button>
                    </div>
                    )}
              </div>
            </div>

            <div>
              <label>Product Name:</label>
              <input
                className='py-2 px-5 rounded-lg w-full border-[1px] border-gray-400'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type='number'
                className='py-2 px-5 rounded-lg w-full border-[1px] border-gray-400'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Category ID:</label>

              <select
                onChange={(e) => setCategoryId(e.target.value)}
                className='py-2 px-4 rounded-lg'
                defaultValue={categoryId}
              >
                <option>Select Category</option>
                {categoryList.map(({ _id, name }) => (
                  <option key={_id} value={_id}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Description:</label>
              <textarea
                className='py-2 px-5 rounded-lg w-full border-[1px] border-gray-400'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Discount:</label>
              <input
                type='number'
                className='py-2 px-5 rounded-lg w-full border-[1px] border-gray-400'
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
            <div className='flex items-center gap-4'>
              <label>Availability:</label>
              <input
                type='checkbox'
                className='h-5 w-5'
                checked={availability}
                onChange={(e) => setAvailability(e.target.checked)}
              />
            </div>
            <div>
              <label>Quantity:</label>
              <input
                type='number'
                className='py-2 px-5 rounded-lg w-full border-[1px] border-gray-400'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Brand ID:</label>

              <select
                onChange={(e) => setBrandId(e.target.value)}
                className='py-2 px-4 rounded-lg'
                defaultValue={brandId}
              >
                <option>Select Brand</option>
                {brandList.map(({ _id, name }) => (
                  <option key={_id} value={_id}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            {/* <div> */}
            {/*  <label>Colors (comma separated):</label> */}
            {/*  <input */}
            {/*    type='text' */}
            {/*    value={colors.join(', ')} */}
            {/*    className='py-2 px-5 rounded-lg w-full border-[1px] border-gray-400' */}
            {/*    onChange={(e) => */}
            {/*      setColors( */}
            {/*        e.target.value.split(',').map((color) => color.trim()) */}
            {/*      )} */}
            {/*  /> */}
            {/* </div> */}
            {/* <div> */}
            {/*  <label>Rating (comma separated):</label> */}
            {/*  <input */}
            {/*    type='text' */}
            {/*    className='py-2 px-5 rounded-lg w-full border-[1px] border-gray-400' */}
            {/*    value={rating.join(', ')} */}
            {/*    onChange={(e) => */}
            {/*      setRating( */}
            {/*        e.target.value.split(',').map((rate) => rate.trim()) */}
            {/*      )} */}
            {/*  /> */}
            {/* </div> */}

            <button
              className='w-full py-2 px-6 bg-blue-500 text-white hover:bg-blue-800 duration-300 rounded-lg'
              type='submit'
            >
              Upload Product
            </button>
          </form>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default AdminProducts
