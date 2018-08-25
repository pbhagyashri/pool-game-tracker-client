import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../components/Header';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import './App.css';
import GameForm from '../containers/GameForm';
import { getUser } from '../actions/authActions'


class App extends Component {

  render() {
   
    return (
      
      <Router>
        <div className="App">

          <Header />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/games/new" component={GameForm} />
          
        </div>
      </Router>
    );
  }
}

export default App;
