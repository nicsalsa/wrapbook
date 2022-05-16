import React, { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import {auth} from "../firebase.js";
import { AuthContext } from "../Auth.js";
import { Box, Button, Input, Text } from 'theme-ui'
import { signInWithEmailAndPassword } from 'firebase/auth';
import LayoutRegister from "./layouts/LayoutRegister.jsx";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const history = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const canLogin = loginEmail && loginPassword;

  // If user is logged in, continue to Home
  if (currentUser) {
    return <Navigate to="/" />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();   
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log("User logged in:", user);
      history("/");

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <LayoutRegister>
      <h2>Get started with Wrapbook</h2>
      <Text>Tackle timecards, payroll, and insurance with Wrapbook, a powerful and easy to use platform for managing productions.</Text>
      {/* Form to login user */}
      {/* TODO: Use FetchProvidersForEmail to check if email exists before showing the password field */}
      <Box as="form" onSubmit={(e) => handleLogin(e)} my={6}>
        <Input 
          type="text" 
          placeholder="Email..." 
          value={loginEmail} 
          mb={[4]}
          onChange={(e) => setLoginEmail(e.target.value)} 
          sx={{
            borderColor: loginEmail ? "green" : "inputBg",
            bg: loginEmail ? "white" : "inputBg"
          }}
          />
        <Input
          type="password"
          placeholder="Password..." 
          value={loginPassword} 
          onChange={(e) => setLoginPassword(e.target.value)}
          sx={{
            borderColor: loginPassword ? "green" : "inputBg",
            bg: loginPassword ? "white" : "inputBg"
          }}
          />
        <Button 
          variant="muted" 
          type="submit" 
          sx={{
            width: "100%", 
            cursor: canLogin ? "pointer" : "not-allowed",
            bg: canLogin ? "primary" : "buttonBgMuted",
          }}>
            Continue to Wrapbook
          </Button>
      </Box>
    </LayoutRegister>
  );
};

export default Login;
