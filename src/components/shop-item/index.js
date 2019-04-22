import React,{Component} from 'react'
import {formatDistance, getImgaeUrl} from '../../common/util'
import './style.scss'
class ShopItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand_flag:false
    };
    this.toggleExpand = this.toggleExpand.bind(this)
  };
  toggleExpand() {
    let expand_flag = this.state.expand_flag;
    this.setState({expand_flag:!expand_flag});
  }
  render() {
    const shop = this.props.shop;
    function tag_items(tags) {
      return tags.map(tag => {
        const styleObj = {
          'borderColor':'#'+tag.border, 
          'color':'#'+tag.color
        };
        return <div  style={styleObj} className="tag" key={tag.text}>{tag.text}</div>
      })
    }
    function activity_items(activities) {
      return activities.map((a, index)=> {
        const styleObj = {
          backgroundColor:'#'+a.icon_color
        }
        return (
        <div className="activity" key={index}>
          <span className="icon" style={styleObj}>{a.icon_name}</span> 
          <span className="text">{a.description}</span>        
        </div>)
      })
    }
    function show_delivery_mode(mode) {
      if(!mode) return null;
      const styleObj = {
        color:'#'+mode.text_color,
        background: `linear-gradient(to right, #${mode.gradient.rgb_from},#${mode.gradient.rgb_to})`
      };
      return <span style={styleObj}>{mode.text}</span>
    }
    return (
      <div className="wraper">
        <img className="pic" alt='' src={getImgaeUrl(shop.image_path)} />
        <div className="text">
          <div className="title">{shop.name}</div>
          <div className="charactor">
            <div className="saless">
              <span>{shop.rating}</span>
              <span>月售{shop.recent_order_num}</span>
            </div>
            <div className="feature">
              {show_delivery_mode(shop.delivery_mode)}
            </div>
          </div>
          <div className="charactor freight">
            <div className="price">
              <span>起送￥{shop.float_minimum_order_amount}</span>
              <span>配送￥{shop.float_delivery_fee}</span>
            </div>
            <div className="distance">
              <span>{shop.order_lead_time}分钟</span>
              <span>{formatDistance(shop.distance)}</span>
            </div>
          </div>
          <div className="tag_list">
            {tag_items(shop.support_tags)}
          </div>
          <div className="activities">
            <div className="list" style={{height:this.state.expand_flag?'auto':'18px'}}>
              {activity_items(shop.activities)}
            </div>
            <span onClick={this.toggleExpand} className ="toggle_btn">{shop.activities.length}个活动^</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ShopItem;
