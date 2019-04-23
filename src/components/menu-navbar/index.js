import React from 'react';
import './style.scss'
export default function MenuNavBar (props) {
  const {menu, currentIndex, toggle_menu} = props;
  const items = menu.map((item,index) => <div className={currentIndex === index ? 'item active':'item'} key={item.id} onClick={()=> toggle_menu(index) }>{item.name}</div>)
  return (
    <div className="list">
      {items}
    </div>
  )
}