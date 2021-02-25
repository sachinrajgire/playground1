import React from 'react';
import Url from './Url'

function Card () {

    
        return (
        <div style={{margin:'10px',padding:'10px', backgroundColor:"lightblue"}}>
        <Url urlLink="https://cnn.com">
        "Url Label"
        </Url>
        <div>Employer Name</div>   
        <div>Job Title </div>
        </div>)
        
    }

export default Card