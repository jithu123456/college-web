import React from 'react'
import { Route,Routes } from 'react-router-dom'
import SignUp from './screen/SignUp'
import Home from './screen/Home'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/Home' element={<Home/>}/>
    </Routes>
    
  )
}

export default App
