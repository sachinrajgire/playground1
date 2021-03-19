

import React from 'react';
import { connect } from "react-redux";

// let initial=[
//     {name:"Lalit" ,rank :30 },
//     {name:"Venkat" ,rank :32 },
//     {name:"Sachin" ,rank :39 },
//     {name:"Kinjal" ,rank :3 },
//     {name:"Eric" ,rank :20 },
//     {name:"Prakash" ,rank :22 },
//     {name:"Kevin" ,rank :2 }
// ]

class Ranking extends React.Component {

constructor (props) {
super(props)

// this.state ={
//     can:initial
// }
}
// handleMoveUp (idx,beatRank){
// console.log(idx,'idx');
// const newState = this.state.can.map(i=>{
//     if(idx === i.name){
//         return {
//             ...i,
//             rank:beatRank-1
//         }
//     }
//     return i 
// })
// this.setState({can:newState})
// console.log(newState,'newState');
    
// }

    render() {
        console.log(this.props,'THIS>PROPS')
let ran = this.props.can
.sort((a,b)=>a.rank - b.rank)
.map((i,idx,arr)=>{
    return (
        <div>
          {i.name}{" "}
          <button onClick={()=>this.handleMoveUp(i.name,arr[idx-1].rank)}> Move Up </button>
        </div>
    )
})
        return(
            <div style={{margin:'100px'}}>
           
           {ran}

            </div>

        )
    
        }

}

const mapStateToProps = (state) => {
    console.log(state,'state from mapSTATETOPROPS ')
    return {
      can: state.ranking.can,
    }
  }
  
// const mapDispatchToProps = { increment, decrement, reset }

export default connect(mapStateToProps, null)(Ranking)

// connect is HOC - higher order component 


