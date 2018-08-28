import React, { Component } from 'react';
import { Row, Col, Card } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class GameShow extends Component {

    render() {
        console.log("player1", this.props.games)
    
        return(
            <div className="game-container">
                <Row>
                    <Col s={12}>
                        <h1 className="game-container__title">That was a great game!</h1>
                    </Col>
                </Row>
                
                <Card className="game-container__card">
                    <p>Player1 - {this.props.games.player1}</p>
                    <p>Player2 - {this.props.games.player2}</p>
                    <p>Winner  - {this.props.games.winner}</p>
                </Card>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, null)(GameShow);