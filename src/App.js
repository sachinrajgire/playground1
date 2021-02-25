

import React, { Fragment, useEffect, useState } from 'react';
import './App.css'
import './beststyles.scss'
import data from './Student_Data.json' ;
import Card from './components/Card'

// Career_Url: "https://ibegin.tcs.com/iBegin/jobs/search"
// Employer: "TCS"
// Graduation_Year: 2020
// Job_Start_Date: "6/20/2020"
// Job_Title: "Software Engineer"
// Specialization: "Computer Science"
// University_Name: "University of North Carolina at Charlotte"



function App() {
    
    useEffect(()=>{
        document.getElementById("outside").addEventListener("click", ()=>{
            console.log('outer div clicked');
        })
        document.getElementById("middle").addEventListener("click", ()=>{
            console.log('Middle Div Clicked');
        })

    })
    
const univName =data.map(i=>{
const {Employer, Career_Url, Job_Title} = i 
    return (
        <Card />
    )
    
})  
  
   function handleEvent(e) {
       console.log('handlevent invoked');
    e.stopPropagation();
    e.preventDefault()

   }
        
  
return (  

<div id="outside">
    {/* <button onCl>Click me </button>
  {univName} */}
some outside 
<div id="middle">
Middle 
<button onClick={(e)=>console.log(e,'MIDDLE')}>Middle</button>
<div id='inner'>
    Inner
    <button onClick={(e)=>handleEvent(e)}>Inner</button>
</div>
</div>
    
</div>



) ;      

}

export default App