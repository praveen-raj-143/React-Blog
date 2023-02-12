import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from '../Components/Homepage'
import Bollywood from '../Components/Bollywood'
import Technology from '../Components/Technology'
import Hollywood from '../Components/Hollywood'
import Fitness from '../Components/Fitness'
import Food from '../Components/Food'


const RouteFile = () => {
  return (
    <div>
      
      <Routes>
      <Route path='/' element={<Homepage/>}/>
        <Route path='/bollywood' element={<Bollywood/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path='/food' element={<Food/>}/>
      </Routes>
      
    </div>
  )
}


export default RouteFile
