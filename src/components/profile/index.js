import React, {Component} from 'react'
import './style.scss'
export default  class Profile extends Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	};

	render() {
	let info = {
		tel:'18255444265',
		username:'恨恨地水润',
		red_packet:[1,2,3],
		coin:0
	}
	return (
		<div className="profile_wraper">
			<div className="header">
				<div className="avatar"></div>
				<div className="text">
					<p className="username">{info.username}</p>
					<p className="phone">{info.tel}</p>
				</div>
				<span className="icon_arrow_right">
					O
				</span>
			</div>
			<div className="main">
				<div className="section">
					<p className="red"><span>{info.red_packet.length}</span>个</p>
					<p>红包</p>
				</div>
				<div className="section">
					<p className="green"><span>{info.coin}</span>个</p>
					<p>金币</p>
				</div>
			</div>
		</div>
	)
	}
}