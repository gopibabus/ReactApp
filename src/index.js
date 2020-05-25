import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import CounterApp from './apps/CounterApp';
import MoviesApp from './apps/MoviesApp';

let rootElement = document.querySelector('#root');
let app = (
	<div>
		<MoviesApp />
		<CounterApp />
	</div>
);
ReactDOM.render(app, rootElement);
