const API_URL = "http://192.168.1.190:3001/api"

const authSuccess = (user) => {
 
    return {
        type: 'LOGIN',
        user: user
    }
}

const signupSuccess = (user) => {
 
    return {
        type: 'SIGNUP',
        user: user
    }
}

const authFailure = (errors) => {
  
    return {
        type: 'AUTHENTICATION_FAILURE',
        errors: errors.message
    }
}

export const authenticate = (credentials, history) => {

    return dispatch => {
      
        return fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user: credentials})
        })
        .then(res => res.json())
        .then((response) => {
        
        if (response.errors) {
            throw Error(response.errors);
        } else if (response.token){

            const token = response.token
            localStorage.setItem('Token', token);
            history.push("/")
            dispatch(authSuccess(response)) 
        }        
        })
    
        .catch( errors => {
            window.alert(errors)
            
            dispatch(authFailure(errors))
            localStorage.clear()
        })
    }
  }

  export const signup = (user, history) => {
  
    return dispatch => {
      
      return fetch(`${API_URL}/signup`, {
        
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user})
      })
      .then(res => res.json())
      .then(response => {

        const token = response["token"];
        localStorage.setItem('Token', token);
        history.push("/")
        dispatch(signupSuccess(response)) 
      
    })
      .catch( error => {
        console.log(error);
        
        dispatch(authFailure(error))
        localStorage.clear()
      })
    }
  }