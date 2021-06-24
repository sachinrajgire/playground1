

import React, { Fragment, useEffect, useState } from 'react';
import App from './App' ;
import Rooter from './components/Rooter/Rooter' ;
import Lottery from './components/Lottery/Lottery'
import PlacementData from './components/PlacementData/PlacementData';
import Administration from './components/Administration';
import Visualizations from './components/Visualizations';
import Sponsors from './components/Sponsor';
import EditRecordLauncher from './components/EditRecord/EditRecordLauncher';
import NewRecord from './components/EditRecord/NewRecord';
import NewCompany from './components/EditCompany/NewCompany';
import NewSponsor from './components/Sponsor/NewSponsor';
import EditCompanyLauncher from './components/EditCompany/EditCompanyLauncher';
import Login from './components/Login/Login';
import MenuStat from './components/MenuStats/MenuStat';
import { useAuth0 } from "@auth0/auth0-react";

import {
    Switch,
    Route,
    Redirect,
    useHistory
  } from "react-router-dom";
import EditRecord from './components/EditRecord/EditRecord';


function Routing() {
  // const {
  //       isLoading,
  //       isAuthenticated,
  //       error,
  //       user,
  //       loginWithRedirect,
  //       logout,
  //     } = useAuth0();

    return (
        <div>
            <Switch>
            <Route path="/app" component={App} />                   
            <Route path="/lottery" component={Lottery} />                   
            <Route path="/visualizations" component={Visualizations} />                   
            <Route path="/editrecord/:Id" component={EditRecordLauncher} />                   
            <Route path="/createnewrecord" component={NewRecord} />                   
            <Route path="/editcompany/:Id" component={EditCompanyLauncher} />                  
            <Route path="/createnewcompany" component={NewCompany} />                  
            <Route path="/createnewrecord" component={EditRecord} />                   
            <Route path="/sponsor" component={Sponsors} />                   
            <Route path="/createnewsponsor" component={NewSponsor} />                   
            <Route path="/login" component={Login} />                   
            <Route path="/administration" component={Administration} />
            <Route path="/placementdata" component={PlacementData} />
            <Route path="/menustat" component={MenuStat}/>
            <Route path="/" component={App} />   

            {/* {isAuthenticated && user.email==='sachin@wynisco.com'
          ? <Route path="/dashboard" component={Dashboard} />
          : <Route path="/dashboa" component={Login} />
          
        } */}

           </Switch>
        </div>
    )
 

}

export default Routing


