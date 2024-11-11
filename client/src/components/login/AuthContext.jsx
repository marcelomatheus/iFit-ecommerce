import React, { createContext, useState, useEffect, useContext } from "react"; 

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };
      
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        
        if (storedToken) {
            setToken(storedToken);
        }

        setLoading(false); // Move para garantir que o estado `token` já foi atualizado
    }, []);

    return (
        <AuthContext.Provider value={{ token, setToken, loading, logout }}>
            {!loading && children} {/* Renderizar os children apenas após `loading` ser `false` */}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
