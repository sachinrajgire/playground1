
import React from 'react';
import { connect } from "react-redux";
import { MOVE_UP } from '../../Redux/actionTypes'
import _ from 'lodash';
import {moveUp} from '../../Redux/actions'


class Leaderboard extends React.Component {
    
    
    
    
render() {
let pos = _.sortBy(this.props.ranking,['rank'])


let ret = pos.map(i=>{
    return (<div>
        {i.name}
        <button onClick={()=>this.props.moveUp(i.name)}>Move Up </button>
        <button>Move Down </button>
        </div>)
})
        console.log(this.props,'this.props')

      return (
      <div>
{ret}
      </div>
      
      
        )
    }
  }

  const mapStateToProps = (state) => {
console.log(state ,'state');
    return {
        ranking:state.leaderboard.ranking
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      moveUp: (name) => dispatch(moveUp(name)),
      moveDown: (name) => dispatch({ type: 'MOVE_DOWN',payload:name }),
   
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Leaderboard)