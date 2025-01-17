import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Button from './Components/Button.jsx'
// import Images from './Components/Images.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
// import Hook from './Components/Hook.jsx'
import ProductList from './Components/ProductList.jsx'
import Cart from './Components/Cart.jsx'
import { CartProvider } from './Components/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <CartProvider>
  <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>

  </CartProvider>
    {/* <App /> */}
    {/* <Button /> */}
    {/* <Images /> */}
    {/* <Hook /> */}
    
  </>
)
