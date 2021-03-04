import React from 'react';
import { Link ,Redirect,useHistory} from "react-router-dom";
import './Rooter.scss'

const isSubmitDisabled=false
function Rooter() {
  let history = useHistory();
  
// console.log(children,'children');


 return (
    <div style={{margin:'100px'}}>
      <div className='box'>
      <Link to="/">Home</Link>
      </div>
      <div className='box'>
      <Link to="/app">Main App</Link>
      <span style={{marginLeft:'20px'}}><Link to="/lottery">Lottery</Link></span>
      <span style={{marginLeft:'20px'}}><Link to="/carousal">Carousal</Link></span>
      
      </div>
      <div className='box'>
      <Link to={`/test/${isSubmitDisabled}`}>Test</Link>
      </div>
      <div className='box'>
      <a href="https://github.com/sachinrajgire/playground1/tree/master">Github Front End</a>{' '}
      <a href="https://github.com/sachinrajgire/studentbe">Github Back End</a>{' '}
      <a href="https://studentbe.herokuapp.com/">BackEnd link</a>{' '}
      <a href="https://reaction-sachin-rajgire.netlify.app">{`Front End Link`}</a>{''}
      
      </div>
      <div className='box'>
      <a href="https://docs.google.com/spreadsheets/d/1ks0VXY6EliB37xT4OsL3CIQRA3XGaIrmATz0i4dYfYI/edit#gid=0">Student Records</a>
      </div>
      <div className='box'>
      <a href="https://wynisco.atlassian.net/wiki/spaces/RTM/overview">Confluence</a>
      </div>

    </div>)
}


export default Rooter
