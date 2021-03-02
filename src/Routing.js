

import React, { Fragment, useEffect, useState } from 'react';
import App from './App' ;
import Rooter from './components/Rooter/Rooter' ;
import Form from './components/Form/Form'
import Test from './components/Test/Test'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";


function Routing() {

    return (
        <div>
            <Switch>
            <Route path="/test" component={Test} />                   
            <Route path="/app" component={App} />                   
            <Route path="/" component={Rooter} />                   
           </Switch>
        </div>
    )
 
     

}

export default Routing