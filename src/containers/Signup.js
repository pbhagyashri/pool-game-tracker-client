import React, {Component} from 'react';
import { signup } from '../actions/authActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const API_URL = "http://192.168.1.190:3001/api";

class Signup extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
    
        event.preventDefault();
        this.props.signup(this.state, this.props.history)
        
        this.setState({
            username: "",
            email: "",
            password: ""
        })
    
    }

    render() {
        return (
            <article className="signup-container">
                <h1 className="signup-container__title">Please Signup</h1>

                <form className="signup-form" onSubmit={(event) => this.handleSubmit(event)}>

                    <label>Username</label>
                    <input 
                    type="text" 
                    name="username"
                    placeholder="Please choose a username"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.username}
                    />

                    <label>Email</label>
                    <input 
                    type="text" 
                    name="email"
                    placeholder="Please enter your email"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.email}
                    />

                    <label>Password</label>
                    <input 
                    type="password" 
                    name="password"
                    
                    placeholder="Please select a password"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.password}
                    />

                    <button type="submit" className="btn custom-btn red">Submit</button>
                </form>

            </article>
        )
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signup:  signup,
    }, dispatch);
};
  
  export default connect(null, mapDispatchToProps)(Signup);