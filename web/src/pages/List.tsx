import React from 'react'
import storage from '../helpers/storage'
import products from '../assets/json/products.json'

const List = () => {

    const list = storage.getProductsList()
    console.log(list)

    return <> List </>
}

export default List