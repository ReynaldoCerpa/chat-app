import React, { ChangeEvent } from 'react';
import { Container } from '@mantine/core';
import InputSection from '../components/InputSection';
import MessageContainer from '../components/MessageContainer';

const Home: React.FC = () => {
  const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  return (
    <Container
      fluid
      padding={0}
      className="flex flex-col h-screen bg-background"
    >
      <MessageContainer/>
      <InputSection/>
    </Container>
  );
};

export default Home;