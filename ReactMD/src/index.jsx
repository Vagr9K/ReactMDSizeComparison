import React from 'react';
import ReactDOM from 'react-dom';
/* Braces force the whole library to be loaded into the bundle. */
import { NavigationDrawer } from 'react-md/lib/NavigationDrawers';
import './theme.global.scss';


const App = () => (
  <NavigationDrawer
    drawerTitle="Test"
    toolbarTitle="React MD size test"
  >
    <p>test</p>
  </NavigationDrawer>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'));
