import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.scss";

export default class AnimateDemo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			star:false
		}
	}
	handleStar() {
		this.setState({
			star:!this.state.star
		})
	}
	render() {
		return (<div>
			<button onClick={()=>{
				this.handleStar(this.state.star);
			}}>start</button>
			<CSSTransition
			  in={this.state.star}
			  timeout={300}
			  classNames="star"
			  unmountOnExit
			>
			 <p className="star">☆</p>
			</CSSTransition>
			</div>)
	}
}