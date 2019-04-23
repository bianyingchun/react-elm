import React from 'react'
import {getImgaeUrl} from '../../common/util'
import './style.scss'
export default function FoodItem(props) {
  const {food} = props;
  return (
    <div className="food_wraper">
      <img src={getImgaeUrl(food.image_path)} alt='' className="pic"/>
      <div className="text">
        <div className="title">{food.name}</div>
        <div className="desc">{food.description}</div>
        <div className="tips">{food.tips}</div>
        <span className="price"></span>
      </div>
      <div className="cart_button">
        <span>A</span>
      </div>
    </div>
    )
}