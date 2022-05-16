import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Button, Input, Text, Themed } from "theme-ui";
import { auth } from "../firebase";
import LayoutRegister from "./layouts/LayoutRegister";

const SignUp = () => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const canSignup = signupEmail && signupPassword;
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      console.log("User signed up:", user);
      setSignupEmail("");
      setSignupPassword("");
      navigate("/");
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <LayoutRegister>
      <Themed.h2>Get started with Wrapbook</Themed.h2>
      <Text>Tackle timecards, payroll, and insurance with Wrapbook, a powerful and easy to use platform for managing productions.</Text>
      {/* Form to sign up user */}
      {/* TODO: Use FetchProvidersForEmail to check if email exists before showing the password field */}
      <Box as="form" onSubmit={(e) => handleSignup(e)} my={6}>
        <Input 
          type="text" 
          placeholder="Email..." 
          value={signupEmail} 
          mb={[4]}
          onChange={(e) => setSignupEmail(e.target.value)} 
          sx={{
            borderColor: signupEmail ? "green" : "inputBg",
            bg: signupEmail ? "white" : "inputBg"
          }}
          />
        <Input
          type="password"
          placeholder="Password..." 
          value={signupPassword} 
          onChange={(e) => setSignupPassword(e.target.value)}
          sx={{
            borderColor: signupPassword ? "green" : "inputBg",
            bg: signupPassword ? "white" : "inputBg"
          }}
          />
        <Button 
          variant="muted" 
          type="submit" 
          sx={{
            width: "100%", 
            cursor: canSignup ? "pointer" : "not-allowed",
            bg: canSignup ? "primary" : "buttonBgMuted",
          }}>
            Continue to Wrapbook
          </Button>
      </Box>
    </LayoutRegister>
  );
};

export default SignUp;
