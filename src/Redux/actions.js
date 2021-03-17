import { MOVE_UP } from "./actionTypes";

let nextTodoId = 0;

export let initialState = {
    ranking:[
   {name:'Kinjal', rank:4},
   {name:'Venkat' ,rank:2},
   {name:'Lalit' ,rank:3},
]
}

function getRank (){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           resolve(initialState)
        },2000)
    })

}
function updateRank (updatedRanking){
initialState=updatedRanking
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
           resolve(initialState)
        },2000)
    })

}

export const moveUp = (name) => ({type: MOVE_UP,payload:name})
export const counterplus = (name) => ({type: 'counterplus'})

// function moveUp(name) {
//     // We can invert control here by returning a function - the "thunk".
//     // When this function is passed to `dispatch`, the thunk middleware will intercept it,
//     // and call it with `dispatch` and `getState` as arguments.
//     // This gives the thunk function the ability to run some logic, and still interact with the store.
//     return function(dispatch) {
//       return fetchSecretSauce().then(
//         (sauce) => dispatch(makeASandwich(forPerson, sauce)),
//         (error) => dispatch(apologize('The Sandwich Shop', forPerson, error)),
//       );
//     };
//   }