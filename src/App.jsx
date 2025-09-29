
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Navbar from './component/Navbar/Navbar'

function App() {


  return (
    <>
    <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
    </>
  )
}

export default App
