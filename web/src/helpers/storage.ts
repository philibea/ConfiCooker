const STORAGE_KEY: string = 'LIST'

type Product = {
  name?: string
  quantity?: string
  number: number
}

const getProductsList = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY) || '{products:[]}')

const setProductsList = (product: Product) => {
  const { products = [] } = getProductsList()

  const list: string = JSON.stringify({
    products: [...products, { ...product }],
  })
  localStorage.setItem(STORAGE_KEY, list)
}

export default {
  setProductsList,
  getProductsList,
}
