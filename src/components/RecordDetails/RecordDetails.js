

import React, { Fragment, useEffect, useState } from 'react';
import { Link, Redirect, useHistory,useParams } from "react-router-dom";
import axios from '../../Axios'
import Spinner from '@material-ui/core/LinearProgress';
import CardDetails from '../CardDetails/CardDetails';
import Toast from '../Toast/Toast';




function RecordDetails () {

const [isDataLoading, setIsDataLoading] = useState(false)
const [data, setData]=useState([])
console.log(data);


const params = useParams()
console.log(params,'params')

useEffect(()=>{
    setIsDataLoading(true)
    axios.get(`/recorddetails/?Id=${params.Id}`)
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

    if(isDataLoading){
        return <Spinner />
     }
    
     return (
        <div>
 <CardDetails 
 Employer={data.Employer} 
careerUrl={data.Career_Url}
Job_Title={data.Job_Title}
Job_Start_Date={data.Job_Start_Date}
Specialization={data.Specialization}
University_Name={data.University_Name}  
 />
        </div>
    )
}


export default RecordDetails