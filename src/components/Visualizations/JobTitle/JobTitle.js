import React, { Fragment, useEffect, useState } from 'react';
import Spinner from '@material-ui/core/LinearProgress';
import axios from '../../../Axios'
import DisplayJobT from './DisplayJobT'

function JobTitle(){
    const [data, setData]=useState([])
    const [isDataLoading, setIsDataLoading] = useState(false)


    useEffect(()=>{
        setIsDataLoading(true)
        axios.get('http://localhost:4000/v1/record/allrecords')
        .then(res=>{
         let data1=res.data
         let obj = {}
            for(let i = 0 ; i<data1.length;i++){
                let k = data1[i].jobTitle;
                    if(!obj[k]){
                        obj[k] = 1
                    }else{
                        obj[k]++
                    }
            }
       
            setData(obj)
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


 return(
     <div>
       <DisplayJobT 
      data={data}
       />
     </div>
 )
}

export default JobTitle