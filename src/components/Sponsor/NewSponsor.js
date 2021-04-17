import React ,{useEffect, useState} from 'react';
import './edit-sponsor.scss';
import { Link, Redirect, useHistory,useParams,useLocation } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import BigHeader from '../ReusableUI/BigHeader';
import { Button,Input, FormGroup,Label,Col} from 'reactstrap';
import axios from '../../Axios';
import moment from 'moment'
import SearchSponsorLauncher from './SearchSponsorLauncher';
import Divider from '@material-ui/core/Divider';
import { Editor } from '@tinymce/tinymce-react';





function NewSponsor({}) {



const history= useHistory()
const [sponsorName,setSponsorName]=useState("")
const [sponsorDetails,setSponsorDetails]=useState("")
const [submitted,setSubmitted] =useState(false)
const [fireSponsorSearch,setFireSponsorSearch] =useState(false)
const [selectedRow,setSelectedRow] =useState(null)
const [sponsorSearchText,setSponsorSearchText] =useState("")

let commonFields ={
  sponsorDetails,
  sponsorName,
}


function handleSubmitDisable() {
  if (sponsorName.length>2 && sponsorDetails.length>2 && !submitted 
   ){
  return false
  }
  return true
  
}

function handleEditorSponsorDetails(content) {
  setSponsorDetails(content)
}

function handleUpdateSubmit (e) {
e.stopPropagation()
e.preventDefault()
setSubmitted(true)

  axios.post('v1/sponsor/createnewsponsor',commonFields)
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
      alert(`Error Creating New Sponsor`)
  })
}

 return (
    <div className='new-edit-container'>
      <NavBar>
       <BigHeader 
       banner="Enter new Sponsor"
       />
       <p>Lets make sure sponsor does not exist before we start</p>
      <div>
         <div className='field-container' >
        <span className='edit-label'><label>Sponsor Search </label></span>
         <input type='text' size='60' onChange={(e)=>setSponsorSearchText(e.target.value)} value={sponsorSearchText}  
         placeholder=''></input>{` `}
         <Button disabled={fireSponsorSearch} onClick={()=>setFireSponsorSearch(true)} color="secondary">Search Companies</Button>{` `}
         <Button disabled={!fireSponsorSearch} onClick={()=>setFireSponsorSearch(false)} color="secondary">Clear Search</Button>

         </div> 
    {fireSponsorSearch && <div> 
   
     <SearchSponsorLauncher 
     keyword={sponsorSearchText}
     selectedRow={selectedRow}
     setSelectedRow={setSelectedRow}
     /><br></br>


     </div>
} 
     </div>
    
    
    <div className='input-container' >
       <span className='edit-label'><label>Enter new sponsor sponsorDetails </label></span>
        <div className='field-container' >
        <span className='edit-label'><label>Sponsor Name</label></span>
         <input type='text' size='60' onChange={(e)=>setSponsorName(e.target.value) }  value={sponsorName}> 
         </input>
         </div>
<div className='field-container' >
        <span className='edit-label'><label>Sponsor SponsorDetails </label></span>
        <Editor
         initialValue=""
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }}
         onEditorChange={(content)=>handleEditorSponsorDetails(content)}
       />
         </div>
       

       <div className='field-container' >
         <Button disabled={handleSubmitDisable()} onClick={(e)=>handleUpdateSubmit(e)} color="secondary">Submit </Button>
         </div>
         </div>

       </NavBar>
    </div>)

}


export default NewSponsor
