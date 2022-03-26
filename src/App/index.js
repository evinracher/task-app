import React from 'react';
import './App.css';
import { Container } from './Container';
import { TaskProvider } from '../Context';

const App = () => {
  return (
    <TaskProvider>
      <Container />
    </TaskProvider>
  );
}

export default App;
