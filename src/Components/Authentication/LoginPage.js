import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from './Auth';
import "./LoginPage.css";

const LoginPage =() =>{

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [passwords, setPassword] = useState("");
    const auth = useAuth()
    const Login = () =>{
     
        if(username === "lp012022" && passwords === "lavaVini@123"){
            alert("Welcome, Lavanya Prabakar");
            auth.login("Lavanya Prabakar");
            navigate("/AOCD-Admin/Portal", {replace: true})
            localStorage.setItem("isLogin", "true");
        }
        else{
            alert("Invalid Password or Username")
            navigate("/", {replace: true})
            }
        };
        


    return(
        <div>
            <div className="Login">
                <h1>Login</h1>
                <div>
                <input type="text" placeholder="username" onChange={(e)=>{
                    setUsername(e.target.value);
                }}></input>
                <input type="password" placeholder="password" onChange={(e)=>{
                    setPassword(e.target.value);
                }}></input>
                <button onClick={Login}>Login</button>
                </div>
            </div>
        </div>
        
    );
}



export default LoginPage;
