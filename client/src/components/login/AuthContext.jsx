import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        window.location.reload();
      };
    useEffect(()=>{
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
        setLoading(false);
    }, []);
    return (
        <AuthContext.Provider value={{token, setToken, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};