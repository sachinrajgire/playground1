import React, { Fragment, useEffect, useState } from 'react';
import Spinner from '@material-ui/core/LinearProgress';
import axios from '../../../Axios'
import DisplayJobT from './DisplayJobT'

function JobTitle(){
    const [data, setData]=useState([])
    const [isDataLoading, setIsDataLoading] = useState(false)
    const [nextCursor, setNextCursor] = useState(null)

    useEffect(()=>{
        setIsDataLoading(true)
        axios.get('http://localhost:4001/v1/record/allrecords')
        .then(res=>{
            // console.log(res.data)
            setData(res.data)
            setIsDataLoading(false)
        })
        .catch(e=>{
            setIsDataLoading(false)
            console.log(e)
        })
        },[])

        let  myMap = new Map()
        for(let i = 0 ; i<data.length;i++){
            let k = data[i].jobTitle;
        //   console.log(k)
          if(myMap.has(k)){
              let value = myMap.get(k)
              myMap.set(k, value++)
          }else{
              myMap.set(k,1)
          }
        }

             console.log("MAP SIZE")
             console.log(myMap.size);
             console.log("DATA SIZE")
             console.log(data.length)

            //  for(let i of myMap)
            // {
            //     console.log(i[0]+" "+i[1])
            // }


        if(isDataLoading){
            return <Spinner />
         }


 return(
     <div>
       <DisplayJobT myMap/>
     </div>
 )
}

export default JobTitle