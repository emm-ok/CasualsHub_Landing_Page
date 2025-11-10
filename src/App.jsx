import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer, Navbar } from './components'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Products from './pages/ProductPage/Products'
import { ProductDetails } from './components'
import BlogPage from './pages/BlogPage/BlogPage'
import SingleBlogPage from './pages/BlogPage/SingleBlogPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/product' element={<Products />} />
            <Route path='/product' element={<ProductDetails />}>
              <Route path=':productId' element={<ProductDetails />} />
            </Route>
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/blog/:blogId' element={<SingleBlogPage />} /> 
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App