import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postLogin from "../api/post-login.js";
import { useAuth } from "../hooks/use-auth.js";
import "./LoginForm.css";
import Footer from "./Footer.jsx";

function LoginForm() {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();  

    const [credentials, setCredentials] = useState({
        username: "", 
        password: "", 
    })

    const handleChange = (event) => {
        const {id, value} = event.target;
        setCredentials((prevCredentials)=> ({
            ...prevCredentials,
            [id]: value,
        }))
    };
        
    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postLogin(
                credentials.username, 
                credentials.password
            ).then((response) => {
                window.localStorage.setItem("token", response.token);
                setAuth({
                    token: response.token,
                });
                navigate("/");
            });
        }
    };

    return (
    <>
        <form>
            <div className="loginForm-card">
                <h3>Login</h3>
                <p className="bodyCopy">Log in to your account to manage your fundraisers and donations.</p>
                <label htmlFor="username">Username:</label>
                <input 
                type="text" 
                id="username" 
                placeholder = "Enter your username" 
                onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input 
                type="password" 
                id="password" 
                placeholder = "Enter your password" 
                onChange={handleChange}
                />
            <button className="btn-primary" type="submit" onClick={handleSubmit}>
                Login
            </button>
            </div>
        </form>
        <Footer />
    </>
    );
}

export default LoginForm;