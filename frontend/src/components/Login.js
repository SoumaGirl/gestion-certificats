import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import loginPic from "../assets/login-pic.png"; // Ensure the image is stored correctly

const Login = () => {
    const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
        navigate("/dashboard");
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <h1 className="logo">MYCERTS</h1>
                <img src={loginPic} alt="Login Illustration" className="login-image" />
                <p className="slogan" style={{ fontStyle: "italic" }}>because every achievement matters.</p>
            </div>
            <div className="login-right">
                <h1>Login</h1>
                <p>Welcome Back! Please Login To Your Account.</p>
                <form onSubmit={handleSubmit}>
                    <label>Full Name :</label>
                    <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
                    <label>Email :</label>
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <label>Password :</label>
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
