import React from "react";
import Url from '../Url/Url';
import Divider from '@material-ui/core/Divider';
import "./Promotion.css"


const Promotion = () => {
 
  return (
    <div className=''>

<div>
  <h6>App was build by Wynisco Bootcamp students. Data provided by Wynisco Data Team.</h6>
  <h6 id ="bootcamp-link">Bootcamp Details <Url ><a href="https://wynisco.com/bootcamp" target="_blank">Here</a></Url></h6>
  <h6>To receive new opportunities, Email your resume to resumes@wynisco.com.  </h6>
  <h6 id="linkedin-link"><Url ><a href="https://www.linkedin.com/company/wynisco/" target="_blank">Follow us on Linkedin</a></Url></h6>
</div>
<div></div>
<Divider />
<Divider />

    </div>
  )

};

export default Promotion;