import React from 'react';
import './App.css';
import InputBox from '../InputBox/InputBox';
import KeySection from '../KeySection/KeySection';
import OutputBox from '../OutputBox/OutputBox';

const App: React.FC = () => {
  return (
    <div className="App">
      <InputBox></InputBox>
      <KeySection></KeySection>
      <OutputBox></OutputBox>
    </div>
  );
}

export default App;
