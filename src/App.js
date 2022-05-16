import React from 'react';
import './App.css';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider } from './Auth';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

function App() {
  return (
  <AuthProvider>
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route exact path='/' element={<PrivateRoute/>}>
          <Route exact path='/' element={<Home/>}/>
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </ThemeProvider>
  </AuthProvider>
  );
}

export default App;
