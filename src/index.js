import './styles/app.sass';
import React from 'react';
import {render} from 'react-dom';

//var template = require('./templates/index.pug');
//var locals = { };
//var html = template(locals);

render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
