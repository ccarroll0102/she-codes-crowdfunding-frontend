import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postSignUp from "../api/post-signup";
import "./SignUpForm.css";
import Footer from "./Footer.jsx";

function SignUpForm() {
    const navigate = useNavigate();  
    const [credentials, setCredentials] = useState({
        username: "", 
        email: "",
        password: "", 
    });

    const handleChange = (event) => {
        const {id, value} = event.target;
        setCredentials((prevCredentials)=> ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.email && credentials.password) {
            postSignUp(
                credentials.username,
                credentials.email,
                credentials.password
            ).then((response) => {
                window.localStorage.setItem("token", response.token);
                navigate("/");
            });
        }
    };

    return (
        <>
            <form>
                <div className="SignUpForm-card">
                    <h3>Sign Up</h3>
                    <p className="bodyCopy">Create an account to manage your fundraisers and donations.</p>
                    <label htmlFor="username">Username:</label>
                    <input 
                    type="text"
                    id="username"
                    placeholder = "Enter your username" 
                    onChange={handleChange}
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder = "Enter your email" 
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
                        Sign Up
                    </button>   
                </div>
            </form>
            <Footer />
        </>
    );
}

export default SignUpForm;