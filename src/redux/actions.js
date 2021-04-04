import { STORE_RECORDS } from "./actionTypes";



export const storeRecords = (data) => ({
  type: STORE_RECORDS,
  payload: data
});

