import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Container, Grid, Text, Themed } from "theme-ui";
import { auth } from "../firebase";
import Callout from "./molecules/Callout";
import ListPeople from "./organisms/ListPeople";
import Nav from "./organisms/Nav";


const Home = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [])

  return (
    <Container bg="bg" sx={{ height: "100%", display: "flex", flexDirection: "column", pb: 6}}> 
      <Nav />
      <Container variant="wrapper">
        <Themed.h1>Your company dashboard</Themed.h1>
        <Text>Manage people, view history & see how your projects are doing.</Text>
        {/* ---Main content--- */}
        <Grid
          mt={4}
          gap={5} 
          columns={[2, '2fr 1fr']} 
          sx={{ 
            '@media screen and (max-width: 50em)': {
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
              } 
          }}>
          <ListPeople />
          <Callout />
        </Grid>
      </Container>
    </Container>
  );
};

export default Home;
