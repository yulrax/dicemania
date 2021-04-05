import React, { Component } from 'react'
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rd1 : 'three',
			rd2 : 'five',
			wobble : false,
			d : false,
			txt : true
		}
		this.generateNosAndRollDice = this.generateNosAndRollDice.bind(this)
	}
	
	//generate 2 different random nos.
	generateNos() {
		const options = ['one','two','three','four','five','six'];
		let r1 = options[Math.floor(Math.random() * options.length)];
		let r2 = options[Math.floor(Math.random() * options.length)];
		this.setState({rd1 : r1, rd2 : r2})
	}

	//change states evertime the btn is clicked
	rollDice() {
		this.setState({wobble : true});
		this.setState({txt : false});
		this.setState({d : true});
		// if(this.state.rd1 === this.state.rd2) {
					// confetti.start();
		// }

		setTimeout(() => {
			this.setState({wobble : false});
			this.setState({txt : true}); 
			this.setState({d : false});

		},800);
		
	}
	
	generateNosAndRollDice() {
		this.generateNos();
		this.rollDice();
	}

	// todo - btn hover color change
	
	render () {
		return (
			<div id="main" className="container mt-5 p-4">

					<div className="animate__animated animate__zoomInDown">
					<Die r={this.state.rd1} w={this.state.wobble}/>
					<Die r={this.state.rd2} w={this.state.wobble}/>

					</div>
					
					<div className="d-flex justify-content-center">
						<button 
						id="btn1"
						className="btn btn-danger btn-lg btn-block animate__animated animate__jackInTheBox"
						onClick={this.generateNosAndRollDice}
						disabled={this.state.d}>
							{this.state.txt ? "Roll Dice!" : <i className="fas fa-sync fa-spin"></i>}
						</button>
					</div>

			</div>
		)
	}
}

export default RollDice;