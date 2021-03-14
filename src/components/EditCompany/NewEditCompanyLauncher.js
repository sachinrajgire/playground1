import useCallApi from '../CustomHooks/useCallApi'
import Spinner from '@material-ui/core/LinearProgress';
import React from 'react';
import NewEditCompany from './NewEditCompany'
import {  useParams } from "react-router-dom";



function NewEditCompanyLauncher () {

    const params= useParams()
    console.log(params,'params');
    const [isLoading, data] = useCallApi(`/v1/company/getCompanyById?Id=${params.Id}`)
   console.log(data,'data')
    if(isLoading || !data ) {
        return <Spinner />
        }


   return (
       <React.Fragment>
           <NewEditCompany 
           editingMode='edit'
           gotData={data}
           />
       </React.Fragment>
   )
}

export default NewEditCompanyLauncher
