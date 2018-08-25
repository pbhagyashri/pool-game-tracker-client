import React, {Component} from 'react';
import { Button, Icon, Input, Row, Col, Card} from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { authenticate } from '../actions/authActions'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
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
        this.props.authenticate(this.state, this.props.history)
        
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        return (
     
            <article className="login-container">
                    
                <h1 className="login-container__title" s={12}>Please Login</h1>
                   
                <form className="login-form" onSubmit={(event) => this.handleSubmit(event)}>
                    
                    <Input 
                    label="Email"
                    type="email" 
                    name="email"
                    placeholder="Please enter your email"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.email}
                    
                    />
                        
                    <Input 
                
                    label="Password"
                    type="password" 
                    name="password"
                    placeholder="Please select a password"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.password}
                    />
                       
                    <Button waves="light" type="submit" className="btn custom-btn red">Submit</ Button>

                </form>
                
            </article>
  
        )
    }
}
  
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        authenticate: authenticate,
    }, dispatch);

};

export default connect(null, mapDispatchToProps)(Login);

