import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Layout.css'

const Layout = () => {
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout
