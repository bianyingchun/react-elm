import React, {Component} from 'react'
import FoodList from '../food-list'
import MenuNavBar from '../menu-navbar'
import ShoppigCut from '../shopping-cut'
import './style.scss' 
import {connect} from 'react-redux'; 
import {actionCreators} from './store/index';
class MenuList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex:1
    }
    this.toggle_menu = this.toggle_menu.bind(this)
  };
  componentDidMount() {
    const {setCurrent, id} = this.props;
    setCurrent(id);
  };
  render() {
    let {menu} = this.props;
    return (
      <div className = "menu_wraper" ref={r =>{this.wraper = r}}>
        <div className ="nav_list">
          <MenuNavBar menu={menu} currentIndex={this.state.currentIndex} toggle_menu={this.toggle_menu}></MenuNavBar>
        </div>
        <div className="food_list">
          <FoodList menu={menu} currentIndex={this.state.currentIndex} toggle_menu={this.toggle_menu}></FoodList>
        </div>
        <ShoppigCut/>
      </div>
    )
  };
  
  toggle_menu(index) {
    if(index === this.state.currentIndex) return;
    this.setState({currentIndex:index});
  }

}
  const mapStateToProps = (state, props) => {
    console.log(props)
  return {
    rst:state.getIn(['shop','rst']).toJS(),
    bought_list:state.getIn(['shop','bought_list']).toJS(),
    menu:state.getIn(['shop','menu']).toJS(),
    recommend:state.getIn(['shop','recommend']).toJS(),
    comment:state.getIn(['shop','comment']).toJS(),
    brand_story:state.getIn(['shop','brand_story']).toJS(),
    cart:state.getIn(['cart','all']).toJS(),
  }
}
  const mapDispatchToProps = (dispatch) => {
    return {
      setCurrent(id) {
        dispatch(actionCreators.setCurrentShop(id))
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(MenuList); 
