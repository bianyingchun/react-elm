import React from 'react';
import './style.scss'
export default function ShopInfo(props) {
	const {brand_story, rst} = props;
	console.log(props)
	return (
		<div className="shop_info">
			<div className="brand_story">
			</div>
			<div className="delivery">
			</div>
			<div className="service">
			</div>
			<div className="pics">
			</div>
			<div className="info">
				<div className="title">商家信息</div>
				<div className="item">
					{rst.description}
				</div>
				<div className="item">
					<div className="title">品类</div>
					<div className="text">{rst.flavors.map(item=>item.name).join(',')}</div>
				</div>
				<div className="item">
					<div className="title">商家电话</div>
					<div className="text">{rst.phone}</div>
				</div>
				<div className="item">
					<div className="title">地址</div>
					<div className="text">{rst.address}</div>
				</div>
				<div className="item">
					<div className="title">营业时间</div>
					<div className="text">{rst.opening_hours.join(',')}</div>
				</div>
			</div>
		</div>
		)
}