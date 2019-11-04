import React from 'react'
import './style.scss'

export default function OrderItem(props) {
  const {title} = props;
  return (
    <div className="ordercard_wraper">
      <div className="ordercard_body"> 
        <div className="img">
          <img src='https://cube.elemecdn.com/9/79/8b54dfb95d7257a5402771b70e666jpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed' className="logo"/>
        </div>
        <div className='content'>
          <div className="header">
            <div className="title">
              <div className="name">初心沙拉店</div>
              <div className="state">订单已送达</div>
            </div>
            <div className="datetime">2019-08-16 12:39</div>
          </div>
          <div className="order-detail">
            <div className="detail">
              <span className="product_name">彩虹水果蔬菜沙拉-千岛酱</span>
              <span className="price">￥12.0</span>
            </div>
          </div>
        </div>
      </div>
      <div className="order_footer">
        <button className="card_button">再来一单</button>
      </div>
    </div>
    )
}