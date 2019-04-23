import React, {Component} from 'react'
import FoodList from '../food-list'
import MenuNavBar from '../menu-navbar'
import './style.scss'
class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex:1
    }
    this.toggle_menu = this.toggle_menu.bind(this)
  };
  render() {
    let {menu} = this.props;
    return (
      <div className = "menu_wraper">
        <div className ="nav_list">
          <MenuNavBar menu={menu} currentIndex={this.state.currentIndex} toggle_menu={this.toggle_menu}></MenuNavBar>
        </div>
        <div className="food_list">
          <FoodList menu={menu} currentIndex={this.state.currentIndex} toggle_menu={this.toggle_menu}></FoodList>
        </div>
      </div>
    )
  };
  toggle_menu(index) {
    if(index === this.state.currentIndex) return;
    this.setState({currentIndex:index});
  }
}
export default MenuList;