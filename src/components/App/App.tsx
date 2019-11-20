import React from 'react';
import './App.css';
import InputBox from '../InputBox/InputBox';
import OutputBox from '../OutputBox/OutputBox';
import { Provider } from 'react-redux';
import { store } from '../../store/configureStore';
import CiphersSection from '../CiphersSection/CiphersSection';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <InputBox />
        <CiphersSection />
        <OutputBox />
      </div>
    </Provider>
  );
}

export default App;
