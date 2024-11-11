import { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavbarMenu from './components/menu/NavbarMenu';
import ProductsPage from './routes/pages/ProductsPage';
import WishListPage from './routes/pages/WishListPage';
import './App.css';
import AuthProvider, { useAuth } from './components/login/AuthContext';


function AppContent() {
  const { token, loading } = useAuth();
  console.log(token, loading)
  if (loading) {
    return <div>Carregando...</div>;
  }
  
  if (!token) {
    return(
      <>
        <div>Não logado</div>
      </>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarMenu />}>
          <Route index element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
