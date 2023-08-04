import React from 'react';
import './App.css';
import Routeur from './routes/Routeur';
// import MonComposant from './composants/monComposant/MonComposant';
// import Welcome from './welcome/Welcome';
// import MonComposant from './composants/props/MonComposant';
// import Compteur from './composants/useState/Compteur';

function App() {
  return (
    <div className="App">
      {/* <MonComposant/>


      <Welcome name='Jacques'/>
      <Welcome name='Michel'/>
      <Welcome name='Phil'/> */}

      {/* <MonComposant nom='Jacques' age={54}/>
      <MonComposant nom='Michel' age={24}/> */}

      {/* <Compteur/> */}

      {/* <HelloWorld/> */}
      {/* <CountUseEffect/> */}
      <Routeur/>
    </div>
  );
}

export default App;
