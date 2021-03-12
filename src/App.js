

import React, { Fragment, useEffect, useState } from 'react';
import './App.css'
import './beststyles.scss'
import DataTable from './components/DataTable/DataTable';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import { Link, Redirect, useHistory } from "react-router-dom";
import { Button,Input, FormGroup,Label,Col} from 'reactstrap';
import Spinner from '@material-ui/core/LinearProgress';
import axios from './Axios';
import {XYPlot, LineSeries, VerticalBarSeries, XAxis, YAxis} from 'react-vis';


const visData = [
    {x: 'Amazon', y: 8},
    {x: 'Faceb', y: 5},
    {x: 'Goldman', y: 3},
    {x: 'JP', y: 2},
   
  ];

function App() {
const [data, setData]=useState([])
const [searchText,setSearchText]=useState("")
const [searchInvoked,setSearchInvoked]=useState(false)
const [isDataLoading, setIsDataLoading] = useState(false)
const [nextCursor, setNextCursor] = useState(null)
console.log(nextCursor,'nextCursor');

const history= useHistory()


function handleKeyPress (e) {
if(e.which == 13 || e.keyCode == 13){
    handleSearch()
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
    setIsDataLoading(true)
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

function handleSearch () {
    setSearchInvoked(true)
    setIsDataLoading(true)

    axios.get(`v1/record/search?searchText=${searchText}`)
    .then(res=>{
        console.log(res)
        setData(res.data)
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

{/* <XYPlot height={300} width={300} xType="ordinal">
<VerticalBarSeries data={visData} />
<XAxis/>
<YAxis/>
</XYPlot> */}

<Button disabled={searchInvoked} onClick={()=>handleSearch()} color="primary">Search</Button>
{searchInvoked && <span style={{marginLeft:'20px'}}><Button  onClick={()=>handleClear()} color="primary">Clear</Button></span>
}
</div>
</Col>
</div>
<div>
    <Login />
    <Logout />
</div>
<div>
<div style={{margin:'20px',textAlign:'right'}}>
<Button onClick={()=>getNext()} color="secondary">Next</Button>
</div>
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