import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../components/Header';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import './App.css';


class App extends Component {
  render() {
   
    return (
      
      <Router>
        <div className="App">

          <Header />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          
        </div>
      </Router>
    );
  }
}

export default App;
