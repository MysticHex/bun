import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Showbook from './Pages/Showbook'
import Editbook from './Pages/Editbook'
import Createbook from './Pages/Createbooks'
import Deletebook from './Pages/Deletebook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<Createbook/>} />
      <Route path='/books/detail/:id' element={<Showbook/>} />
      <Route path='/books/edit/:id' element={<Editbook/>} />
      <Route path='/books/delete/:id' element={<Deletebook/>} />
    </Routes>
  )
}

export default App