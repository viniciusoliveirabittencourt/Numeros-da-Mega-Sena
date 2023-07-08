import { useState } from 'react';
import GetName from './components/GetName';
import './App.css';
import Greeting from './components/Greeting';
import LuckyNumbers from './components/LuckyNumbers';

function App() {
  const [name, setName] = useState('');

  return (
    <>
      <GetName setName={ setName } />
      <Greeting name={ name } />
      <LuckyNumbers />
    </>
  );
}

export default App;
