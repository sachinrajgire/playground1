import React from "react";
import Url from '../Url/Url';
import Divider from '@material-ui/core/Divider';



const Promotion = () => {
 
  return (
    <div className='mxl'>
  <div className='mxl'>
  <p>This database lists companies that just hired F1 Students.This can be great starting point for job search.First if company hire another F1 student
  they are open to OPT students, Secondly when companies hire,they hire in bulk.</p>
<Divider />
<Divider />

</div>
<div>
  <h6>App was build by Wynisco Bootcamp students. Data provided by Wynisco Data Team.Bootcamp Details <Url ><a href="https://wynisco.com/bootcamp" target="_blank">Here.</a></Url></h6>
  <h6>To receive new opportunities, Email your resume to resumes@wynisco.com <bold>AND </bold><Url ><a href="https://www.linkedin.com/company/wynisco/" target="_blank">Follow us on Linkedin</a></Url> </h6>
</div>
<div></div>
<Divider />
<Divider />

    </div>
  )

};

export default Promotion;