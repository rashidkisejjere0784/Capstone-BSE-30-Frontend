import { AlignJustify, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { logoutUser } from '@/store/auth-slice'
import { toast } from '@/hooks/use-toast.ts'
import { useNavigate } from 'react-router-dom'

function AdminHeader ({ handleOpenSideBar }: {handleOpenSideBar: ()=> void}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // @ts-ignore
    dispatch(logoutUser()).then((data)=>{
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
          description: 'User Logout Successfully',
          variant: 'success'
        })
        navigate('/')

      } else {
        toast({
          title: data?.payload?.message,
          description: 'Failed to Logout User',
          variant: 'destructive'
        })
      }
    })

  }

  return (
    <header className='flex items-center justify-between px-4 py-3 bg-background border-b'>
      <Button onClick={handleOpenSideBar} className='lg:hidden sm:block'>
        <AlignJustify />
        <span className='sr-only'>Toggle Menu</span>
      </Button>
      <div className='flex flex-1 justify-end'>
        <Button
          onClick={handleLogout}
          className='inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow'
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  )
}

export default AdminHeader
