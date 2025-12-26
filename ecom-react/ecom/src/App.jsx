
import Home from './components/Home'
import Product from './components/Product'
import Cart from './components/Cart'
import Contact from './components/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<Product />}/>
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />}/>
      <Route path="/contact" element={<Contact />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
