import 'sanitize.css';
import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

import App from './components/App/App.jsx';

const el = document.querySelector('#root');

ReactDOM.render(<App />, el);
