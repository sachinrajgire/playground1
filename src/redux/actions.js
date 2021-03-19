import { MOVE_UP } from "./actionTypes";



export const moveUp = (clickedName,beatRank) => ({
  type: MOVE_UP,
  payload: {
    clickedName,
    beatRank
  }
});