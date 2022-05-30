import { Navigate } from "react-router-dom";

const RequireAuth = ({children}) => {
    if (localStorage.getItem("isLogin") === "true") {
            return children;
        }

    else{
        return <Navigate to="/" />
    }
}


export default RequireAuth;