import React from 'react'
import Hero from './Componenets/Hero'
import FeaturedP from './Componenets/FeaturedP'
import LatestP from './Componenets/LatestP'
import Service from './Componenets/Service'
import Product from './Componenets/Product'
import TrendingP from './Componenets/TrendingP'
import Discount from './Componenets/Discount'
import Topcate from './Componenets/Topcate'
import LatestB from './Componenets/LatestB'
import Picshop from './Componenets/picshop'

const Home = () => {
  return (
    <div>
      <Hero />

      <FeaturedP />
      <LatestP />
      <Service />
      <Product />
      <TrendingP />
      <Discount />
      <Topcate />
      <Picshop />
      <LatestB />
      
    </div>
  )
}

export default Home
