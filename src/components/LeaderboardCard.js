import React from 'react'
import { Row, Col, Card } from 'react-materialize';
const LeaderboardCard = ({ users }) => {
    
    return (
        
        <section className='leaderbord-section'>
            
            <Row>
            {
                users ? users.map(user => 
                    
                    <Col l={3} m={6} s={12}>
                        <Card className='leaderbord-section__card'>
                        <i className="material-icons leaderbord-section__icon">face</i>
                        <p>{user.username}</p>
                        <hr></hr>
                        Rank {user.victories}
                        
                        </Card>
                    </Col>
                    
            ) : <div>...loading</div>
            }
            </Row>
        </section>

    )

}

export default LeaderboardCard