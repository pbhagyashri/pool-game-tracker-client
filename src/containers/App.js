import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../components/Header';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Leaderboard from '../containers/Leaderboard';
import GameForm from '../containers/GameForm';

import './App.css';

class App extends Component {

	// constructor(props) {
	// 	super(props)

	// 	this.state = {users: []}

	// 	fetch(`${API_URL}/users`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     .then(res => res.json())
    //     .then((users) => {
	// 		this.setState({users})
	// 	})
		
	// }

	render() {
   
		return (
		
		<Router>
			<div className="App">

				<Header />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/" component={Leaderboard} />
				<Route exact path="/games/new" component={GameForm} />

			</div>
		</Router>
		);
  }
}

export default App;
