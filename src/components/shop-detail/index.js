import React,{Component} from 'react';
import {toJS} from 'immutable';
import {connect} from 'react-redux';
import {formatDistance, getImgaeUrl, getWinHeight} from '../../common/util'
import MenuList from '../menu-list'
import ShopComment from '../shop-comment'
import ShopInfo from '../shop-info'
import './style.scss'
class ShopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_activity_sheet:false,
      current_index:0
    };
    this.toggle_activity_sheet = this.toggle_activity_sheet.bind(this);
    this.toggle_tab_content = this.toggle_tab_content.bind(this);
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getShopDetail(id);
  };

  componentDidUpdate() {
    this.calc_shoptab_pos();
  };

  toggle_tab_content(e,index) {
    e.stopPropagation();
    this.setState({current_index:index})
  };

  calc_shoptab_pos() {
    this.tab_pos = this.refs.shoptab.getBoundingClientRect();
    this.menu.style.height = getWinHeight() -this.tab_pos.height +'px';
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
  show_content() {
    let index = this.state.current_index;
    const id = this.props.match.params.id;
    if(index === 0) {
      return  <MenuList menu={this.props.menu} id={id}></MenuList>
    } else if(index === 1){
      if(!this.props.comment.rating) {
          this.props.getShopComment(id);
        }
      return  <ShopComment info={this.props.comment}></ShopComment>
    } else {
      if(!this.props.brand_story.title){
          this.props.getBrandStory(id); 
      }
      return <ShopInfo brand_story={this.props.brand_story} rst= {this.props.rst}></ShopInfo>
    }
  };

  render() {
    const {rst, menu, comment,brand_story} = this.props;
    if(!rst.name) return null
    let navStyleObj = {
      backgroundImage:`url(${getImgaeUrl(rst.shop_sign.image_hash,true)})`
    };
    let tab_list = ['点餐','评价','商家'].map((title, index) => {
        let name = 'tab_item';
        if(this.state.current_index === index) name = 'tab_item active'
       return <div className={name} onClick={(e)=>{
        this.toggle_tab_content(e, index)
       }} key={index}><span>{title}</span></div>
      });

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
        <div className="shoptab" ref="shoptab" >
          {tab_list}
        </div>
        <div className="tab_content" ref={r =>{
        this.menu = r}}>
          {this.show_content()}
        </div>
      </div>
    )
  }
}         

const mapStateToProps = (state) => {
  return {
    rst:state.getIn(['shop','rst']).toJS(),
    bought_list:state.getIn(['shop','bought_list']).toJS(),
    menu:state.getIn(['shop','menu']).toJS(),
    recommend:state.getIn(['shop','recommend']).toJS(),
    comment:state.getIn(['shop','comment']).toJS(),
    brand_story:state.getIn(['shop','brand_story']).toJS()
  }
}

const mapdispatchToProps = dispatch =>({
  getShopDetail(id) {
    dispatch({type:"FETCH_SHOPDETAIL", id:id})
  },
  getShopComment(id) {
    dispatch({type:"FETCH_SHOPCOMMENT", id:id})
  },
  getBrandStory(id) {
    dispatch({type:"FETCH_BRANDSTORY", id:id})
  }
})
export default connect(mapStateToProps, mapdispatchToProps)(ShopDetail); 