// @ts-nocheck

import { useState } from 'react'
import ProductImageUpload from '@/components/admin-components/image-upload.tsx'

function AdminDashboard () {
  const [imageFile, setImageFile] = useState(null)
  const [uploadedImageUrl, setUploadedImageUrl] = useState('')
  const [imageLoadingState, setImageLoadingState] = useState(false)
  console.log(uploadedImageUrl, 'uploadedImageUrl')
  return (
    <div>
      <ProductImageUpload
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        setImageLoadingState={setImageLoadingState}
        imageLoadingState={imageLoadingState}
        isCustomStyling
        // isEditMode={currentEditedId !== null}
      />
    </div>
  )
}

export default AdminDashboard
