

import { STORE_RECORDS } from "../actionTypes";

const initialState = {
  records:[]
};


export default function(state = initialState, action) {
  console.log(action,'action')
  switch (action.type) {
    case STORE_RECORDS: {
  
    let newRecords = {
      ...state,
      records:action.payload
    }
    return newRecords
    
    }

  
    default:
      return state;
  }
}
