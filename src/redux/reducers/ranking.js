

import { MOVE_UP } from "../actionTypes";
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
  data:[]
};


export default function(state = initialState, action) {
  switch (action.type) {
    case MOVE_UP: {
    return state
    }
  
    default:
      return state;
  }
}
