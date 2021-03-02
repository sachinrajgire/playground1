

import React, { Fragment, useEffect, useState } from 'react';
import App from './App' ;
import Form from './components/Form/Form'
import {
    Switch,
    Route,
  } from "react-router-dom";


function Routing() {

    return (
        <div>
            <App />
            <Switch>
            <Route path="/form" component={Form} />                   
        </Switch>
        </div>
    )
 
     

}

export default Routing