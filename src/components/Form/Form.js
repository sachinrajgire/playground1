import React ,{useState} from 'react';
import './form.scss';
//validations
//errorstate

function Form({
    careerUrl,
    employer,
    graduationDate,
    jobStartYear,
    jobTitle,
    specialization,
    universityName,
    setCareerUrl,
    setcompanyName,
    setGraduationDate,
    setJobStartYear,
    setJobTitle,
    setUniversityName,
    setspecialization,
    handleFormSubmit,
    isSubmitDisabled

}) {


function handleFormDisable () {
let elen= employer.length
if(elen >=2 && elen <=20 && !isSubmitDisabled){
    return false 
}

return true
}
// console.log(children,'children');
 return (
    <div >
     
        <div>
      
          
        <label>Career Url </label>
         <input type='text' onChange={(e)=>setCareerUrl(e.target.value)} value={careerUrl}  
         placeholder='Please start with http'
         ></input>
         {careerUrl}
        </div>

        <div><label>companyName </label>
      <input onChange={(e)=>setcompanyName(e.target.value)} value={employer} type='text'

      
      ></input>
      {employer}
      </div>

        <div> <label>Graduation Year</label>
      <input onChange={(e)=>setGraduationDate(e.target.value)} value={graduationDate} type='text'></input>
      {graduationDate}
      </div>

        <div> <label>Job Start Year</label>
      <input onChange={(e)=>setJobStartYear(e.target.value)} value={jobStartYear}  type='text'></input></div>
      {jobStartYear}

        <div>
        <label>Job Title  </label>
      <input onChange={(e)=>setJobTitle(e.target.value)} value={jobTitle} type='text'></input>
     {jobTitle}
        </div>
        <div>
        <label>specialization</label>
      <input onChange={(e)=>setspecialization(e.target.value)} value={specialization} type='text'></input>
     {specialization}
        </div>
        <div>
        <label> universityName </label>
         <input onChange={(e)=>setUniversityName(e.target.value)} value={universityName} type='text'></input>
      {universityName}
        </div>
{/* 
        <div>
           <button type='submit' disabled={handleFormDisable()} onClick={()=>handleFormSubmit()} >SUBMIT </button>

        </div> */}
      

   



    </div>)
}


export default Form
