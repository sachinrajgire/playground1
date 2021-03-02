import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import reportWebVitals from './reportWebVitals';
import Form from './components/Form/Form'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
       <Routing />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// let str=`I can code all Night long`
// let regex=/\s[a-z]+/gm

// let ret= str.replace(regex,(arg)=>{

//   console.log(arg,'arg');
// let play= arg.charAt(1).toUpperCase() + arg.slice(2)
// console.log(play,'play');
// return ` ${play}`
// })

// let str=`Three girls went to forest .Monkey said yee yaaaaaw `
// let regex=/([a-z])\1+/gmi

// let ret = str.match(regex)
// console.log(ret,'ret');
// return ret.join("")

// let str=`When boy went to boarding school, he was fine`
// let regex=/\sb[a-z]+/gmi

// let ret = str.match(regex)
// console.log(ret,'ret');
// return ret[0].trim().length  