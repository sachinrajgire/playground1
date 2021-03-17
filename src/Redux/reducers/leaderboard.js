


const initialState = {
    ranking:[
   {name:'Kinjal', rank:4},
   {name:'Venkat' ,rank:2},
   {name:'Lalit' ,rank:3},
],
counter :0
}

const leaderboard = (state = initialState, action) => {
console.log(action,'action')

  switch (action.type) {
    case 'MOVE_UP': {
      
        const copy = {
        ...initialState,
        ranking:[...initialState.ranking]
        }
        const getRanking=copy.ranking.find(i=>i.name===action.payload)
      console.log(getRanking,'getRankingForLalit');

    }
    case 'counterplus': {
      
        const copy = {
        ...initialState,
      counter:initialState.counter
        }
        copy.counter = copy.counter+1
        return copy
    }
    default: {
      return state;
    }
  }
};

export default leaderboard;
