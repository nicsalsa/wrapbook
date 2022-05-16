import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { Box, Button, Flex, NavLink } from 'theme-ui';
import { auth } from '../../firebase';


const Nav = () => {
  // eslint-disable-next-line no-use-before-define
  const [user, setUser] = useState(user)
  const currentPathIsLogin = useMatch('/login');
  const currentPathIsSignup = useMatch('/signup');

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [])


  const logout = async (e) => {
      e.preventDefault();
      try {
        await signOut(auth)
      } catch (error) {
        console.log(error);
      }
    }

  // Conditionally render Nav links based on if user exists
  const userLinks = (user) => {
    // Detects current route 
    // and displays alternate option for accessing Admin/Home page
    if(!user || !user.email) {
      return (
        <>
          {currentPathIsSignup && (
            <NavLink href="/login">
              Login
            </NavLink>
          )}      
          {currentPathIsLogin && (
            <Button as="a" variant="navButton" href="/signup">
              Signup
            </Button>
          )}
        </>
      )
    }
    return (
      <>
        <NavLink href="/settings">
          Settings
        </NavLink>
        <Button variant="navButton" onClick={(e) => logout(e)}>
          Sign out
        </Button>
      </>
    )
  }

  return (
    <Flex 
      as="nav" 
      sx={{
        py: 5,
        justifyContent: "space-between",
        maxWidth: "1080px",
        width: ["95%", "85%"],
        margin: "0 auto"
      }}>
        <NavLink href="/" sx={{pl: "0", fontWeight: 700}}>
          Wrapbook
        </NavLink>
        <Box>
          {userLinks(user)}
        </Box>
    </Flex>
  )
}

export default Nav;