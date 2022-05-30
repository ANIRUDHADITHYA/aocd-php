import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (user) => {
        setUser(user);
        localStorage.setItem("isLogin", "true")
    }

    const logout = () => {
        setUser(null);
        localStorage.setItem("isLogin", "false")
        localStorage.setItem("username", "")
    }

    return (<AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>)

}

export const useAuth = () =>{
    return useContext(AuthContext)
}