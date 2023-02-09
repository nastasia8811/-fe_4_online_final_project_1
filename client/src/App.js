import './App.css';
import {Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Catalog from "./Components/Catalog";
import Basket from "./Components/Pages/Backet";
import Main from "./Components/Main";
import CheckOut from "./Components/Pages/CheckOut";
import Contacts from "./Components/Pages/Contacts";
import Favorites from "./Components/Pages/Favorites";
import Product from "./Components/Pages/ Product/ Product";




const App = () =>  {


  return(
      <>
          <Header/>
          <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/catalog" element={<Catalog/>} />
              <Route path="/basket" element={<Basket/>} />
              <Route path="/favorites" element={<Favorites/>} />
              <Route path="/checkOut" element={<CheckOut/>} />
              <Route path="/product" element={<Product/>} />

          </Routes>

          <Footer/>

      </>
  )
}
export default App
