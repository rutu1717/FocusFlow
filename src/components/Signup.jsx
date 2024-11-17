import React, { useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';
import { border, borderBottom, borderRadius, boxSizing, color, fontFamily, fontSize, fontWeight, height, padding, textAlign, width } from '@mui/system';

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
  const handleSignup = async (email,password) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        email,
        password
      });
      console.log(response.data);
      toast.success("Signup Successful");
      setTimeout(()=>{
        navigate('/');
      },2000)
    } catch (error) {
      console.error("Signup error", error);
      alert("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
      <h2 style={styles.title}>Signup</h2>
      <input style={styles.input} type="email" placeholder="Email" ref={emailRef}/>
      <input style={styles.input} type="password" placeholder="Password" ref={passwordRef} />
      <button style={styles.button} onClick={()=>{handleSignup(emailRef.current.value,passwordRef.current.value)}}>Sign Up</button>
      </div>
      <ToastContainer position='top-right'/>
    </div>
  );
}
const styles ={
  container:{
    display: 'flex',
    justifyContent:"center",
    alignItems: 'center',
    height:"100vh"
  },
 formWrapper:{
  height:"50%",
  border:"2px solid #1976D2",
  padding:"20px",
  borderRadius:"8px",
  width:"450px"
 },
 title:{
  fontFamily:"monospace",
  textAlign:"center",
  marginBottom:"30px",
  fontSize:"30px",
  color:"#1976D2"
 },
 input:{
 width:"100%",
 marginBottom:"25px",
 padding:"10px",
 height:"15%",
 borderRadius:"8px",
 boxSizing:"border-box",
 color: "white",
 fontFamily:"monospace",
 backgroundColor: "#333",
 border: "1px solid #444",
 },
 button:{
  width:"100%",
  fontWeight:"bold",
  color:"white",
  height:"15%",
  fontSize:"18px",
  padding:"10px",
  backgroundColor:"#1976D2",
  fontFamily:"monospace",
  cursor: "pointer"
 }
 
}
export default Signup;
