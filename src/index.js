require('file-loader?name=[name].[ext]!./index.html')


import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/app';
import './app/app.sass';
//import './images/react.png';




const appElement = document.getElementById('app');


ReactDOM.render(<App />, appElement)