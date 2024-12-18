import {
  ChartNoAxesCombined,
  ShoppingBasket
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { MdOutlineCategory } from 'react-icons/md'
import { SiBrandfolder } from 'react-icons/si'

const adminSidebarMenuItems = [
  {
    id: 'products',
    label: 'Products',
    path: '/admin/products',
    icon: <ShoppingBasket />
  },
  {
    id: 'categories',
    label: 'Categories',
    path: '/admin/categories',
    icon: <MdOutlineCategory />
  },
  {
    id: 'brands',
    label: 'Brands',
    path: '/admin/brands',
    icon: <SiBrandfolder />
  }
]

function MenuItems () {
  const navigate = useNavigate()

  return (
    <nav className='mt-8 flex-col flex gap-2'>
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path)
            // handleOpenSideBar ? handleOpenSideBar() : null
          }}
          className='flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground'
        >
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  )
}

function AdminSideBar ({ open, handleOpenSideBar }: {open: boolean; handleOpenSideBar: ()=> void}) {
  const navigate = useNavigate()

  return (
    <>
      <Sheet open={open} onOpenChange={handleOpenSideBar}>
        <SheetContent side='left' className='w-64'>
          <div className='flex flex-col h-full'>
            <SheetHeader className='border-b'>
              <SheetTitle className='flex gap-2 mt-5 mb-5'>
                <ChartNoAxesCombined size={30} />
                <h1 className='text-2xl font-extrabold'>Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems />
          </div>
        </SheetContent>
      </Sheet>
      <aside className='hidden w-64 flex-col border-r bg-background p-6 lg:flex'>
        <div
          onClick={() => navigate('/admin')}
          className='flex cursor-pointer items-center gap-2'
        >
          <ChartNoAxesCombined size={30} />
          <h1 className='text-2xl font-extrabold'>Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </>
  )
}

export default AdminSideBar
