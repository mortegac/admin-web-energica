import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Layouts from './layouts';
import Routes from './Routes';

import './css/tailwind.css';
import './css/main.css';
import './css/animate.css';
import './css/_components.css';

const Wrapper = ({children}) => {
  return <Layouts>{children}</Layouts>;
}

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes />
      </Wrapper>
    </BrowserRouter>
  )
}
export default App;
