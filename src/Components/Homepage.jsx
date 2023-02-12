import React from 'react'
import Header from './FirstCompo/Header'
import Latest from './SecondCompo/Latest'
import LatestArticles from './ThirdCompo/LatestArticles'
import Top from './FourthCompo/Top'
import LatestStories from './FifthCompo/LatestStories'

const Homepage = () => {
  
  
  return (
    <div>
      <Header/>
      <Latest/>
      <LatestArticles/>
      <Top/>
      <LatestStories/>
    </div>
  )
}

export default Homepage
