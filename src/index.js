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
import Product from './component/product/navProduct/product'
import Home from './component/home/home'
import Navbar from './component/navbar/navbar'
import Footer from './component/footer/footer'
import Popup from './component/popup/popup'
import IndustrialProduct from './component/product/Industrial/industrialProduct'
import IndexProduct from './component/product/indexProduct/indexProduct'

render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" index element={<Home />}></Route>
      <Route path="/product" element={<Product />}>
        {/* <Route path="indexProduct" element={<IndexProduct />}/>
        <Route path="/industrial" element={<IndustrialProduct />}/> */}
      </Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    <Popup />
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);