const API_URL = "http://192.168.1.190:3001/api"

const createGameSuccess = (game) => {
    return {
        type: 'ADD_GAME',
        game: game
    }
}

export const createGame = (game, history) => {
  
    return dispatch => {
      
      return fetch(`${API_URL}/games`, {
        
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({game})
      })
      .then(res => res.json())
      .then(response => {
        
        history.push(`/games/${response.id}`)
        dispatch(createGameSuccess(response)) 
      
    })
      .catch( error => {
        console.log(error);
      })
    }
  }