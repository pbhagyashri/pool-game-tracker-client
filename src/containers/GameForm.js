import React, {Component} from 'react';

const API_URL = "http://192.168.1.190:3001/api"

class Login extends Component {
    constructor() {
        super();

        this.state = {
        
            player1: "",
            player2: "",
            winner: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (

            <article>
                <h1>Start a new Game</h1>
                
                <form  className="game-form" onSubmit={(event) => this.handleSubmit(event)}>

                    <label>Player1</label>
                    <input 
                    type="text" 
                    name="email"
                    placeholder="Please enter your email"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.player1}
                    />

                    <input 
                    type="text" 
                    name="email"
                    placeholder="Please enter your email"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.player2}
                    />

                    <input 
                    type="text" 
                    name="email"
                    placeholder="Please enter your email"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.winner}
                    />
                
                </form>
            </article>
        )
    }
}

export default GameForm;