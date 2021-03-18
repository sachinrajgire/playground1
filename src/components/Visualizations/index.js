import React, { Fragment, useEffect, useState } from 'react';
import TopEmployers from './TopEmployers/TopEmployers';
import NavBar from '../NavBar/NavBar';
import JobTitle from './JobTitle/JobTitle'


  function Visualizations(){

    return <div>
    <NavBar>
    <TopEmployers />
    <JobTitle />
    </NavBar>    
</div>
  }

  export default Visualizations