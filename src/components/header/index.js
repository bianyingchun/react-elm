import React,{Component} from 'react';
import {toJS} from 'immutable';
import {connect} from 'react-redux';
import {actionCreators}  from './store/index';
import ShopItem from '../shop-item';
import './style.scss'

class Header extends Component {
  constructor(props) {
    super(props);
  };
  componentDidMount() {
    this.props.getShopList();
  };
  render(){
    const {shopList}  = this.props;
    const nav_items = shopList.map((item,index) => 
      <ShopItem className="item" key={index} shop={item.restaurant}></ShopItem>
        );
    return (
      <div>
        <div className="nav_bar">
          {nav_items}
        </div>
        <div className="user_state">
        </div>
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    items:state.getIn(['header','items']),
    shopList:state.getIn(['header','shopList']).toJS()
  }
}

const mapdispatchToProps = dispatch =>({
  getShopList() {
    dispatch({type:"FETCH_SHOPLIST"})
  }
})
export default connect(mapStateToProps, mapdispatchToProps)(Header);
