

import React, { Fragment, useEffect, useState } from 'react';
import App from './App' ;
import Rooter from './components/Rooter/Rooter' ;
import Lottery from './components/Lottery/Lottery'
import Carousel from './components/Carousel/Carousel'

import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { StoreMallDirectory } from '@material-ui/icons';




function Routing() {

   
    return (
        <div>
            <Switch>
            <Route path="/app" component={App} />                   
            <Route path="/lottery" component={Lottery} />                   
            <Route path="/carousal" component={Carousel} />                   
            <Route path="/" component={Rooter} />                   
           </Switch>
        </div>
    )
 

}

export default Routing