import React , {useState} from 'react';
// ES6

const availableTeamNames= ['Einstein', 'Newton', 'Tesla']
const availableCandidates= ["Venkat",
"Kevin",
"Kinjal",
"Eric",
"Ronish",
"Prakash",
"Lalit"]

function Lottery({}) {

const [pickedNumbers,setPickedNumbers] =useState([])
console.log(pickedNumbers,'pickedNumbers');

//passing arguments normally
function handleLottery(e,Employer1) {
    
  let randomNumber = Math.floor(Math.random()*availableCandidates.length)
  console.log(randomNumber,'randomNumber');

if(!pickedNumbers.includes(randomNumber) && pickedNumbers.length <=7){
    let newPickedNumber= [...pickedNumbers]
    newPickedNumber.push(randomNumber)
    setPickedNumbers(newPickedNumber)
}

}

function finalizeLottery() {
   return  pickedNumbers.map(i=>{
       return  <div>{availableCandidates[i]}</div>
    })
}


 return (
    <div className='Lottery-container'>
    {pickedNumbers.length===7 && finalizeLottery()}
     <button onClick={(e)=>handleLottery(e)}>Start Lottery</button>
    </div>)
}

export default Lottery
 

