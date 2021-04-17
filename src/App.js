import React, { Fragment, useEffect, useState } from 'react';
import './App.css'
import './beststyles.scss'
import NavBar from './components/NavBar/NavBar';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {  useHistory } from "react-router-dom";


function App() {
    const history= useHistory()

return (
<div className='container'>
<NavBar>

    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Main Application</CardTitle>
          <CardText>Wynisco team has gathered data about recent F1 placements</CardText>
          <CardText>Use this to start your job search process.We have even provided career url</CardText>
          <Button onClick={()=>history.push('/placementdata')}>Go</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">H1B Sponsors</CardTitle>
          <CardText>Large reputed staffing companies with good clients that will find you a position and
            sponsor you.
          </CardText>
          <Button onClick={()=>window.location.href='https://www.wynisco.com/blog/companies-sponsoring-h1b-visa'}>Go</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Volunteering Opportunities</CardTitle>
          <CardText>If you need work to stop the clock after first 3 months of OPT and gain some experience
          </CardText>
          <Button onClick={()=>window.location.href='https://www.wynisco.com/blog/volunteer-opportunities-for-f1-students-to-stop-the-clock'}>Go</Button>
        </Card>
      </Col>
    </Row>



</NavBar> 
</div> 
    
    )

}

export default App