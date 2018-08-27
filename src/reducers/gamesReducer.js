export default (state = {
    games: [],
    errors: []
}, action) => {

    switch (action.type) {
        
        case 'ADD_GAME':
            return {
                ...state,
                games: [...state.games, action.game]
    
            }
        
        default:
            return  state  
    
    }
  
}
