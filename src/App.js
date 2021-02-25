

import React, { Fragment, useState } from 'react';
import './App.css'
import './beststyles.scss'
import data from './Student_Data.json' ;

// Career_Url: "https://ibegin.tcs.com/iBegin/jobs/search"
// Employer: "TCS"
// Graduation_Year: 2020
// Job_Start_Date: "6/20/2020"
// Job_Title: "Software Engineer"
// Specialization: "Computer Science"
// University_Name: "University of North Carolina at Charlotte"



function App() {

const univName =data.map(i=>{
const {Employer, Career_Url, Job_Title} = i 
    return (
    <div style={{margin:'10px',padding:'10px', backgroundColor:"lightblue"}}>
    <div>
        <a href={Career_Url}>Career Site </a>
        
        </div>
    <div>{Employer}</div>   
    <div>{Job_Title}</div>
    </div>)
    
})  
  
        
        
  
return (  

<div>
  {univName}
    
</div>



) ;      

}

export default App