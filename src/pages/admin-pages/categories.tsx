// @ts-nocheck

import CommonForm from '@/components/common/form'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import { addCategoryFormElements } from '@/config'

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

import { addCategoryItem, deleteCategoryItem, editCategoryItem, getCategoryItems } from '@/store/common-slice'

const initialFormData = {
  name: '',
  description: ''
}

function AdminCategories () {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false)
  const [formData, setFormData] = useState(initialFormData)
  const [currentEditedId, setCurrentEditedId] = useState(null)
  const { categoryList } = useSelector((state) => state.commonFeature)
  const dispatch = useDispatch()
  const { toast } = useToast()

  async function onSubmit (event) {
    event.preventDefault()

    formData.CategoryId === '' || !formData.CategoryId
      ? dispatch(addCategoryItem(formData)).then((data) => {
        if (data?.payload?.success) {
          toast({
            title: data?.payload?.message,
            variant: 'success'
          })
          setOpenCreateProductsDialog(false)
          setCurrentEditedId(null)
          setFormData(initialFormData)
          dispatch(getCategoryItems())
        } else {
          toast({
            title: data?.payload?.message,
            variant: 'destructive'
          })
        }
      })
      : dispatch(editCategoryItem(formData)).then((data) => {
        if (data?.payload?.success) {
          toast({
            title: data?.payload?.message,
            variant: 'success'
          })
          setOpenCreateProductsDialog(false)
          setCurrentEditedId(formData.id)
          setFormData(initialFormData)
          dispatch(getCategoryItems())
        } else {
          toast({
            title: data?.payload?.message,
            variant: 'destructive'
          })
        }
      })
  }

  const handleDelete = (categoryID) => {
    dispatch(deleteCategoryItem(categoryID)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
          variant: 'success'
        })
        setOpenCreateProductsDialog(false)
        setCurrentEditedId(null)
        setFormData(initialFormData)
        dispatch(getCategoryItems())
      } else {
        toast({
          title: data?.payload?.message,
          variant: 'destructive'
        })
      }
    })
  }

  const handleSetEditFormData = (CategoryId, name, description) => {
    setOpenCreateProductsDialog(true)
    setCurrentEditedId(CategoryId)
    setFormData({
      CategoryId,
      name,
      description
    })
  }

  return (
    <>
      <div className='mb-5 w-full flex justify-end'>
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Category
        </Button>
      </div>
      <div>
        <Table>
          <TableCaption>A list of your Product Categories</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Category Id</TableHead>
              <TableHead>Category Name</TableHead>
              <TableHead>Category Description</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            {
                categoryList.length > 0 &&
                  categoryList.map((category) => (
                    // eslint-disable-next-line react/jsx-key
                    <TableRow key={category?._id}>
                      <TableCell>{category?._id}</TableCell>
                      <TableCell>{category?.name}</TableCell>
                      <TableCell>{category?.description}</TableCell>
                      <TableCell>
                        <div className='flex items-center gap-2'>
                          <button className='py-1 px-3 bg-blue-500 text-white rounded-lg'>view</button>
                          {/* Edit Category */}
                          <button onClick={() => handleSetEditFormData(category?._id, category?.name, category?.description)} className='py-1 px-3 bg-green-500 text-white rounded-lg'>Edit</button>
                          {/* Add Category */}
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
                                  ({category?.name})
                                  and remove your data from our servers.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(category?._id)}
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
              {currentEditedId !== null ? 'Edit Category' : 'Add New Category'}
            </SheetTitle>
          </SheetHeader>

          <div className='py-6'>
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText={currentEditedId !== null ? 'Edit' : 'Add'}
              formControls={addCategoryFormElements}
              // isBtnDisabled={!isFormValid()}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default AdminCategories
