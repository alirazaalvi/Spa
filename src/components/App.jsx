import React from 'react';
import TickerContainer from './ticker/TickerContainer'; // eslint-disable-line import/no-named-as-default

require('milligram/dist/milligram.css');
require('./../styles.css');

const App = () => (
  <div className="container">
    <TickerContainer />
  </div>
);

export default App;
