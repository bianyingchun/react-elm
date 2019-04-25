import React, {Component} from 'react'
import FoodItem from '../food-item'
import './style.scss'
class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetY:0
    }
    this.onContentScroll = this.onContentScroll.bind(this)
  };
  getFoodItems(foods){
    return foods.map((item,index) => 
        <FoodItem food={item} key={index}></FoodItem>
      )
  };
  componentDidUpdate(prevProps) {
    setTimeout(() =>{
      const offsetY = this.getCurrrentIndexPos(this.props.currentIndex);
      const wraperDom = this.refs.wraper;
      wraperDom.scrollTop = offsetY;
    })
  };
  getCurrrentIndexPos(index) {
    if(index<0 || !this.pos_arr) return 0;
    return this.pos_arr[index];
  };
  onContentScroll(e) {
    const y = e.target.scrollTop;
    for(var i = 0; i < this.pos_arr.length-1; i++) {
      const start = this.pos_arr[i];
      const end = this.pos_arr[i+1];
      if(start <= y && y < end) break
    };
    this.props.toggle_menu(i)
  };
  componentDidMount() {
    const wraperDom = this.refs.list_content;
    const itemDoms = wraperDom.getElementsByClassName('menu_item');
    let arr = [], top = 0;
    for(var i = 0; i < itemDoms.length; i++) {
      arr.push(top);
      top += itemDoms[i].clientHeight;
    }
    this.pos_arr = arr;
  };
  render() {
    let {menu, currentIndex} = this.props;
    const list = menu.map(item =>{
      return (
        <div className="menu_item" key={item.id} >
          <div className="title">
            <span className="name">{item.name}</span>
            <span className="desc">{item.description}</span>
          </div>
          {this.getFoodItems(item.foods)}
        </div>
      )
    });
    
    return (
    <div className="list" onScroll={(e)=>this.onContentScroll(e)} ref="wraper">
      <div ref="list_content" className="content">{list}</div>
    </div>
    )
  }

}

export default FoodList;