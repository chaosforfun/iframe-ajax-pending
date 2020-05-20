import '@babel/polyfill';
import 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import App from './app';

const root = document.getElementById('root');

render(<App />, root);
