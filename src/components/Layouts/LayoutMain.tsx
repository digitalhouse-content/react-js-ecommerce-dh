import { Outlet } from 'react-router-dom'
import { Navbar } from '../ui/Navbar'

export const LayoutMain = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
