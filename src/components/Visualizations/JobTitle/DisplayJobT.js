import "d3-transition";
import { select } from "d3-selection";
import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";
import ReactWordcloud from "react-wordcloud";
import { keys } from "@material-ui/core/styles/createBreakpoints";


function DisplayJobT(data) {
  // console.log("in dis")
  // console.log(data.data)
  // console.log("Key") 
  //  console.log(data.data[""])

   let w = []

  Object.entries(data.data).forEach(([key, value]) => 
  
   w.push( { 
        text: `${key}` , 
        value: value
      }
   )
   )
 
console.log(w);
  
return (
    <div style={{margin:'20px'}}>
      <br></br>
      <div style={{ height: 400, width: 600 }}>
      <ReactWordcloud words={w} />
      <h4 style={{textAlign: 'center'}}><em><u>Job Titles</u></em></h4>
    </div>
    </div>
  );
}

export default DisplayJobT
