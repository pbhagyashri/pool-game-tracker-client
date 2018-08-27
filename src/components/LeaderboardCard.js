import React from 'react'

const LeaderboardCard = ({ users }) => {
    
    return (
        
        <section>
            {
                users ? users.map(user => user.username) : ""
            }
        </section>

    )

}

export default LeaderboardCard