import React from 'react'

import './Bollywood.css'



const Bollywood = (props) => {

 
  
  return (
    <div>
      <div className='Content'>
      <div className='Container'>
      <h1>Movies</h1>
        <div className='box'>
        <div className='bollyimg '></div>
          <div className='bollytxt'>
            <h2>Pathaan</h2>
            <p>Pathaan is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra of Yash Raj Films.</p>
          </div>
        </div>
        <div className='box'>
        <div className='bollyimg bollyimg1'></div>
          <div className='bollytxt'>
            <h2>Brahmāstra</h2>
            <p>Ranbir Kapoor as Shiva, Amrita's son; an orphan and newly recruited member of the Brahmānsh, who possesses the power of the Agniastra</p>
          </div>
        </div>
        <div className='box'>
        <div className='bollyimg bollyimg2'></div>
          <div className='bollytxt'>
            <h2>Ram Setu</h2>
            <p>The bridge of Ramais a 2022 Indian Hindi-language action-adventure film directed by Abhishek Sharma.</p>
          </div>
        </div>
        <div className='box'>
        <div className='bollyimg bollyimg3'></div>
          <div className='bollytxt'>
            <h2>HIT: The First Case</h2>
            <p>HIT: The First Case is a 2022 Indian Hindi-language action suspense-thriller film written and directed by Sailesh Kolanu, being a remake of his 2020 Telugu film</p>
          </div>
        </div>
        <div className='box'>
        <div className='bollyimg bollyimg4'></div>
          <div className='bollytxt'>
            <h2>RRR</h2>
            <p>RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad.</p>
          </div>
        </div>
        <div className='box'>
        <div className='bollyimg bollyimg5'>
         
        </div>
        <div className='bollytxt'>
            <h2>Gangubai Kathiawadi</h2>
            <p>Gangubai Kathiawadi is a 2022 Indian Hindi-language biographical crime drama film directed by Sanjay Leela Bhansali</p>
          </div>
        </div>
      </div>
      
         <div className="container2">
      <h1>Top Posts</h1>
        <div className="topbox">
          <h3>pathaan</h3>
          <div className='topbollyimg'></div>
        </div>
        <div className="topbox">
        <h3>Brahmāstra</h3>
          <div className='topbollyimg topbollyimg1'></div>
        </div>
        <div className="topbox">
        <h3>RRR</h3>
          <div className='topbollyimg topbollyimg2'></div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Bollywood
