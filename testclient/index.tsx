import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App:React.FC<{aid:string}> = props => {

  return <div>
    {`Hello from ${props.aid}`}
  </div>
}

const root = document.getElementById("FOO");
ReactDOM.render(<App aid="BAR"/>, root);