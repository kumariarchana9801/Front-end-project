import Navebar from './Component/Navebar'
import './App.css'
import { Outlet } from 'react-router-dom'
function App() {
  
  return (
   <>
   <Navebar/>
   <Outlet/>
  
   </>
  )
}

export default App
