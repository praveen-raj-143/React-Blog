import React from 'react'
import './Fitness.css'

const Food = () => {
  
  
  return (
    <div>
      <div className="parent">
       <div className='child'>
        <div className='imgfood food1'></div>
        <h3>Biryani</h3>
        <p>Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent as a variety of Persian pilaf.</p>
       </div>
       <div className='child'>
       <div className='imgfood food2'></div>
        <h3>Mandi Biryani</h3>
        <p>Mandi Arabic: مندي is a traditional dish that originated from Hadhramaut consisting mainly of meat and rice with a special blend of spices</p>
       </div>
       <div className='child'>
       <div className='imgfood food3'></div>
        <h3>Chinese</h3>
        <p>Chinese cuisine encompasses the numerous cuisines originating from China, as well as overseas cuisines created by the Chinese</p>
       </div>
       <div className='child'>
       <div className='imgfood food4'></div>
        <h3>Veg Meals</h3>
        <p> meal is an eating occasion that takes place at a certain time and includes consumption of food  depending on the speakers culture</p>
       </div>
      </div>
    </div>
  )
}

export default Food
