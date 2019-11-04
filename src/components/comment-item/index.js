import React from 'react';
import {getImgaeUrl} from '../../common/util';
import './style.scss'
export default function CommentItem(props) {
	const {info} = props;
	function get_avatar() {
		if(info.avatar) return <img src={getImgaeUrl(info.avatar)} alt=''/>;
		return <span></span>
	}
	function get_pic() {
		if(!info.order_images) return null;
		const pics = info.order_images.map(item => (
			<img src={getImgaeUrl(item.image_hash)} key={item.image_hash}/>
			))
		return <div className="pic_list">{pics}</div>
	};
	function get_reply() {
		if(info.reply) {
			return <div className="reply">
						{'商家回复: '+info.reply.content}</div>
		}
		return null
	};
	return (
		<div className="comment_item">
			<div className="avatar">
				{get_avatar()}
			</div>
			<div className="container">
				<div className="addition">
					<span>{info.username}</span>
					<span className="date">{info.rated_at}</span>
				</div>
				<div className="text">
					{info.rating_text}
				</div>
				{get_reply()}
				{get_pic()}
			</div>
		</div>
		)
}