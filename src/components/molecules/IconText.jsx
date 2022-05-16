import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; 
import React from 'react';
import { Flex, Text } from 'theme-ui';
import { theme } from '../../styles/theme';

// This renders the Icon and Text component
const IconText = ({iconName, text, dollarAmount, mr, border, color}) => {
  const icons = {
    clock: solid('clock'),
    clipboard: solid('clipboard-list'),
    coins: solid('coins'),
    check: solid('circle-check')
  }
  const renderText = dollarAmount ? `${text}: $ ${dollarAmount}` : `${text}`;
  return (
    <Flex sx={{
      py: 1,
      px: 3,
      mr,
      fontSize: 0,
      justifyContent: 'flex-start',
      alignItems: 'center',
      bg: "white",
      color: "text",
      border: `1px solid ${border ? theme.colors.text : 'none'}`,
      borderRadius: "default",
    }}>
      <FontAwesomeIcon icon={icons[iconName]} size="2x" color={color ? 'green' : theme.colors.text} />
      <Text ml={1} sx={{fontSize: 0}}>{renderText}</Text>
    </Flex>
  )
};

export default IconText;