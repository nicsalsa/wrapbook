import React from 'react';
import { Container, Flex } from 'theme-ui';
import Nav from '../organisms/Nav';

const LayoutRegister = ({children}) => {
  return (
    <Container bg="bg" sx={{ height: "100vh" }}>
      <Nav />
      <Flex sx={{justifyContent: "center", alignItems: "center", height: "calc(100% - 86px)"}}>
        <Container variant="modal">
          {children}
        </Container>
      </Flex>
    </Container>

  )
};

export default LayoutRegister;