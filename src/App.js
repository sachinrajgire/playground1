

import React, { Fragment, useEffect, useState } from 'react';
import './App.css'
import './beststyles.scss'
import Card from './components/Card/Card';
import CardDetails from './components/CardDetails/CardDetails';
import Lottery from './components/Lottery/Lottery';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form/Form';
import { Link, Redirect, useHistory } from "react-router-dom";
import Modal from './components/Modal/Modal'
import { Button,Input, FormGroup,Label,} from 'reactstrap';
import Checkbox from '@material-ui/core/Checkbox';
import { getByDisplayValue } from '@testing-library/react';
import Spinner from '@material-ui/core/LinearProgress';
import axios from './Axios'



// //console.log(uuidData,'uuidData');
// Career_Url: "https://ibegin.tcs.com/iBegin/jobs/search"
// Employer: "TCS"
// Graduation_Year: 2020
// Job_Start_Date: "6/20/2020"
// Job_Title: "Software Engineer"
// Specialization: "Computer Science"
// University_Name: "University of North Carolina at Charlotte"'
// Id:2303333303303003


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
const [filteredData,setFilteredData]=useState([])
const [graduationYearFilter,setGraduationYearFilter]=useState({})
const [currentPage,setCurrentPage]=useState(1)
const [page, setPage] =useState([])
const [entriesPerPage, setEntriesPerPage] = useState(25)
const [isDataLoading, setIsDataLoading] = useState(false)



function getSliced(){
    let copyData=[...data]
    let returnData= copyData.slice((currentPage-1) * entriesPerPage,currentPage*entriesPerPage)
    //console.log((currentPage-1)*entriesPerPage,(currentPage)*entriesPerPage ,'SLICED ')
    // //console.log(returnData,'returnData')
    return returnData
}

const history= useHistory()

function getFavs() {
let empData= data.filter(i=>fav.includes(i.Id))
let returnEmployerName = empData.map(i=>i.Employer)
return returnEmployerName.join(",")
}

useEffect(()=>{
  
    let totalEntries = data && data.length
    let wholePage= Math.ceil(totalEntries/entriesPerPage)
   let arr=  Array(wholePage).fill(0)
//    //console.log(arr,'arr')
   let pages=  arr.map((i,idx)=>{
       return (idx+1)
    })
// //console.log(pages,'pages');
    setPage(pages)

},[data,entriesPerPage])
  

function handleFormSubmit () {
    //console.log('handleFormSubmit invoked')
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

function handleKeyPress (e) {
//console.log(e.onKeyDown,'e.keyCode')
if(e.which == 13 || e.keyCode == 13){
    handleSearch()
}

}
// function handleCardContainerOnClick (Id) {
// //console.log('handleCardContainer Click invoked',Id);  
// let entry =data.filter(i=>i.Id === Id)
// //console.log(entry,'filteredEntry');
// setViewCurrentRecord(entry[0])
// setIsModalOpen(true)
// }
function handleCardContainerOnClick (Id) {
   history.push(`/app/recorddetails/${Id}`)
}

//click on container - route to new component 
//new component 
// push new route to stack 
// new route app/recordetails -- New Component 
// useHistory - /app/recorddetails?id='fdfd-fdd
// New Compnet - useParams -- "fdfd-fdd"
// useEffect ( make the backend end call and attacht to request )
// back end with one record 
//show it on screen using Card Component  



function deleteRecord (e,Id) {
    e.stopPropagation()
let deletedRecord= data.filter((i)=>i.Id ===Id)
//console.log(deletedRecord,'deletedRecord');

let  copyDelRecords=[...deletedRecords]
copyDelRecords.push(deletedRecord[0])
setDeletedRecords(copyDelRecords)

/////////Logic for updating screen
let remainingRecord= data.filter((i)=>{
    return i.Id !==Id 
   })   
setData(remainingRecord)
// //console.log(remainingRecord,'remainingRecord');
}
// componentDidMount
useEffect(()=>{
setIsDataLoading(true)

axios.get('/allrecords')
.then(res=>{
    console.log(res)
    setData(res.data)
    setIsDataLoading(false)
})
.catch(e=>{
    setIsDataLoading(false)
    console.log(e)
})
},[])
// Lift the state up
// save in localstorage or sessionStorage
// save in Context 
// Saving in redux state 




function handleGraduationDateOnChange(year){

    let copyObj= {...graduationYearFilter}
    copyObj[year]=!copyObj[year]
//  //console.log(copyObj,'copyObj');
 setGraduationYearFilter(copyObj)

}
useEffect(()=>{
    let getyears=filteredData.map(i=>i.Graduation_Year)
    let unique = [...new Set(getyears)];
 
    let obj={}
unique.forEach(l=>{
      obj[l]=true
 })
  setGraduationYearFilter(obj)
    
},[searchInvoked])

function getGraduationYear(){

  return  Object.entries(graduationYearFilter).map(j=>{
      return  <span style={{display:'inlineFlex'}}>
     <label>{j[0]}</label>
     <Checkbox
        checked={j[1]}
        onChange={()=>handleGraduationDateOnChange(j[0])}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      </span>
   })
    
}

function handleRetrieveAllRecords() {
let mergedRecords = [...deletedRecords,...data]
//console.log(mergedRecords,'mergedRecords');
setData(mergedRecords)
setDeletedRecords([])
}

const univName =getSliced().map((i,idx,arr)=>{
const {Employer, Career_Url, Job_Title,Id,Graduation_Year} = i 

return (
    <div className='cardDiv' onClick={()=>handleCardContainerOnClick(Id)}>
    <Card 
    careerUrl={Career_Url}
    Employer={Employer}
    Job_Title={Job_Title}
    Graduation_Year={Graduation_Year}
    key={Id} 
    setFav={setFav}
    fav={fav}
    Id={Id}
    deleteRecord={deleteRecord}
    />
    </div>
    )
    
})  

   
function handleClear(){
setSearchText("")
setSearchInvoked(false)
}
function handleSearch () {
    if(searchText.length ===0){
        setSearchInvoked(false)
    }
    else {
        setSearchInvoked(true)
    }

    let copyData =[...data]
        copyData = copyData.filter(i=>{
        return i.Employer.toLowerCase().includes(searchText.toLowerCase())
       }) 
       //console.log(copyData,'copyData');
    if(setSearchInvoked){
       setFilteredData(copyData)
    }
    
}


function filterLogic () {
if(searchInvoked){
    // return filteredData
   const filterByYear= filteredData.filter((i)=>{
 const gradYear = i.Graduation_Year 
return graduationYearFilter[gradYear]
   })
   return filterByYear
}
    return data
}

if(isDataLoading){
   return <Spinner />
}

return (  

<div className='container'>

<div>

<button onClick={()=>setFav([])}>Clear All Favorites</button>
<button onClick={()=>history.push("/")}>Go Home </button>
<button onClick={()=>handleRetrieveAllRecords()}>Retrieve All Records</button>
<button onClick={()=>history.push(`/test?isSubmitDisabled=${isSubmitDisabled}`)}>Test</button>
       </div> 


<div>
<input autoFocus placeholder='Search with Company name' onKeyPress={(e)=>handleKeyPress(e)} value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
<span style={{marginLeft:'20px'}}><Button disabled={searchInvoked} onClick={()=>handleSearch()} color="primary">Search</Button></span>
{searchInvoked && <span style={{marginLeft:'20px'}}>
     <Button onClick={()=>handleClear()} color="primary">Clear</Button>
     {getGraduationYear()}

</span>

}
</div>
<div>{`Total record :::${filterLogic().length}`}</div>
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
<Button onClick={()=>setCurrentPage(currentPage-1)} disabled={page[0] === currentPage} color="primary">Previous </Button>   
{page.map(i=>{
   return  <span className={i !== currentPage ? `page` : `highlightedpage`} onClick={()=>setCurrentPage(i)}>{i}</span>
})}
<Button disabled={page.length === currentPage} onClick={()=>setCurrentPage(currentPage+1)} color="primary">Next</Button>
<label>Enter number of records per page </label>
<input onBlur={(e)=>setEntriesPerPage(e.target.value)} type='number' />

</div>
<div>
{univName}
</div>
 
    
</div>



) ;      

}

export default App