import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Globals from './styles/globals';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <Globals />
  </>
);
export default App;
