const API_URL = "http://192.168.1.190:3001/api"

const getUsersSuccess = (users) => {
 
    return {
        type: 'GET_USERS',
        users: users
    }
}

export const getUsers = ( history) => {

    return dispatch => {
      
        return fetch(`${API_URL}/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then((response) => {
            
        if (response.errors) {
            throw Error(response.errors);
        } else{
            dispatch(getUsersSuccess(response))

        }        
        })
    
        .catch( errors => {
            window.alert(errors)
            
        })
    }
  }

