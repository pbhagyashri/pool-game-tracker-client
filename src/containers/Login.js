import React, {Component} from 'react';

const API_URL = "http://192.168.1.190:3001/api"
class Login extends Component {
    constructor() {
        super();

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

    return fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({user: this.state})
    })
      .then(res => res.json())
      .then((response) => {
        if (response.errors) {
            throw Error(response.errors);
        } else{
    
          localStorage.setItem('Token', response.token);
          localStorage.setItem('Username', response.username);
        }        
      })
      .catch( error => {
    
        window.alert(error)
        localStorage.clear()
      })
        .then(
        this.setState({
          email: "",
          password: ""
        }),
        this.props.history.push("/")
      )
    }

    render() {
        return (
            <article className="login-container">
                <h1>Please Login</h1>

                <form className="login-form" onSubmit={(event) => this.handleSubmit(event)}>

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
                    type="text" 
                    name="password"
                    placeholder="Please select a password"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.password}
                    />

                    <button type="submit" className="btn custom-btn">Submit</button>
                </form>

            </article>
        )
    }
}

export default Login;