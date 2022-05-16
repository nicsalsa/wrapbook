import React from 'react';
import { Avatar, Box, Button, Container, Flex, Input, Text, Themed } from 'theme-ui';

const Callout = () => {
  const handleClick = (e) => {
    const copiedLink = e.target[0].value;
    e.preventDefault();
    navigator.clipboard.writeText(copiedLink);
    console.log(`Copied ${copiedLink} to clipboard`)
  }

  return (
    <Container 
      bg="secondary" 
      sx={{
        maxHeight: ['360px', null, '400px', '340px'], 
        borderRadius: 'default'
      }}>
      <Flex sx={{padding: 5, gap: 3, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Avatar src={"https://placekitten.com/200/200"} size={96} />
        <Themed.h3>Invite people to this project</Themed.h3>
        <Text sx={{fontSize: 1, lineHeight: 2, textAlign: 'center'}}>Share the following link with your team to have them sign up and send you their invoices.</Text>
        <Box 
          as="form" 
          sx={{width: '100%', py: "0px"}}
          onSubmit={(e) => handleClick(e)}
          >
          <Input mb={5} readOnly type="text" variant="callout" value="https://wrapbook.com/i/j93kda92"/>
          <Button type="submit" variant="copyButton">Copy to clipboard</Button>
        </Box>
      </Flex>
    </Container>
  )
}

export default Callout;