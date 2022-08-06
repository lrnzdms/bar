import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import { Controller } from './core/controller';
import './index.css';

const controller = new Controller("", () => Promise.resolve(""), "", [], "");
const root = document.getElementById('root');
ReactDOM.render(<App controller={controller} />, root);