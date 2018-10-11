/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import Store from './stores';

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root') || document.createElement('div'));
