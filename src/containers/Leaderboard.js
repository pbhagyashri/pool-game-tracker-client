import React, {Component} from 'react';
//import { Button, Icon, Input, Row, Col, Card} from 'react-materialize';

import { getUsers } from '../actions/userActions';
import LeaderboardCard from '../components/LeaderboardCard'

const API_URL = "http://192.168.1.190:3001/api"

class Leaderboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
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

    render() {
    
        return (
            <div>
                <LeaderboardCard users={this.state.users} />
            </div>
        )
    }

}

export default Leaderboard;