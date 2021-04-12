import React, { Fragment, useEffect, useState } from 'react';
import './App.css'
import './beststyles.scss'
import DataTable from './components/DataTable/DataTable';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import {  useHistory } from "react-router-dom";
import { Button,Input, FormGroup,Label,Col} from 'reactstrap';
import Spinner from '@material-ui/core/LinearProgress';
import axios from './Axios';
import TopEmployers from './components/Visualizations/TopEmployers/TopEmployers';
import NavBar from './components/NavBar/NavBar';
import Promotion from './components/Promotion/Promotion';
import { useSelector, useDispatch } from 'react-redux';
import {storeRecords} from './redux/actions';




function App() {
const [data, setData]=useState([])
const [searchText,setSearchText]=useState("")
const [searchInvoked,setSearchInvoked]=useState(false)
const [isDataLoading, setIsDataLoading] = useState(false)
const dispatch = useDispatch()
const reduxRecords = useSelector((state)=>state.records)


function getNextCursor() {
if(data.length === 0) {
    return null
}
return data[data.length-1]._id

}

const history= useHistory()


function handleKeyPress (e) {
if((e.which == 13 || e.keyCode == 13) && !searchInvoked){
    handleSearch()
}
}

// componentDidMount
useEffect(()=>{

setIsDataLoading(true)

axios.get(`v1/record/getpaginatedrecords?next_cursor=${getNextCursor()}`)
.then(res=>{
    setData(res.data)
    setIsDataLoading(false)
    dispatch(storeRecords(res.data))
})
.catch(e=>{
    setIsDataLoading(false)
    console.log(e)
})
},[])

function getNext(){
    setIsDataLoading(true)
    axios.get(`v1/record/getpaginatedrecords?next_cursor=${getNextCursor()}`)
.then(res=>{
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
        setData(res.data)
        setIsDataLoading(false)

})
    .catch(e=>{
        setIsDataLoading(false)
        console.log(e)
    }) 

}


function handleClear(){
setSearchText("")
setSearchInvoked(false)
}

if(isDataLoading){
   return <Spinner />
}

return (  

<div className='container'>


<NavBar>

<div>

<Promotion />

<div>
<div className='mxl'>
     You can search by company name, university name, specialization or job title
     </div>  
<div className= "search-group">
 
<Input value={searchText} onChange={(e)=>setSearchText(e.target.value)} 
onKeyPress={(e)=>handleKeyPress(e)} autoFocus type="text" name="email" id="inline" placeholder="Search..." />
<div style={{margin:'20px'}}>
</div>

<div className ="search-group">
<Button  onClick={()=>handleSearch()} color="primary" id="inline">Search</Button>
</div>

</div>


{searchInvoked && <span style={{marginLeft:'20px'}}><Button  onClick={()=>handleClear()} color="primary">Clear</Button></span>}
</div>

<DataTable 
data={data}
/>
</div>
<div>

</div>
{data &&
<div style={{margin:'20px',textAlign:'right'}}>
<Button onClick={()=>getNext()} color="secondary">Next</Button>
</div>
}
</NavBar>  
</div>



) ;      

}

export default App