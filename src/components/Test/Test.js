import React from 'react';
import { Link, Redirect, useHistory,useParams } from "react-router-dom";


function Test() {
let params = useParams()
let hist = useHistory()
console.log(params,'params');
console.log(hist,'hist');
// console.log(children,'children');
 return (
    <div style={{margin:'100px'}}>
     WELCOME TO TESTING - Sachin's Private Playground . 
     
    </div>)
}


export default Test
