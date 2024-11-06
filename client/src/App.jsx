import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarMenu from "./components/menu/NavbarMenu";
import ProductsPage from './routes/pages/ProductsPage';
import WishListPage from './routes/pages/WishListPage' 
import './App.css'
import { AuthContext } from './components/login/AuthContext';

function App() {
  const {token, loading } = useContext(AuthContext)
  if(loading){
    return (
      <div>Carregando</div>
    )
  }
  if(!token){
    return <Navigate to="/login" replace/>
  }
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
