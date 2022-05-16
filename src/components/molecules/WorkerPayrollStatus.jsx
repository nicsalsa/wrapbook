import React from 'react';
import { Flex } from 'theme-ui';
import IconText from './IconText';
import { theme } from '../../styles/theme';

const WorkerPayrollStatus = ({pendingAmount, approvedAmount, paidAmount}) => {
  return (
    <Flex 
      sx={{
        borderBottom: `1px solid ${theme.colors.text}`, 
        pb: 4,
        '@media screen and (max-width: 50em)': {
          display: 'none'
        }
      }}>
      <IconText border iconName="clock" text="Pending" dollarAmount="7.00" mr={4} />
      <IconText border iconName="clipboard" text="Approved" dollarAmount="62.12" mr={4} />
      <IconText border iconName="coins" text="Paid" dollarAmount="0.00" />
    </Flex>
  )
}

export default WorkerPayrollStatus;
