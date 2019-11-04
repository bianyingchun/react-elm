import React, {Component} from 'react'
import './style.scss'
import {Info, distribution, status} from './info.js'
import {getImgaeUrl} from '../../../common/util'
export default class OderDetail extends Component{
	constructor(props) {
    super(props);
  };
	render(){
		function _beauty_price(price) {
			return price > 0 ? `￥${price}`:`-￥${-price}`
		}
		function productItem(item, key, show_count, extra_items) {
			const quantityDiv = item.quantity && show_count? (<div className="num">x{item.quantity}</div>) : null;
			const extraDiv = extra_items ? (<p className="extra_item">{extra_items}</p>) : null;
			return (
				<div className="product_item" key={key}>
						<div className="profile">
						<p className="name">{item.text || item.name}</p>
						{extraDiv}
					</div>
					{quantityDiv}
					<div className={item.price>0?"price":"price discount"}>{_beauty_price(item.price)}</div>
				</div>
			)
		}

		function extraFee() {
			return (<div className="listitem">
				{productItem(Info.basket.deliver_fee)}
				{productItem(Info.basket.packing_fee)}
				</div>)
		}

		function discountList() {
			const list = Info.basket.extra.map((item, index) => {
				return productItem(item, index)
			})
			return <div className="price">{list}</div>
		}

		function productList() {
			const product_list = Info.basket.group.map((arr, index) => {
				let list = arr.map(item => {
					const extra_items = item.specs.map(str => <span className="extra_item" key={str}>{str}</span>)
					return productItem(item, item.id, true,extra_items);
				});
				return <div className="cart_item" key={index}>{list}</div>
			});
			return <div className="product_list">{product_list}</div>
		}

		function listItem(title, content) {
			return (
			<div className="list_item">
				<span>{title} : </span>
				{content}
			</div>)

		}
		function deliverCard() {
			const address = (<div className="content">
				<p>{Info.consignee}</p>
				<p>{Info.phone}</p>
				<p>{Info.address}</p>
			</div>)
			const callrider = (
			<div className="callrider">
				<span className="rider_icon">联系骑手|</span>
				<span>{distribution.rider_name}</span>
			</div>)
			return (<div className="card deliver_card">
				<div className="title">配送信息</div>
				<div className="card_lsist">
					{listItem('送达时间',Info.deliver_time)}
					{listItem('送货地址',address)}
					{listItem('配送方式',Info.basket.deliver_fee.name)}
					{listItem('配送骑手',callrider)}
				</div>
			</div>)
		}

		function orderCard() {
			return (
				<div className="card order_card">
				<div className="title">订单信息</div>
					<div className="card_lsist">
						{listItem('订单号',Info.unique_id)}
						{listItem('支付方式',Info.pay_method)}
						{listItem('下单时间',Info.formatted_created_at)}
						{listItem('订单备注',Info.description)}
					</div>
				</div>
			)
		} 

		function statusCard() {
			return (<div className="card status_card">
				<div className="title">{status.status_bar.title}</div>
				<div className="desc">
					<div className="desc1">{status.status_remark.title}</div>
					<div className="desc2">{status.status_remark.description.text}</div>
				</div>
			</div>)
		}

		return (
			<div className="container">
				<div className="header">
					<span className="icon_back">back</span>
					订单详情
				</div>
				<div className="detail">
					{statusCard()}
					<div className="card restaurant_card">
						<div className="head">
							<div className="name_wrap">
								<img className="avatar" src={getImgaeUrl(Info.restaurant_image_hash)}/>
								<span className="name">{Info.restaurant_name}</span>
							</div>
							<span className="icon_arrow_right">></span>
						</div>
						{productList()} 
						{extraFee()}
						{discountList()}
						<div className="final_price">
							<div className="call_shoper">
								<span className="icon icon_call"></span>
								联系商家
							</div>
							<div className="total_price">
								<span>实付</span>
								￥{Info.total_amount}
							</div>
						</div>
					</div>
					{deliverCard()}
					{orderCard()}
				</div>
			</div>
			)
	}
}