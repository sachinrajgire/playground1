import "d3-transition";
import { select } from "d3-selection";
import React from "react";
import ReactDOM from "react-dom";
import ReactWordcloud from "react-wordcloud";
import { keys } from "@material-ui/core/styles/createBreakpoints";



function DisplayJobT(myMap) {
    // console.log(myMap)
  return (
    <div>
      <div style={{ height: 400, width: 600 }}>
        <ReactWordcloud  />
      </div>
    </div>
  );
}

export default DisplayJobT
