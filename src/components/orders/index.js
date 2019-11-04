import React from 'react'
import {getImgaeUrl} from '../../common/util'
import './style.scss'
import OrderItem from './order-item/index.js'
import OrderDetail from './order-detail/index.js'

export default function Orders(props) {

  return (
    <div className="order_wraper">
      <OrderDetail></OrderDetail>
    </div>
    )
}
      //<OrderItem title="test-order"></OrderItem>