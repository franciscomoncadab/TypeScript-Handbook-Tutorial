import React from 'react';
import './App.css';
import Greeting from './components/Greeting';


function App() {
  return (
    <Greeting
      name="typescript"
      enthusiasmLevel={10}
    />
  );
}

export default App;
