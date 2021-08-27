import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import "./beststyles.scss";
import NavBar from "./components/NavBar/NavBar";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import ScreenGrab from "./components/ScreenGrab/Screengrab";
import useScrollPosition from "@react-hook/window-scroll";
import { useWindowSize } from "@react-hook/window-size/throttled";
import { useWindowSize as useWindowSizeD } from "@react-hook/window-size/";

function App() {
  const history = useHistory();
  const [width, height] = useWindowSize({ fps: 60 });
  const scrollY = useScrollPosition(60 /*frames per second*/);
  const twentyfive = 0.25 * height;

  function displayPopUp() {
    // console.log("HERE's THE POPUP");
    return <ScreenGrab />;
  }

  return (
    <>
      {scrollY >= twentyfive && displayPopUp()}

      <div className="container">
        <NavBar>
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle tag="h5">Main Application</CardTitle>
                <CardText>
                  Wynisco team has gathered data about recent F1 placements
                </CardText>
                <CardText>
                  Use this to start your job search process.We have even
                  provided career url
                </CardText>
                <Button onClick={() => history.push("/placementdata")}>
                  Go
                </Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle tag="h5">H1B Sponsors</CardTitle>
                <CardText>
                  Large reputed staffing companies with good clients that will
                  find you a position and sponsor you.
                </CardText>
                <Button
                  onClick={() =>
                    (window.location.href =
                      "https://www.wynisco.com/blog/companies-sponsoring-h1b-visa")
                  }
                >
                  Go
                </Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle tag="h5">Volunteering Opportunities</CardTitle>
                <CardText>
                  If you need work to stop the clock after first 3 months of OPT
                  and gain some experience
                </CardText>
                <Button
                  onClick={() =>
                    (window.location.href =
                      "https://www.wynisco.com/blog/volunteer-opportunities-for-f1-students-to-stop-the-clock")
                  }
                >
                  Go
                </Button>
              </Card>
            </Col>
          </Row>
        </NavBar>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
