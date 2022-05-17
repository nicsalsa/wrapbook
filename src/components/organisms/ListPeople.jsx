import React, { useEffect, useState } from 'react';
import { Container, Flex } from 'theme-ui';
import WorkerProfile from '../molecules/WorkerProfile';
import WorkerPayrollStatus from '../molecules/WorkerPayrollStatus';
import WorkerStatus from '../molecules/WorkerStatus';

// --- Main component ---
const ListPeople = () => {
  const [workers, setWorkers] = useState([]);
  useEffect( () => {
    handleJSON();
  }, []);

  const handleJSON = () => {
    const proxiedUrl = 'https://castandcrew.herokuapp.com/people';
    const url = new URL('http://proxy.hackeryou.com');
    url.search = new URLSearchParams({
      reqUrl: proxiedUrl,
    });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("Cast and Crew data:", data);
        setWorkers(data.collection);
      });
  }
  // Map through api data to get workers
  const list = workers.map((human) => {
    return (
      <Container 
        variant="modal" 
        sx={{
          width: "100%", 
          boxShadow: 'none',
          maxWidth: '750px',
          mb: 6
        }} 
        key={human.id}
      >
        {/* --- List Wrapper begins --- */}
        <Flex sx={{
          flexDirection: 'column',
          rowGap: 4
        }}>
          <WorkerProfile human={human} />
          <WorkerPayrollStatus 
            pendingAmount="7.00" 
            approvedAmount="62.12" 
            paidAmount="0.00" 
          />
         <WorkerStatus />
        </Flex>
        {/* --- List wrapper ends --- */}
      </Container>
    )
  });

  return (
    <Container width="100%" height="100%">
      {list}
    </Container>
  );
};

export default ListPeople;
