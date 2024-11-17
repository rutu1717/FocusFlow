import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import StuImg from "../assets/ft.png";
import { ToastContainer,toast } from "react-toastify";
import axios from "axios";
function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
  const handleLogin = async (email,password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      toast.success("Login Successful");
      setTimeout(()=>{
        navigate('/');
      },2000)
    } catch (error) {
      console.error("Login error", error);
      alert("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <div style={styles.formWrapper}>
          <h2 style={styles.title}>Login</h2>
          <input
            type="email"
            placeholder="Email"
            ref={email}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            ref={password}
            style={styles.input}
          />
          <button onClick={()=>{handleLogin(email.current.value,password.current.value)}} style={styles.button}>
            Log In
          </button>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ fontSize: "18px", fontFamily:"monospace"}}>Don't have an account?</p>
            <a
              style={{ marginTop: "18px", textDecoration: "underline" }}
              href="/signup"
            >
              Signup
            </a>
          </div>
        </div>
      </div>
      <div style={styles.rightSide}>
        <img src={StuImg} alt="Login illustration" style={styles.image} />
      </div>
      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#0b0127",
    height: "100vh",
  },
  formWrapper: {
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    border: "2px solid #1976D2",
    padding: "30px",
    borderRadius: "8px",
    backgroundColor: "0b0127",
    width: "350px",
  },
  title: {
    color: "#1976D2",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "34px",
    fontFamily: "monospace",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #444",
    borderRadius: "4px",
    fontFamily: "monospace",
    backgroundColor: "#333",
    color: "white",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#1976D2",
    color: "white",
    border: "none",
    fontFamily: "monospace",
    fontWeight: "bold",
    borderRadius: "4px",
    cursor: "pointer",
  },
  leftSide: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#0b0127",
  },
  rightSide: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "120%",
    height: "90%",
    marginRight: "100px",
    objectFit: "cover",
  },
};

export default Login;
