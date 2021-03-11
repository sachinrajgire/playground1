

import React, { Fragment, useEffect, useState } from 'react';
import './App.css'
import './beststyles.scss'
import DataTable from './components/DataTable/DataTable';
import { Link, Redirect, useHistory } from "react-router-dom";
import { Button,Input, FormGroup,Label,Col} from 'reactstrap';
import Spinner from '@material-ui/core/LinearProgress';
import axios from './Axios'

function App() {
const [fav, setFav] =useState([])
const [data, setData]=useState([])
const [searchText,setSearchText]=useState("")
const [searchInvoked,setSearchInvoked]=useState(false)
const [isDataLoading, setIsDataLoading] = useState(false)
const [nextCursor, setNextCursor] = useState(null)
console.log(nextCursor,'nextCursor');

const history= useHistory()

function handleKeyPress (e) {
if(e.which == 13 || e.keyCode == 13){
    setSearchInvoked(true)
}
}

// componentDidMount
useEffect(()=>{
setIsDataLoading(true)

axios.get(`v1/record/getpaginatedrecords?next_cursor=${nextCursor}`)
.then(res=>{
    console.log(res)
    setData(res.data)
    setIsDataLoading(false)
})
.catch(e=>{
    setIsDataLoading(false)
    console.log(e)
})
},[])

function getNext(){
    axios.get(`v1/record/getpaginatedrecords?next_cursor=${nextCursor}`)
.then(res=>{
    console.log(res)
    let copyData=[...data,...res.data]
    setData(copyData)
    setIsDataLoading(false)
})
.catch(e=>{
    setIsDataLoading(false)
    console.log(e)
})
}


useEffect(()=>{
if(data && data.length) {
    const lastElemId = data[data.length-1]._id
   setNextCursor(lastElemId)
}

},[data])

useEffect(()=>{
//     setIsDataLoading(true)

//     axios.get(`v1/record/search?searchText=${searchText}`)
//     .then(res=>{
//         console.log(res)
//         setData(res.data)
//         setIsDataLoading(false)
//         setSearchInvoked(false)

// })
//     .catch(e=>{
//         setIsDataLoading(false)
//         setSearchInvoked(false)
//         console.log(e)
//     }) 
    
},[searchInvoked])

// const univName =data.map((i)=>{
// const {companyName, careerUrl, jobTitle,Id,graduationYear} = i 

// return (
//     <div className='cardDiv' onClick={()=>handleCardContainerOnClick(Id)}>
//     <Card 
//     careerUrl={careerUrl}
//     companyName={companyName}
//     jobTitle={jobTitle}
//     graduationYear={graduationYear}
//     key={Id} 
//     setFav={setFav}
//     fav={fav}
//     Id={Id}
//     />
//     </div>
//     )
// })  

   
function handleClear(){
setSearchText("")
setSearchInvoked(false)
}

if(isDataLoading){
   return <Spinner />
}

return (  

<div className='container'>

<div>
<Col sm={4} >
<Input value={searchText} onChange={(e)=>setSearchText(e.target.value)} 
onKeyPress={(e)=>handleKeyPress(e)} autoFocus type="text" name="email" id="exampleEmail" placeholder="Search..." />
<div style={{margin:'20px'}}>

<Button disabled={searchInvoked} onClick={()=>setSearchInvoked(true)} color="primary">Search</Button>
<span style={{marginLeft:'20px'}}><Button disabled={searchInvoked} onClick={()=>handleClear()} color="primary">Clear</Button></span>
</div>

</Col>

{searchInvoked && <span style={{marginLeft:'20px'}}>
     <Button onClick={()=>handleClear()} color="primary">Clear</Button>

</span>

}

</div>


<div>
{/* {univName} */}
<DataTable 
data={data}
/>
</div>
<div style={{margin:'20px',textAlign:'right'}}>
<Button onClick={()=>getNext()} color="secondary">Next</Button>
</div>
    
</div>



) ;      

}

export default App