// @ts-nocheck

import CommonForm from '@/components/common/form'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import { addBrandFormElements } from '@/config'

import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from '@/hooks/use-toast.ts'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

import { addBrandItem, deleteBrandItem, editBrandItem, getBrandItems } from '@/store/common-slice'

const initialFormData = {
  name: '',
  description: ''
}

function AdminBrands () {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false)
  const [formData, setFormData] = useState(initialFormData)
  const [currentEditedId, setCurrentEditedId] = useState(null)
  const { brandList } = useSelector((state) => state.commonFeature)

  const dispatch = useDispatch()
  const { toast } = useToast()

  useEffect(() => {
    dispatch(getBrandItems())
  }, [dispatch])

  async function onSubmit (event) {
    event.preventDefault()

    formData.brandId === '' || !formData.brandId
      ? dispatch(addBrandItem(formData)).then((data) => {
        if (data?.payload?.success) {
          toast({
            title: data?.payload?.message,
            variant: 'success'
          })
          setOpenCreateProductsDialog(false)
          setCurrentEditedId(null)
          setFormData(initialFormData)
          dispatch(getBrandItems())
        } else {
          toast({
            title: data?.payload?.message,
            variant: 'destructive'
          })
        }
      })
      : dispatch(editBrandItem(formData)).then((data) => {
        if (data?.payload?.success) {
          toast({
            title: data?.payload?.message,
            variant: 'success'
          })
          setOpenCreateProductsDialog(false)
          setCurrentEditedId(formData.id)
          setFormData(initialFormData)
          dispatch(getBrandItems())
        } else {
          toast({
            title: data?.payload?.message,
            variant: 'destructive'
          })
        }
      })
  }

  console.log(formData)

  const handleDelete = (brandId) => {
    dispatch(deleteBrandItem(brandId)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
          variant: 'success'
        })
        setOpenCreateProductsDialog(false)
        setCurrentEditedId(null)
        setFormData(initialFormData)
        dispatch(getBrandItems())
      } else {
        toast({
          title: data?.payload?.message,
          variant: 'destructive'
        })
      }
    })
  }

  const handleSetEditFormData = (brandId, name, description) => {
    setOpenCreateProductsDialog(true)
    setCurrentEditedId(brandId)
    setFormData({
      brandId,
      name,
      description
    })
  }

  return (
    <>
      <div className='mb-5 w-full flex justify-end'>
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Brand
        </Button>
      </div>
      <div>
        <Table>
          <TableCaption>A list of your Product Categories</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Brand Id</TableHead>
              <TableHead>Brand Name</TableHead>
              <TableHead>BrandDescription</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            {
                brandList.length > 0 &&
                  brandList.map((brand) => (
                    // eslint-disable-next-line react/jsx-key
                    <TableRow key={brand?._id}>
                      <TableCell>{brand?._id}</TableCell>
                      <TableCell>{brand?.name}</TableCell>
                      <TableCell>{brand?.description}</TableCell>
                      <TableCell>
                        <div className='flex items-center gap-2'>
                          <button className='py-1 px-3 bg-blue-500 text-white rounded-lg'>view</button>
                          {/* Edit brand*/}
                          <button onClick={() => handleSetEditFormData(brand?._id, brand?.name, brand?.description)} className='py-1 px-3 bg-green-500 text-white rounded-lg'>Edit</button>
                          {/* Add brand */}
                          <AlertDialog>
                            <AlertDialogTrigger
                              className='py-1 px-3 bg-red-500 text-white rounded-lg'
                            >Delete
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. This will permanently delete your Brand
                                  ({brand?.name})
                                  and remove your data from our servers.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(brand?._id)}
                                >Continue
                                </AlertDialogAction>
                              </AlertDialogFooter>

                            </AlertDialogContent>
                          </AlertDialog>

                        </div>
                      </TableCell>
                    </TableRow>
                  ))
            }

          </TableBody>
        </Table>

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
              {currentEditedId !== null ? 'Edit Brand' : 'Add New Brand'}
            </SheetTitle>
          </SheetHeader>

          <div className='py-6'>
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText={currentEditedId !== null ? 'Edit' : 'Add'}
              formControls={addBrandFormElements}
              // isBtnDisabled={!isFormValid()}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default AdminBrands
