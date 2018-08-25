export default (state = {
    authenticated: false,
    current_user: "",
    all_users: [],
    errors: []
}, action) => {

    switch (action.type) {
        
        case 'LOGIN':
    
            return {
                ...state,
                authenticated: true,
                current_user: action.user.username
            }

        case 'SIGNUP':
        
        return {
            ...state,
            authenticated: true,
            current_user: action.user.username,
            all_users: [...state.all_users, action.user]
        }
        
        default:
            return  state
        
    
    }
  
}
