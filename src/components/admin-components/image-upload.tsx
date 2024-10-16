// @ts-nocheck

import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { Skeleton } from '@/components/ui/skeleton'

const IMAGE_UPLOAD_ROUTE = 'http://localhost:5000/api/product-images/add'
const ProductImageUpload = ({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  isEditMode,
  isCustomStyling = false
}) => {
  const inputRef = useRef(null)

  function handleImageFileChange (event) {
    // console.log(event.target.files, 'event.target.files')
    const selectedFile = event.target.files?.[0]
    // const blob = URL.createObjectURL(selectedFile)

    if (selectedFile) {
      const fileReader: FileReader = new FileReader()
      fileReader.onload = (e) => {
        const base64String = e.target.result;
        console.log('Base64 Image String:', base64String);
      }
      fileReader.readAsDataURL(selectedFile)
      // setImageFile(blob)
      // console.log('The selected Image: ', blob)
    }
  }

  function handleDragOver (event) {
    event.preventDefault()
  }

  function handleDrop (event) {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files?.[0]
    if (droppedFile) setImageFile(droppedFile)
  }

  function handleRemoveImage () {
    setImageFile(null)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  async function uploadImage () {
    setImageLoadingState(true)
    const data = new FormData()
    console.log('Form Data: ', data)
    data.append('my_file', imageFile)
    console.log('Image File: ', imageFile.name)
    // const response = await axios.post(
    //   IMAGE_UPLOAD_ROUTE,
    //   {
    //     file: imageFile
    //   },
    //   {
    //     withCredentials: true
    //   }
    // )
    // console.log(response, 'response')
    //
    // if (response?.data?.success) {
    //   setUploadedImageUrl(response.data.result.url)
    //   setImageLoadingState(false)
    // }
  }

  // useEffect(() => {
  //   if (imageFile !== null) uploadImage()
  // }, [imageFile])

  return (
    <div
      className={`w-full  mt-4 ${isCustomStyling ? '' : 'max-w-md mx-auto'}`}
    >
      <Label className='text-lg font-semibold mb-2 block'>Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`${
          isEditMode ? 'opacity-60' : ''
        } border-2 border-dashed rounded-lg p-4`}
      >
        <Input
          id='image-upload'
          type='file'
          className='hidden'
          ref={inputRef}
          onChange={handleImageFileChange}
          disabled={isEditMode}
        />
        {!imageFile
          ? (
            <Label
              htmlFor='image-upload'
              className={`${
              isEditMode ? 'cursor-not-allowed' : ''
            } flex flex-col items-center justify-center h-32 cursor-pointer`}
            >
              <UploadCloudIcon className='w-10 h-10 text-muted-foreground mb-2' />
              <span>Drag & drop or click to upload image</span>
            </Label>
            )
          : imageLoadingState
            ? (
              <Skeleton className='h-10 bg-gray-100' />
              )
            : (
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <FileIcon className='w-8 text-primary mr-2 h-8' />
                </div>
                <p className='text-sm font-medium'>{imageFile.name}</p>
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
  )
}

export default ProductImageUpload
