import { useState } from 'react'
import { Cart } from './components/Cart.jsx'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { Products } from './components/Products.jsx'
import { CartProvider } from './context/cart.jsx'
import { useFilters } from './hooks/useFilters.js'
import { products as initialProducts } from './mocks/products.json'
function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterProducts(products)} />
      <Footer />
    </CartProvider>
  )
}

export default App
