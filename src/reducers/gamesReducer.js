export default (state = {
    
    player1: "",
    player2: "",
    winner: ""
}, action) => {

    switch (action.type) {
        case 'ADD_GAME':
        
            return {
                ...state,
                player1: action.game.player1,
                player2: action.game.player2,
                winner: action.game.winner
            }
        
        default:
            return  state  
    
    }
  
}
