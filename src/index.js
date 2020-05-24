import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';

let rootElement = document.querySelector('#root');
ReactDOM.render(<Counter />, rootElement);
