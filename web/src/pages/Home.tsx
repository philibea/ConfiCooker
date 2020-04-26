import React, { useState } from 'react'

import GridListImages from '../components/GridListImages'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import products from '../assets/json/products.json'


export interface HomeState {
  product: string
}

const Home = () => {

  const [values, setValues] = useState<HomeState>({
    product: 'tomate',
  })

  return (
    <>
      <NavBar />
      <Search values={values} setValues={setValues} />
      <GridListImages values={values} produits={products.produits} />
    </>)
}


export default Home
