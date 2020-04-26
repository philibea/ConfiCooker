import React, { useState } from 'react'

import GridListImages from '../components/GridListImages'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import products from '../assets/json/products.json'


export interface HomeState {
  searchProduct: string
}

const Home = () => {
  const [values, setValues] = useState<HomeState>({
    searchProduct: '',
  })

  return (
    <>
      <NavBar />
      <Search values={values} setValues={setValues} />
      <GridListImages values={values} produits={products.produits} />
    </>
  )
}


export default Home
