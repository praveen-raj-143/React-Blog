import React from 'react'
import './Technology.css'

const Technology = () => {

  
  return (
    <div>
      <div className="tech">
        <div className="compo">
          <div className='techimg'></div>
          <div className='techtxt'>
          <h2>Data Science</h2>
            <p>Data science combines math and statistics, specialized programming, advanced analytics, artificial intelligence (AI), and machine learning with specific ...</p>
          </div>
        </div>
        <div className="compo">
        <div className='techimg techimg1'></div>
          <div className='techtxt'>
          <h2>Developer</h2>
            <p>Developers, also known as software developers or computer programmers, are responsible for developing, coding, installing, and maintaining software systems.</p>
          </div>
        </div>
        <div className="compo">
        <div className='techimg techimg2'></div>
          <div className='techtxt'>
          <h2>Artificial intelligence</h2>
            <p>Artificial intelligence (AI) is intelligence—perceiving, synthesizing, and inferring information—demonstrated by machines, as opposed to intelligence ...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
