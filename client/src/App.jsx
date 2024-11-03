import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/menu/NavbarMenu";
import ProductsPage from './routes/pages/ProductsPage';
import WishListPage from './routes/pages/WishListPage' 
import './App.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavbarMenu />}>
            <Route index element={<ProductsPage />}/>
            

        </Route>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
