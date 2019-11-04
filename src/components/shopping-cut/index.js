import React, {Component} from 'react'
import './style.scss'

class ShoppingCut extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show_list:false,
          all_good:[{id:1, price:13,count:2, title:'风味椒麻鸡腿肉饭套餐（折扣）'},{id:2,price:13,count:2, title:'风味椒麻鸡腿肉饭套餐（折扣）'},{id:3,price:13,count:2, title:'风味椒麻鸡腿肉饭套餐（折扣）'},{id:4, price:13,count:2, title:'风味椒麻鸡腿肉饭套餐（折扣）'}],
          goods_price:20,
          deliver_fee:3,
          status:'active',
          origin_price:30,
          favorable_price:10
      };
    };

    get_btn_state() {
        var name = 'submit_btn '+ this.state.status;
        return (<div className={name} onClick={(e) =>{e.stopPropagation()}}>
                    去结算
                </div>)
    };

    get_food_price() {

        if(!this.state.goods_price) {
            return (<div className="goods">
               <span>未选购商品</span>         
            </div>)   
        } else {
            let op = this.state.favorable_price ? <span className="origin_price">￥{this.state.origin_price}</span> :null
            return (<div className="goods">
               <span>￥{this.state.goods_price}</span>
               {op}        
            </div>)            
        }
    };

    get_good_list = function() {
        if(!this.state.all_good.length || !this.state.show_list) return null;
          const goods_list = this.state.all_good.map(item => {
            return (<div  key={item.id}>
                    <div className="title">{item.title}</div>
                    <div className="price">{item.price}</div>
                    <div className="count">{item.count}</div>
            </div>)
        })
        return(<div className="content">
                    <div className="header">
                        <div className="text">已选商品</div>
                        <div className="clear_btn">清空</div>
                    </div>
                    <div className="entity_list">
                        {goods_list}
                    </div>
                </div>
            )
    };

    render() {
        var mask_style = this.state.show_list ? {display:'block', opacity :0.4}:{display:'none', opacity:0};
    	return (<div className="cart_wraper">
            <div className="mask" onClick={()=>{ this.setState({show_list:false});}} style={mask_style}></div>
            <div className="cart_list">
                <div className="discount-tip">已减{this.state.favorable_price}元</div>
                {this.get_good_list()}
            </div>
    		<div className="cart_footer" onClick={()=> {this.setState({show_list:!this.state.show_list});}}>
	    		<div className="cart_icon">5</div>
                <div className="price">
                    {this.get_food_price()}
                    <div className="deliver">
                    另需配送费{this.state.deliver_fee}元</div>
                </div>
                {this.get_btn_state()}
    		</div>
    	</div>)
    }
}

export default ShoppingCut;