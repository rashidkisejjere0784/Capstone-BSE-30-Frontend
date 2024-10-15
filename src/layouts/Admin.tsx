import { Outlet } from 'react-router-dom'


import { useState } from 'react'
import AdminHeader from '@/components/admin-components/AdminHeader.tsx'
import AdminSideBar from '@/components/admin-components/AdminSideBar.tsx'

function AdminLayout () {
  const [openSidebar, setOpenSidebar] = useState(false)
  const handleOpenSideBar = () => {
    setOpenSidebar(prev => !prev)
  }

  return (
    <div className='flex min-h-screen w-full'>
      {/* admin sidebar */}
      <AdminSideBar open={openSidebar} handleOpenSideBar={handleOpenSideBar} />
      <div className='flex flex-1 flex-col'>
        {/* admin header */}
        <AdminHeader handleOpenSideBar={handleOpenSideBar} />
        <main className='flex-1 flex-col flex bg-muted/40 p-4 md:p-6'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
