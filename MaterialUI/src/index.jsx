import React from 'react';
import ReactDOM from 'react-dom';
/* import from 'material-ui' so everything gets included */
import Button from 'material-ui';

const App = () => (
  <Button label="Test" />
);

ReactDOM.render(
  <App />,
  document.getElementById('root'));
