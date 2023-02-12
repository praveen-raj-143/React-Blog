import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='pos'><div className='the'>The</div><div className='siren'> Siren</div></div>
      <nav>
      <ul className='navbar'>
      <li><NavLink to='/' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Home</NavLink></li>
      <li><NavLink to='/bollywood' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Bollywood</NavLink></li>
      <li><NavLink to='/technology' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Technology</NavLink></li>
      <li><NavLink to='/hollywood' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Hollywood</NavLink></li>
      <li><NavLink to='/fitness' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Fitness</NavLink></li>
      <li><NavLink to='/food' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Food</NavLink></li>
      </ul>
      </nav>
      
    </div>
  )
}

export default Home
