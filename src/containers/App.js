import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../components/Header';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Leaderboard from '../containers/Leaderboard';
import GameForm from '../containers/GameForm';
import GameShow from '../containers/GameShow';

import './App.css';

class App extends Component {

	render() {
   
		return (
		
		<Router>
			<div className="App">

				<Header />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/" component={Leaderboard} />
				<Route exact path="/games/new" component={GameForm} />
				<Route exact path="/games/:id" component={GameShow} />

			</div>
		</Router>
		);
  }
}

export default App;
