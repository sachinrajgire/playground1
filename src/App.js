

import React, { Fragment, useEffect, useState } from 'react';
import './App.css'
import './beststyles.scss'
import data from './Student_Data.json' ;
import Card from './components/Card/Card';
import CardDetails from './components/CardDetails/CardDetails';
import Lottery from './components/Lottery/Lottery';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form/Form';
import { Link, Redirect, useHistory } from "react-router-dom";
import Modal from './components/Modal/Modal'
import { Button,Input} from 'reactstrap';


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
const [isModelOpen,setIsModalOpen]=useState(false)
const [viewCurrentRecord,setViewCurrentRecord]=useState({})
const [searchText,setSearchText]=useState("")
const [searchInvoked,setSearchInvoked]=useState(false)


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

function handleCardContainerOnClick (Id) {
console.log('handleCardContainer Click invoked',Id);  
let entry =data.filter(i=>i.Id === Id)
console.log(entry,'filteredEntry');
setViewCurrentRecord(entry[0])
setIsModalOpen(true)

}

function deleteRecord (Id) {
let deletedRecord= data.filter((i)=>i.Id ===Id)
console.log(deletedRecord,'deletedRecord');

let  copyDelRecords=[...deletedRecords]
copyDelRecords.push(deletedRecord[0])
setDeletedRecords(copyDelRecords)

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
let mergedRecords = [...deletedRecords,...data]
console.log(mergedRecords,'mergedRecords');
setData(mergedRecords)
setDeletedRecords([])
}

const univName =filterLogic().map((i,idx)=>{
const {Employer, Career_Url, Job_Title,Id} = i 

return (
    <div className='cardDiv' onClick={()=>handleCardContainerOnClick(Id)}>
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
    </div>
    )
    
})  

function filterLogic () {
if(searchInvoked){
    return handleFilters()
}
    return data
}

function handleFilters(){
let copyData =[...data]

   copyData = copyData.filter(i=>{
    return i.Employer.toLowerCase().includes(searchText.toLowerCase())
   }) 
   console.log(copyData,'copyData');

   return copyData

}
return (  

<div>
   <div>
{/* <Modal 
buttonLabel="Open"
title="Whats up Title"
body={"I am body of the Modal"}

/> */}
<button onClick={()=>setFav([])}>Clear All Favorites</button>
<button onClick={()=>history.push("/")}>Go Home </button>
<button onClick={()=>handleRetrieveAllRecords()}>Retrieve All Records</button>
<button onClick={()=>history.push(`/test?isSubmitDisabled=${isSubmitDisabled}`)}>Test</button>
       </div> 
Here are your favorite companies 
<div>
<input placeholder='Search with Company name'  onChange={(e)=>setSearchText(e.target.value)}/>
<Button onClick={()=>setSearchInvoked(true)} color="primary">Search</Button>
</div>
<div>{`Total record :::${data.length}`}</div>
<div>{`Total deleted record :::${deletedRecords.length}`}</div>
{/* <Modal
buttonLabel="Open"
title="Please enter the form "
handleFormSubmit={handleFormSubmit}
>
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

isSubmitDisabled={isSubmitDisabled}
/>
</Modal> */}


<Modal
buttonLabel="Open"
title="Please enter the form "
handleFormSubmit={handleFormSubmit}
isModalOpen={isModelOpen}
setIsModalOpen={setIsModalOpen}
>
<CardDetails
Employer={viewCurrentRecord.Employer}
careerUrl={viewCurrentRecord.Career_Url}
Job_Title={viewCurrentRecord.Job_Title}
Job_Start_Date={viewCurrentRecord.Job_Start_Date}
Specialization={viewCurrentRecord.Specialization}
University_Name={viewCurrentRecord.University_Name}

/>
</Modal>   


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