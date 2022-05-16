import React from 'react';
import { Flex } from 'theme-ui';
import IconText from './IconText';

 const WorkerStatus = () => {
   return (
    <Flex>
      <IconText iconName="check" text="Account created" color />
      <IconText iconName="check" text="Onboarded" color />
    </Flex>
   );
 };

 export default WorkerStatus;