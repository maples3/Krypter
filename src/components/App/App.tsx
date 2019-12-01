import React from 'react';
import './App.scss';
import InputBox from '../InputBox/InputBox';
import OutputBox from '../OutputBox/OutputBox';
import { Provider } from 'react-redux';
import { store } from '../../store/configureStore';
import CiphersSection from '../CiphersSection/CiphersSection';
import Credits from '../Credits/Credits';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Krypter</h1>
        <InputBox />
        <CiphersSection />
        <OutputBox />
        <Credits />
      </div>
    </Provider>
  );
}

export default App;
