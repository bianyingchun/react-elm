import React,{Component} from 'react';
import {toJS} from 'immutable';
import {connect} from 'react-redux';
import {formatDistance, getImgaeUrl} from '../../common/util'
import MenuList from '../menu-list'
import './style.scss'
class ShopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_activity_sheet:false
    };
    this.toggle_activity_sheet = this.toggle_activity_sheet.bind(this)
  };
  calc_shoptab_pos() {
    console.log(this.refs);
    // const pos = shoptab.get​Bounding​Client​Rect();
    // console.log(pos)
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getShopDetail(id);
    this.calc_shoptab_pos();
  };
  toggle_activity_sheet(isshow) {
    this.setState({show_activity_sheet:isshow})
  };
  activity_sheet(activities) {
    if(!this.state.show_activity_sheet) return null;

    const items = activities.map((activity,index) => {
      let styleObj = {
        backgroundColor:'#'+activity.icon_color
      }
      return(
      <div key={index} className="activity_item">
        <span className="icon" style={styleObj}>{activity.icon_name}</span>
        <span>{activity.tips}</span>
      </div>
      );
    });
    return (
      <div className="activity_sheet">
        <div className="mask" onClick={()=>{
            this.toggle_activity_sheet(false)
          }}></div>
        <div className="content_wraper">
          <span className="close_btn" onClick={()=>{
            this.toggle_activity_sheet(false)
          }}>关闭</span>
          <div className="title">优惠活动</div>
          <div className="alist">
            {items}
          </div>  
        </div>
      </div>
      )
  };
  render() {
    const {rst, menu} = this.props;
    if(!rst.name) return null;
    let navStyleObj = {
      backgroundImage:`url(${getImgaeUrl(rst.shop_sign.image_hash,true)})`
    }
    return (
      <div className="shop_detail">
        <div className="info">
          <div className="navbar" style={navStyleObj}>
            <span>back</span>
          </div>
          <div className="content">
            <img className="avatar" alt="" src={getImgaeUrl(rst.image_path)}/>
            <div className="title">
            {rst.name}
            </div>
            <div className="addition">
              <span>评价{rst.rating}</span>
              <span>月售{rst.recent_order_num}单</span>
              <span>蜂鸟专送约{rst.order_lead_time}分钟</span>
            </div>
            <div className="activities" onClick={()=>{
            this.toggle_activity_sheet(true)
          }}>
              <span className="icon" style={{backgroundColor:'#'+rst.activities[0].icon_color}}>{rst.activities[0].icon_name}</span>
              <div className="short_cut">{ rst.activities[0].description}</div>
              <span className="count">{rst.activities && rst.activities.length}个优惠</span>
            </div>
            <div className="notice">
            公告：欢迎光临，用餐高峰期请提前下单，谢谢。</div>
          </div>
          {this.activity_sheet(rst.activities)}
        </div>
        <div className="shoptab" ref="shoptab">
          <div className="tab_item active"><span>点餐</span></div>
          <div className="tab_item"><span>评价</span></div>
          <div className="tab_item"><span>商家</span></div>
        </div>
        <div className="tab_content">
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