import React,{Component} from 'react'
import CommentItem from '../comment-item';
import './style.scss'
export default class ShopComment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			current_tag:-1
		};
		this.toggle_tag = this.toggle_tag.bind(this)
	};
	toggle_tag(index) {
		this.setState({current_tag:index});
	};
	comment_tags(tags) {
		return  tags.map((tag, index) => {
					let count = tag.count < 0 ?'' : ' '+tag.count;
					let styleObj = {};
					if(tag.unsatisfied) {
						styleObj = {
							color:'#6d7885',
							backgroundColor:'#f5f5f5'
						};
						if(this.state.current_tag === index) {
							styleObj = {
								color:'#fff',
								backgroundColor:'#ccc'
							}
						}
					} else {
						styleObj = {
							color: '#6d7885',
	    				backgroundColor: '#ebf5ff'
						};
						if(this.state.current_tag === index) {
							styleObj = {
								backgroundColor:'#0097ff',
								color:'#fff'
							}
						}
					}
					return (<li key={index} style={styleObj} onClick={() => {
						this.toggle_tag(index)
					}}>{tag.name+count}</li>);
			})
	};
	comment_items(comments) {
		return comments.map((item,index) => (
			<CommentItem key={index} info={item}></CommentItem>
		))
	}
	render() {
		const {info} = this.props;
		if(!info.rating) return null;
		return (
			<div className="comment_wraper">
				<div className="overview">
					<div className="score">{info.rating.overall_score.toFixed(1)}
					</div>
					<div className="rating">
						<div className="item">
							<span>味道</span>
							<span className="num">{info.rating.taste_score.toFixed(1)}</span>
						</div>
						<div className="item">
							<span>包装</span>
							<span className="num">{info.rating.package_score.toFixed(1)}</span>
						</div>
						<div className="item">
							<span>配送</span>
							<span className="num">{info.rating.rider_score.toFixed(1)}</span>
						</div>
					</div>
				</div>
				<div className="content">
					<ul className="tag_list">
						{this.comment_tags(info.tags)}
					</ul>
					<div className="comment_list">
					{this.comment_items(info.comments)}
					</div>
				</div>
			</div>
			)
	}
}