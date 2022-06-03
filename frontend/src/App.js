import React from 'react'
import './extensions'
import Routes from './routes';
import Contexts from './contexts'

function App() {
  return (
   <Contexts>
     <Routes />
   </Contexts>
  );
}

export default App;
