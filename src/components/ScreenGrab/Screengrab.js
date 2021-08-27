import "./Screengrab.css";
import ClearIcon from "@material-ui/icons/Clear";
import { useState, useEffect } from "react";

const Screengrab = () => {
  const [out, setOut] = useState("");

  const getOut = () => {
    setOut("none");
  };
  console.log("SCREEN GRAB IS WORKING");
  return (
    <div className="outerDiv">
      <div style={{ display: out }} className="screen-grab">
        <div className="cross-btn">
          <button onClick={() => getOut()}>
            <ClearIcon></ClearIcon>
          </button>
        </div>
        <div className="content-screen">
          <h3>Wynisco Bootcamp</h3>
          <a href="https://www.wynisco.com/bootcamp.html">Check it Out</a>
        </div>
      </div>
    </div>
  );
};

export default Screengrab;
