import React from 'react'

import GridListImages from '../components/GridListImages'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import products from '../assets/json/products.json'



const Home = () => {
  return (
    <>
      <NavBar />
      <GridListImages produits={products.produits} />
    </>)
}


export default Home
