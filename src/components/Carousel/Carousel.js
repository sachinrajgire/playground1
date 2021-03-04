
import React, { Fragment, useEffect, useState } from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

let images= [`https://images.unsplash.com/photo-1614680889612-d82e69f49ea2?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
`https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`,
`https://images.unsplash.com/photo-1610963196817-7d1415647029?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`]
function Carousel (){
   
    const [currentImg, setCurrentImg] = useState(0)
    console.log(currentImg,'currentImg');

    return (
        <div>
     {currentImg > 0 && <KeyboardBackspaceIcon fontSize='large' onClick={()=>setCurrentImg(currentImg-1)}/> } 
      <img src={images[currentImg]} height='600px' width='600px' />
    

      {currentImg < images.length -1 && <ArrowRightAltIcon  fontSize='large' onClick={()=>setCurrentImg(currentImg+1)} disable/> }
     <div style={{textAlign:'center'}}>

     {`Showing ${currentImg+1} of ${images.length}`}
     </div>
        </div>

    )
}

export default Carousel