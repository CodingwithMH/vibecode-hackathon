import React from 'react'
import Header from "../components/Header"
import Hero from '../components/Hero'
import BrandsCarousel from '../components/BrandsCarousel'
import CategoryGrid from '../components/CategoryGrid'
import Arrival from '../components/Arrival'
import Footer from '../components/Footer'
import NewsLetter from '../components/NewsLetter'
import Features from '../components/Features'
const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <BrandsCarousel/>
      <CategoryGrid/>
      <Arrival/>
      <Features/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default LandingPage
