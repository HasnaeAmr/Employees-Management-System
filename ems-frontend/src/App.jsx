import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      {/*//http://localhost/3000*/}
      <Route path='/' element = {<ListEmployeeComponent/>}></Route>
      {/*//http://localhost/3000/employee*/}
      <Route path='/employee' element = {<ListEmployeeComponent/>}></Route>
      <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>
      <Route path='/edit-employee/:id' element = {<EmployeeComponent/>}></Route>
    </Routes>
     </BrowserRouter>
    </>
  )
}

export default App