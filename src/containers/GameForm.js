import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input } from 'react-materialize';
import { authenticate } from '../actions/authActions'
import Login from './Login'
const API_URL = "http://192.168.1.190:3001/api"

class GameForm extends Component {
    constructor(props) {
        super(props);

        this.state = {

            player1: "",
            player2: "",
            winner: "",
            users: []
        }

        fetch(`${API_URL}/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then((users) => {
            this.setState({users})
        })
    }

    handleChange = (event) => {
    
        this.setState({
        [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        
        event.preventDefault();
        
        fetch(`${API_URL}/games`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ game: {
                player1: this.state.player1,
                player2: this.state.player2,
                winner: this.state.winner
            } })
        })
        .then(res => res.json())
        .then((game) => {
           
        })
            

    }

    render() {
        let allUsers = this.state.users

        return (

            <article className="game-form-container">
                <h1  className="game-form-container__title">Start a new Game</h1>
            
                <form className="game-form" onSubmit={(event) => this.handleSubmit(event)}>

                    <Input 
                    type='select' 
                    label="Player1" name="player1"
                    value={this.state.player1} 
                    onChange={(event) => this.handleChange(event)}>

                        {allUsers.map(user => <option>{user.username}</option> )}

                    </Input>

                    <Input 
                    type='select' 
                    name="player2" 
                    label="Player2" 
                    value={this.state.player2}  
                    onChange={(event) => this.handleChange(event)}>

                        {allUsers.map(user => <option>{user.username}</option>)}

                    </Input>

                    <Input 
                    type='select' 
                    name="winner" 
                    label="Winner" 
                    value={this.state.winner}  
                    onChange={(event) => this.handleChange(event)}>

                        <option>{this.state.player1}</option>
                        <option>{this.state.player2}</option>
                    
                    </Input>

                    <button waves="light" type="submit" className="btn custom-btn red">Submit</ button>
                </form>

            </article>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log("auth", state.auth)
    return {
        users: state.auth.all_users
    }
}

// const mapDispatchToProps = (dispatch) => {

//     return bindActionCreators({
//         authenticate: authenticate,
//     }, dispatch);

// };

export default connect(mapStateToProps)(GameForm);