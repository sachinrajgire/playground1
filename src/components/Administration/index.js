import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {  useHistory } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar';
import Login from '../../components/Login/Login';
import Logout from '../../components/Logout/Logout';
import BigHeader from '../ReusableUI/BigHeader';
import Divider from '@material-ui/core/Divider';



const Administration = () => {
  const { logout } = useAuth0();
  const history= useHistory()

  return (
<div>
  <NavBar>
 
  <BigHeader 
       banner="Administration" 
       />
<div style={{margin:'50px'}}>
<button onClick={() => history.push(`/createnewrecord`)}>CREATE NEW RECORD</button>
<button onClick={() => history.push(`/app`)}>EDIT / DELETE RECORD</button>
</div>
<Divider />

<div style={{margin:'50px'}}>
<button onClick={() => history.push(`/createnewcompany`)}>CREATE NEW COMPANY</button>{` `}
<button onClick={() => history.push(`/createnewcompany`)}>CHANGE DETAILS OF EXISTING COMPANY</button>
</div>
<Divider />

<div style={{margin:'50px'}}>
<button onClick={() => history.push(`/createnewsponsor`)}>CREATE NEW SPONSOR</button>
<button onClick={() => history.push(`/sponsor`)}>EDIT / DELETE SPONSOR</button>
</div>

<Divider />
<div style={{margin:'50px'}}>
<Login />{` `}
<Logout />
</div>
<div>
    
</div>


</NavBar>
</div>

  ) 
};

export default Administration;