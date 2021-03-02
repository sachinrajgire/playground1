

import React, { Fragment, useEffect, useState } from 'react';
import './App.css'
import './beststyles.scss'
import data from './Student_Data.json' ;
import Card from './components/Card/Card';
import Lottery from './components/Lottery/Lottery';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form/Form';
import { Link, Redirect, useHistory } from "react-router-dom";


let  uuidData = data.map(i=>{
return {
    ...i, 
    Id: uuidv4()
}

})
// console.log(uuidData,'uuidData');
// Career_Url: "https://ibegin.tcs.com/iBegin/jobs/search"
// Employer: "TCS"
// Graduation_Year: 2020
// Job_Start_Date: "6/20/2020"
// Job_Title: "Software Engineer"
// Specialization: "Computer Science"
// University_Name: "University of North Carolina at Charlotte"'
// Id:2303333303303003

//single source of truth 

// Lifting the state 

// Components
// Life cycle methods 
// Mounted , Updated , Unmounted 

function App() {
const [fav, setFav] =useState([])
const [data, setData]=useState([])
const [deletedRecords, setDeletedRecords]=useState([])
const [careerUrl,setCareerUrl] =useState("")
const [employer,setEmployer] =useState("")
const [graduationDate,setGraduationDate] =useState("")
const [jobStartYear,setJobStartYear] =useState("")
const [jobTitle,setJobTitle] =useState("")
const [specialization,setSpecialization] =useState("")
const [universityName,setUniversityName] =useState("")
const [isSubmitDisabled,setIsSubmitDisabled] =useState(false)

// console.log(data,deletedRecords,'data deleted records');
const history= useHistory()

function getFavs() {
let empData= uuidData.filter(i=>fav.includes(i.Id))
let returnEmployerName = empData.map(i=>i.Employer)
return returnEmployerName.join(",")
}

function handleFormSubmit () {
    console.log('handleFormSubmit invoked')
    setIsSubmitDisabled(true)
    setTimeout(()=>{
        setIsSubmitDisabled(false)
    },3000)

    let objReady = {
        Career_Url:careerUrl,
        Employer:employer,
        Graduation_Year:graduationDate,
        Job_Start_Date:jobStartYear,
        Job_Title:jobTitle,
        Specialization:specialization,
        University_Name:universityName,
        Id:uuidv4()
    }
let copyData = [objReady,...data]

setData(copyData)
    
}
function createNewRecord() {

}

function deleteRecord (Id) {
let deletedRecord= data.find((i)=>{
 return i.Id ===Id 
})
console.log(deletedRecord,'deletedRecord');

let  copyDelRecords=[...deletedRecords]
copyDelRecords.push(deletedRecord)
setDeletedRecords(copyDelRecords)
setDeletedRecords(deletedRecord)

/////////Logic for updating screen
let remainingRecord= data.filter((i)=>{
    return i.Id !==Id 
   })
setData(remainingRecord)
console.log(remainingRecord,'remainingRecord');
}
useEffect(()=>{
setData(uuidData)
},[])

function handleRetrieveAllRecords() {
// let mergedRecords = data.concat(mergedRecords)
// console.log(mergedRecords,'mergedRecords');
// setData(mergedRecords)
// setDeletedRecords([])
}

const univName =data.map((i,idx)=>{
const {Employer, Career_Url, Job_Title,Id} = i 

    return (
    <Card 
    careerUrl={Career_Url}
    Employer={Employer}
    Job_Title={Job_Title}
    key={Id} 
    setFav={setFav}
    fav={fav}
    Id={Id}
    deleteRecord={deleteRecord}
    />
    )
    
})  
        
return (  

<div>
   <div>
<button onClick={()=>setFav([])}>Clear All Favorites</button>
<button onClick={()=>history.push("/")}>Go Home </button>
<button onClick={()=>history.push(`/test?isSubmitDisabled=${isSubmitDisabled}`)}>Test</button>
       </div> 
Here are your favorite companies 
<div>{`Total record :::${data.length}`}</div>
<div>{`Total deleted record :::${deletedRecords.length}`}</div>

<Form 
careerUrl={careerUrl}
employer={employer}
graduationDate={graduationDate}
jobStartYear={jobStartYear}
jobTitle={jobTitle}
specialization={specialization}
universityName={universityName}
setCareerUrl={setCareerUrl}
setEmployer={setEmployer}
setGraduationDate={setGraduationDate}
setJobStartYear={setJobStartYear}
setJobTitle={setJobTitle}
setSpecialization={setSpecialization}
setUniversityName={setUniversityName}
handleFormSubmit={handleFormSubmit}
isSubmitDisabled={isSubmitDisabled}
/>







<div>

{getFavs()}
</div>

Here is list of companies 
<div>
{univName}
</div>
 
    
</div>



) ;      

}

export default App