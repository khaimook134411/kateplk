import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// import './index.css';
import App from './App';
import About from './component/about us/about'
import Contact from './component/contact/contact'
import Product from './component/product/product'
import Home from './component/home/home'
import Navbar from './component/navbar/navbar'
import Footer from './component/footer/footer'
import Popup from './component/popup/popup'

render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" index element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes> 
    <Popup />
    <Footer /> 
  </BrowserRouter>,
  document.getElementById("root")
);