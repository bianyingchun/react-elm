import React,{Component} from 'react';
import {toJS} from 'immutable';
import {connect} from 'react-redux';
import {formatDistance, getImgaeUrl} from '../../common/util'
import MenuList from '../menu-list'
import './style.scss'
class ShopDetail extends Component {
  constructor(props) {
    super(props);
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getShopDetail(id);
  };
  render() {
    const {rst, menu} = this.props;
    if(!rst.name) return null
    return (
      <div>
        <div className="info">
          <div className="navbar">
            <span>back</span>
          </div>
          <div className="content">
            <img className="avatar" alt="" src={getImgaeUrl(rst.image_path)}/>
            <div className="base_info">
              <div className="title">
              {rst.name}
              </div>
              <div className="addition">
                <span>评价{rst.rating}</span>
                <span>月售{rst.recent_order_num}单</span>
                <span>蜂鸟专送约{rst.order_lead_time}分钟</span>
              </div>
              <div className="activities">
                <div className="short_cut">{ rst.activities[0].description}</div>
                <span>{rst.activities && rst.activities.length}个优惠</span>
              </div>
              <div className="notice">
              公告：欢迎光临，用餐高峰期请提前下单，谢谢。</div>
            </div>
          </div>
        </div>
        <div>
 
        </div>
      </div>
    )
  }
}         
// <MenuList menu={menu}></MenuList>
const mapStateToProps = (state) => {
  return {
    rst:state.getIn(['shop','rst']).toJS(),
    bought_list:state.getIn(['shop','bought_list']).toJS(),
    menu:state.getIn(['shop','menu']).toJS(),
    recommend:state.getIn(['shop','recommend']).toJS()
  }
}

const mapdispatchToProps = dispatch =>({
  getShopDetail(id) {
    dispatch({type:"FETCH_SHOPDETAIL", id:id})
  }
})
export default connect(mapStateToProps, mapdispatchToProps)(ShopDetail); 