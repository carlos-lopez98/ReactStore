import React, {useState} from 'react'
//Our Custom Components
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Recommend from './components/Recommend';
import ScrollToTop from './components/ScrollToTop';
import Products from './components/Products';
import Promo from './components/Promo'
import Services from './components/Services'
import Categories from './components/Categories'
import Choose from './components/Choose'
//Stylesheet
import "./scss/index.scss";
export default function App() {

  const[theme, setTheme] = useState("dark")
  //This is what will be returned by APP(), Which will in turn render onto our DOM
  return (
    //Data-Theme attribute will be what determines if dark theme is displayed
    <div className='app' data-theme={theme}>
      <ScrollToTop/>
      <Navbar/>
      <Home/>
      <Services />
      <Categories />
      <Recommend />
      <Choose />
      <Products />
      <Promo />
      <Footer/>
    </div>
  )
}

