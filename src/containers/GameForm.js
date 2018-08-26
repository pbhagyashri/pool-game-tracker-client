// import React, {Component} from 'react';
// import { connect } from 'react-redux';
// //import { bindActionCreators } from 'redux';

// import { authenticate } from '../actions/authActions'

// class GameForm extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
        
//             player1: "",
//             player2: "",
//             winner: "",
//             users: this.props.users
//         }
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//     }

//     render() {
        
//         console.log(this.props.users)
//         return (

//             <article>
//                 <h1>Start a new Game</h1>
                
//                 <form  className="game-form" onSubmit={(event) => this.handleSubmit(event)}>

//                     <label>Player1</label>
//                     <input 
//                     type="text" 
//                     name="email"
//                     placeholder="Please enter your email"
//                     onChange={(event) => this.handleChange(event)}
//                     value={this.state.player1}
//                     />

//                     <input 
//                     type="text" 
//                     name="email"
//                     placeholder="Please enter your email"
//                     onChange={(event) => this.handleChange(event)}
//                     value={this.state.player2}
//                     />

//                     <input 
//                     type="text" 
//                     name="email"
//                     placeholder="Please enter your email"
//                     onChange={(event) => this.handleChange(event)}
//                     value={this.state.winner}
//                     />
                
//                 </form>
//             </article>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     console.log("auth", state.auth)
//     return {
//         users: state.auth.all_users
//     }
// }

// // const mapDispatchToProps = (dispatch) => {

// //     return bindActionCreators({
// //         authenticate: authenticate,
// //     }, dispatch);

// // };

// export default connect(mapStateToProps)(GameForm);