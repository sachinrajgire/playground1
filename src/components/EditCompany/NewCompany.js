import React ,{useEffect, useState} from 'react';
import './edit-company.scss';
import { Link, Redirect, useHistory,useParams,useLocation } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import BigHeader from '../ReusableUI/BigHeader';
import { Button,Input, FormGroup,Label,Col} from 'reactstrap';
import axios from '../../Axios';
import moment from 'moment'
import SearchCompanyLauncher from '../EditCompany/SearchCompanyLauncher';
import Divider from '@material-ui/core/Divider';





function NewCompany({}) {



const history= useHistory()
const [companyName,setCompanyName]=useState("")
const [careerUrl,setCareerUrl]=useState("")
const [submitted,setSubmitted] =useState(false)
const [fireCompanySearch,setFireCompanySearch] =useState(false)
const [selectedRow,setSelectedRow] =useState(null)
const [companySearchText,setCompanySearchText] =useState("")
const [isDias, setIsDias] = useState(true);

let regex = /^http/gmi;
let commonFields ={
  careerUrl,
  companyName,
}


function handleSubmitDisable() {
  if (companyName.length>2 && careerUrl.length>4 
   && !submitted 
   ){
  return false
  }
  return true
  
}



function handleUpdateSubmit (e) {
e.stopPropagation()
e.preventDefault()
setSubmitted(true)

  axios.post('v1/company/createnewcompany',commonFields)
  .then(res=>{
      setSubmitted(false)
      history.push('/administration')
      // setData(res.data)
      // setIsLoading(false)
  })
  .catch(e=>{
      // setIsLoading(false)
      console.log(e)
      setSubmitted(false)
      alert(`Error Creating New Company`)
  })
}

 return (
    <div className='new-edit-container'>
      <NavBar>
       <BigHeader 
       banner="Enter new Company"
       />
       <p>Lets make sure company does not exist before we start</p>
      <div>
         <div className='field-container' >
        <span className='edit-label'><label>Company Search </label></span>
         <input type='text' size='60' onChange={(e)=>setCompanySearchText(e.target.value)} value={companySearchText}  
         placeholder=''></input>{` `}
         <Button disabled={fireCompanySearch} onClick={()=>setFireCompanySearch(true)} color="secondary">Search Companies</Button>{` `}
         <Button disabled={!fireCompanySearch} onClick={()=>setFireCompanySearch(false)} color="secondary">Clear Search</Button>

         </div> 
    {fireCompanySearch && <div> 
   
     <SearchCompanyLauncher 
     keyword={companySearchText}
     selectedRow={selectedRow}
     setSelectedRow={setSelectedRow}
     /><br></br>


     </div>
} 
     </div>
    
    
    <div className='input-container' >
       <span className='edit-label'><label>Enter new company details </label></span>
        <div className='field-container' >
        <span className='edit-label'><label>Company Name</label></span>
         <input type='text' size='60' onChange={(e)=>setCompanyName(e.target.value) }  value={companyName}> 
         </input>
         </div>

         <div className='field-container' >
        <span className='edit-label'><label>Career Url</label></span>
         <input type='text' size='60' onChange={(e)=>setCareerUrl(e.target.value)} value={careerUrl}
         placeholder=''></input>
         </div>
         

       <div className='field-container' >
         <Button disabled={handleSubmitDisable()} onClick={(e)=>handleUpdateSubmit(e)} color="secondary">Submit </Button>
         </div>
         </div>

       </NavBar>
    </div>)

}


export default NewCompany
