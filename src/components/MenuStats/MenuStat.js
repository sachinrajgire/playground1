import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import axios from "axios";
import { Resizable } from "re-resizable";

// const words = [
//   {
//     text: "Amazon",
//     value: 17,
//   },
//   {
//     text: "Oracle",
//     value: 13,
//   },
//   {
//     text: "TCS (Tata Consultancy Services)",
//     value: 12,
//   },
//   {
//     text: "Amazon Web Services",
//     value: 11,
//   },
//   {
//     text: "Tesla",
//     value: 10,
//   },
// ];
const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

function MenuStat() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("http://localhost:4001/v1/stats/getAllStats").then((res) => {
      const myData = res.data.map((item) => {
        return { text: item.CompanyName, value: item.Total };
      });
      console.log(myData);

      setData(myData);
    });
  }, []);

  return (
    <div>
      <Resizable
        defaultSize={{
          width: 600,
          height: 300,
        }}
        style={resizeStyle}
      >
        <ReactWordcloud
          words={data}
          options={{
            fontFamily: "courier new",
            //  height: "500",
            //  width: "500",
            fontSizes: [15, 30],
          }}
          // size={[400, 300]}
        />
      </Resizable>
    </div>
  );
}

export default MenuStat;
