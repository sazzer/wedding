import {name} from './second';

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, {name()}</h1>,
  document.getElementById('example')
);
