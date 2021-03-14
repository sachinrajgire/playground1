import React ,{useEffect, useState} from 'react';
import './edit-record.scss';
import { Link, Redirect, useHistory,useParams,useLocation } from "react-router-dom";
import useCallApi from '../CustomHooks/useCallApi'
import Spinner from '@material-ui/core/LinearProgress';
import NavBar from '../../components/NavBar/NavBar';
import BigHeader from '../ReusableUI/BigHeader';
import { Button,Input, FormGroup,Label,Col} from 'reactstrap';
import axios from '../../Axios';
import moment from 'moment';
import SearchCompanyLauncher from '../EditCompany/SearchCompanyLauncher'
import { NULL } from 'node-sass';
import { SignalCellularNull } from '@material-ui/icons';




function NewEditRecord({gotData, editingMode='new'}) {


function getInitialValues () {
let initialState={
  careerUrl:"",
  graduationDate:null,
  jobStartDate:null,
  specialization:"",
  universityName:"",
  jobTitle:"",
  companyName:"",

}

if(editingMode === 'new'){
return initialState
}

initialState.graduationDate= gotData.graduationDate
initialState.jobStartDate= gotData.jobStartDate
initialState.specialization= gotData.specialization
initialState.universityName= gotData.universityName
initialState.jobTitle= gotData.jobTitle

return initialState
}

// function handleFormDisable () {
// let elen= employer.length
// if(elen >=2 && elen <=20 && !isSubmitDisabled){
//     return false 
// }
// return true
// }

const history= useHistory()

const [universityName,setUniversityName]=useState(getInitialValues().universityName)
const [specialization,setSpecialization]=useState(getInitialValues().specialization)
const [jobTitle,setJobTitle]=useState(getInitialValues().jobTitle)
const [jobStartDate,setjobStartDate]=useState(getInitialValues().jobStartDate)
const [graduationDate,setGraduationDate]=useState(getInitialValues().graduationDate)
const [companyName,setCompanyName]=useState(getInitialValues().companyName)
const [careerUrl,setCareerUrl]=useState(getInitialValues().careerUrl)
const [submitted,setSubmitted] =useState(false)
const [companySearchText,setCompanySearchText] =useState("")
const [enableCompanySearch,setEnableCompanySearch] =useState(false)
const [fireCompanySearch,setFireCompanySearch] =useState(false)
const [selectedRow,setSelectedRow] =useState(null)

console.log(graduationDate,'graduation Date')
console.log(typeof(graduationDate),'graduation Date')
console.log(moment(graduationDate).format(),'MOMEMT')

const editMode = editingMode === 'edit'

let commonFields ={
  universityName,
  specialization,
  jobStartDate:moment(jobStartDate).format(),
  jobTitle,
  graduationDate:moment(graduationDate).format()
  
  
}

// function handleUpdateSubmit (e) {
//   e.stopPropagation()
//   e.preventDefault()
//   setSubmitted(true)
  
//   if(editMode) {
  
//   axios.put('v1/record/editrecord',{company:selectedRow,_id:gotData._id})
//           .then(res=>{
//               console.log(res)
//               setSubmitted(false)
//               history.push('/app')
//               // setData(res.data)
//               // setIsLoading(false)
//           })
//           .catch(e=>{
//               // setIsLoading(false)
//               console.log(e)
//               setSubmitted(false)
//               alert(`Error Updating Record`)
//           })
//    }
// }  

function handleUpdateSubmit (e) {
e.stopPropagation()
e.preventDefault()
setSubmitted(true)

if(editMode) {

axios.put('v1/record/editrecord',{...commonFields,_id:gotData._id})
        .then(res=>{
            console.log(res)
            setSubmitted(false)
            history.push('/app')
            // setData(res.data)
            // setIsLoading(false)
        })
        .catch(e=>{
            // setIsLoading(false)
            console.log(e)
            setSubmitted(false)
            alert(`Error Updating Record`)
        })
 }
 else {
  axios.post('v1/record/createnewrecord',
  {...commonFields,
  companyName,
  careerUrl

  })
  .then(res=>{
      console.log(res)
      setSubmitted(false)
      history.push('/administration')
      // setData(res.data)
      // setIsLoading(false)
  })
  .catch(e=>{
      // setIsLoading(false)
      console.log(e)
      setSubmitted(false)
      alert(`Error Creating New Record`)
  })
  
 }

}

// console.log(children,'children');
 return (
    <div className='new-edit-container'>
      <NavBar>
       <BigHeader 
       banner={editMode ? `Edit Record` : `New Record`} 
       />
       <div className='field-container' >
        <span className='edit-label'><label>University Name</label></span>
         <input type='text' size='60' onChange={(e)=>setUniversityName(e.target.value)} value={universityName}  
         placeholder=''></input>
         </div>

       <div className='field-container' >
        <span className='edit-label'><label>Specialization</label></span>
         <input type='text' size='60' onChange={(e)=>setSpecialization(e.target.value)} value={specialization}  
         placeholder=''></input>
         </div>

      
       <div className='field-container' >
        <span className='edit-label'><label>Graduation Date</label></span>
         <input type='date' size='60' onChange={(e)=>setGraduationDate(e.target.value)} value={graduationDate}
         placeholder=''></input>
         </div>


         {!editMode && <div>
          <div className='field-container' >
        <span className='edit-label'><label>Company Name</label></span>
         <input type='text' size='60' onChange={(e)=>setCompanyName(e.target.value)} value={companyName}
         ></input>
         </div>

         <div className='field-container' >
        <span className='edit-label'><label>Career Url</label></span>
         <input type='text' size='60' onChange={(e)=>setCareerUrl(e.target.value)} value={careerUrl}
         placeholder=''></input>
         </div>
         
         </div>}  

         <div className='field-container' >
        <span className='edit-label'><label>Job Title</label></span>
         <input type='text' size='60' onChange={(e)=>setJobTitle(e.target.value)} value={jobTitle }  
         placeholder=''></input>
         </div>

         <div className='field-container' >
        <span className='edit-label'><label>Job Start Date</label></span>
         <input type='date' size='60' onChange={(e)=>setjobStartDate(e.target.value)} value={jobStartDate}
         placeholder=''></input>
         </div>

       <div className='field-container' >
         <Button disabled={submitted} onClick={(e)=>handleUpdateSubmit(e)} color="secondary">{editMode ? `Update` : `Submit`} </Button>
         </div>


       <div className='field-container' >
         {    `Current Company : ${gotData.company.companyName}`}
         </div>

    <div className='field-container' >
         <Button onClick={(e)=>history.push(`/editcompany/${gotData.company._id}`)} color="secondary">Change Company Details </Button>
         <Button onClick={()=>setEnableCompanySearch(true)} color="secondary">Change Associated Company</Button>
         </div>
  
         {enableCompanySearch && <div>
         <div className='field-container' >
        <span className='edit-label'><label>Company Search </label></span>
         <input type='text' size='60' onChange={(e)=>setCompanySearchText(e.target.value)} value={companySearchText}  
         placeholder=''></input>
         <Button disabled={fireCompanySearch} onClick={()=>setFireCompanySearch(true)} color="secondary">Search Companies</Button>
         <Button disabled={!fireCompanySearch} onClick={()=>setFireCompanySearch(false)} color="secondary">Clear Search</Button>

         </div> 
    {fireCompanySearch && <div> 
      <Button disabled={!selectedRow} onClick={()=>setFireCompanySearch(true)} color="secondary">SAVE</Button>
      <Button disabled={!selectedRow} onClick={()=>setSelectedRow(null)} color="secondary">CLEAR</Button>


     <SearchCompanyLauncher 
     keyword={companySearchText}
     selectedRow={selectedRow}
     setSelectedRow={setSelectedRow}
     />
     </div>
} 
     </div>
}

       </NavBar>
    </div>)

}


export default NewEditRecord
