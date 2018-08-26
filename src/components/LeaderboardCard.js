import React from 'react'

const LeaderboardCard = ({ users }) => {
    console.log("LC", users)
    return (
        
        <section>
            {
                users ? users.map(user => user.username) : ""
            }
        </section>
    
    )

}

export default LeaderboardCard