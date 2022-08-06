import * as React from 'react';
import { Seat } from './components/Seat';
import { IController } from './core/controller';

export interface AppProps {
  controller: IController
}

const App: React.FC<AppProps> = (props) => {
  
  const s = "3001";

  return (
    <>
      <div>HELLO FROM BAR</div>
      <Seat id={s} url={`http://localhost:${s}/bundle.js`}></Seat>
    </>
  );
}

export default App;

