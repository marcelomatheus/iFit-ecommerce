import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/menu/NavbarMenu"
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavbarMenu />}>
            <Route index element={<Products />}/>
            <Route path='wishList' element={<WishList />}/>
            <Route path='shoppingCart' element={<ShoppingCart />}/>
            <Route path='userPurchases' element={<UserPurchases />}/>
            <Route path='userAccount' element={<UserAccount />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
