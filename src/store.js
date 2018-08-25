// import authReducer from './reducers/authReducer'

// import {
//     createStore,
//     applyMiddleware,
//     combineReducers,
//     Store
// } from 'redux';
// import thunk from 'redux-thunk';

// const GamesReducer = (state = [], action) => {
//     switch(action.type) {
//         case "GET_GAMES_SUCCESS":
//         return action.games;

//         default:
//             return state;
//     }
// }


// const reducers = combineReducers({
//     auth: authReducer
// })

// const middleware = [thunk];

// export default createStore(
//     reducers,
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSTION__ && window.__REDUX_DEVTOOLS_EXTENSTION__()
// )
