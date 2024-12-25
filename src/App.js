

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Products from './component/Products';
import About from './pages/About';
import { Contact } from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Details from './pages/Details';
import CheckOut from './pages/CheckOut';
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
   <>
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path="/" element={<Home />}  />
  <Route  path='/home' element ={<Home/>}      />
  <Route path="/products" element={<Products />}  />
  <Route path="/products/:id" element={<Details />}  />
  <Route path="/about" element={<About />}  />
  <Route path="/contact" element={<Contact />}  />
  <Route path="/login" element={<Login />}  />
  <Route path="/register" element={<Register />}  />
  <Route path="/Cart" element={<Cart />}  />
  <Route path="/CheckOut" element={<CheckOut />}  />
  <Route path="*" element={<PageNotFound />}  />
 </Routes>
 <Footer/>
 </BrowserRouter>
   </>
  );
}

export default App;
