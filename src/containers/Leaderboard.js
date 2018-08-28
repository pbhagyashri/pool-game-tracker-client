import React, {Component} from 'react';
import LeaderboardCard from '../components/LeaderboardCard'

const API_URL = "http://192.168.1.190:3001/api"

class Leaderboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

        fetch(`${API_URL}/leaders`, {
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