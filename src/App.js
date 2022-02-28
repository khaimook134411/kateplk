import Navbar from './component/navbar/navbar'
import Home from './component/home/home'
import About from './component/about us/about'
import Contact from './component/contact/contact'
import Product from './component/product/navProduct/product'
import IndexProduct from './component/product/indexProduct/indexProduct'
import IndustrialProduct from './component/product/Industrial/industrialProduct'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Product />
        <Routes>

          <Route path="/product" index element={<IndexProduct /> }></Route>
          <Route path="/product/industrial" element={<IndustrialProduct />}></Route>

        </Routes>

      </BrowserRouter> */}

    </div>
  );
}

export default App;
