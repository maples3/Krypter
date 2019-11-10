import React from 'react';
import './App.css';
import InputBox from '../InputBox/InputBox';
import KeySection from '../KeySection/KeySection';
import OutputBox from '../OutputBox/OutputBox';
import { Provider } from 'react-redux';
import { store } from '../../store/configureStore';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <InputBox />
        <KeySection />
        <OutputBox />
      </div>
    </Provider>
  );
}

export default App;
