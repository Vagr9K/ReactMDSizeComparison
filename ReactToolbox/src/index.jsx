import React from 'react';
import ReactDOM from 'react-dom';
/* import from 'react-toolbox' so everything gets included */
import { Button } from 'react-toolbox';

const App = () => (
  <Button label="Test" />
);

ReactDOM.render(
  <App />,
  document.getElementById('root'));
