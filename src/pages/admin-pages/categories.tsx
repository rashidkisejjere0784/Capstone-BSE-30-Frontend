// @ts-nocheck

import CommonForm from '@/components/common/form'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import { addProductFormElements } from '@/config'

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
import { getCategoryItems } from '@/store/common-slice'

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

  console.log('CategoryList: ', categoryList)

  const dispatch = useDispatch()
  const { toast } = useToast()

  useEffect(() => {
    dispatch(getCategoryItems())
  }, [dispatch])

  function onSubmit (event) {
    event.preventDefault()
  }

  function handleDelete () {

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
                categoryList.length > 0
                  ? categoryList.map((category) => (
                    // eslint-disable-next-line react/jsx-key
                    <>
                      <TableRow>
                        <TableCell>{category?._id}</TableCell>
                        <TableCell>{category?.name}</TableCell>
                        <TableCell>{category?.description}</TableCell>
                        <TableCell>
                          <div className='flex items-center gap-2'>
                            <button className='py-1 px-3 bg-blue-500 text-white rounded-lg'>view</button>
                            <button className='py-1 px-3 bg-green-500 text-white rounded-lg'>edit</button>
                            <button className='py-1 px-3 bg-red-500 text-white rounded-lg'>delete</button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </>
                  ))
                  : <p>Failed to get category items</p>
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
              formControls={addProductFormElements}
              // isBtnDisabled={!isFormValid()}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default AdminCategories
