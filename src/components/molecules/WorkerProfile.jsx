import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; 
import React from 'react';
import { Avatar, Box, Flex, Text, Themed } from 'theme-ui';
import { theme } from '../../styles/theme';

const WorkerProfile = ({human}) => {
  return (
    <Flex 
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `1px solid ${theme.colors.text}`, 
      }}>
      <Flex sx={{justifyContent: 'flex-start', alignItems: 'center'}}  pb={4}>
        <Avatar src={"https://placekitten.com/200/200"} mr={6} />
        <Box>
          <Themed.h3>{human.name}</Themed.h3>
          <Text sx={{fontSize: '13px'}}>{human.company.name} · {human.company.catchPhrase}</Text>
        </Box>
      </Flex>
      {/* TODO: This should be a button eventually */}
      <FontAwesomeIcon icon={solid('chevron-right')} color={theme.colors.text} />
    </Flex>
  )
}

export default WorkerProfile;