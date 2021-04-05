

import { MOVE_UP , MOVE_DOWN} from "../actionTypes";
let initial=[
    {name:"Lalit" ,rank :30 },
    {name:"Venkat" ,rank :32 },
    {name:"Sachin" ,rank :39 },
    {name:"Kinjal" ,rank :3 },
    {name:"Eric" ,rank :20 },
    {name:"Prakash" ,rank :22 },
    {name:"Kevin" ,rank :2 }
]

const initialState = {
  can: initial,
  isValid:false,
  data:[],
  counter: 0
};


export default function(state = initialState, action) {
  switch (action.type) {
    case MOVE_UP: {
      // const copy = {
      //   ...state,
      //   counter: state.counter + action.payload
      // }
      const newState = state.can.map(i=>{
        if(action.payload.idx === i.name){
            return {
                ...i,
                rank:action.payload.beatRank-1
            }
        }
        return i 
    })
    const copy = {
      ...state,
      can: newState
    }
      return copy
    // return state
    }

    case MOVE_DOWN: {
      const newState = state.can.map(i=>{
        if(action.payload.idx === i.name){
            return {
                ...i,
                rank:action.payload.beatRank+1
            }
        }
        return i 
    })
    const copy = {
      ...state,
      can: newState
    }
      return copy
    }
  
    default:
      return state;
  }
}
