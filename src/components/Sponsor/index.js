import React, { Fragment, useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import axios from '../../Axios';
import Spinner from '@material-ui/core/LinearProgress';
import SponsorTable from './SponsorTable'




  function Sponsors(){
    const [data, setData]=useState([])
const [isDataLoading, setIsDataLoading] = useState(false)

    console.log(data,'data from sponsors');

    useEffect(()=>{

      setIsDataLoading(true)
      
      axios.get(`v1/sponsor/allsponsors`)
      .then(res=>{
        setIsDataLoading(false)
        setData(res.data)
      })
      .catch(e=>{
          setIsDataLoading(false)
          console.log(e)
      })
      },[])
  
if(isDataLoading){
  return <Spinner />
}    

    return <div>
    <NavBar>
   <SponsorTable 
   data={data}
   />
    </NavBar>    
</div>
  }

  export default Sponsors