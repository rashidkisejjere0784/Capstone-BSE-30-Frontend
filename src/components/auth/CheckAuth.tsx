import { Navigate, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  authenticated?: boolean
  user?: { name?: string; role?: string }
}
const CheckAuth = ({ children, authenticated, user }: Props) => {
  const location = useLocation()
  if (
    location.pathname.includes('/patient') ||
    location.pathname.includes('/lab-technician') ||
    location.pathname.includes('/facility-admin') ||
    location.pathname.includes('/doctor')
  ) {
    if (!authenticated) {
      return <Navigate to={'/auth'} />
    } else {
      if (user?.role === 'patient' && !location.pathname.includes('/patient')) {
        return <Navigate to={'/patient'} />
      }
      if (user?.role === 'doctor' && !location.pathname.includes('/doctor')) {
        return <Navigate to={'/doctor'} />
      } else if (
        user?.role === 'lab-technician' &&
        !location.pathname.includes('/lab-technician')
      ) {
        return <Navigate to={'/lab-technician'} />
      } else if (
        user?.role === 'facility-admin' &&
        !location.pathname.includes('/facility-admin')
      ) {
        return <Navigate to={'/facility-admin'} />
      }
    }
  }

  if (authenticated && location.pathname.includes('/auth')) {
    if (user?.role === 'patient') {
      return <Navigate to={'/patient'} />
    }
    if (user?.role === 'doctor') {
      return <Navigate to={'/doctor'} />
    }
    if (user?.role === 'facility-admin') {
      return <Navigate to={'/facility-admin'} />
    }
    if (user?.role === 'lab-technician') {
      return <Navigate to={'/lab-technician'} />
    }
  }

  return <>{children}</>
}

export default CheckAuth
