'use client';

import Hero from './components/Hero';
import FeaturedP from './components/FeatureProduct';
import LatestP from './components/LatestProducts';
import Service from './components/Offers';
import Product from './components/FeatureProduct';
import TrendingP from './components/TrendingProducts';
import Discount from './components/Discount';
import Topcate from './components/TopCategories';
import LatestB from './Componenets/LatestB'
import Picshop from './Componenets/picshop';
import TopCategories from './components/TopCategories';
import LatestProducts from './components/LatestProducts';
import Feature from './components/FeatureProduct';
import Offers from './components/Offers';
import Unique from './components/Unique';
import TrendingProducts from './components/TrendingProducts';
import BlogSection from './components/BlogSection';
import Newslater from './components/Newslater';

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
      <Feature />
      <LatestProducts />
      <Offers />
      <Unique />
      <TrendingProducts />
      <Discount />
      <TopCategories />
      <Newslater />
      <BlogSection />
    </div>
  );
}

export default Home;

