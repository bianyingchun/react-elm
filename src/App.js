import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/header'
import ShopDetail from './components/shop-detail'
import Orders from './components/orders'
import Profile from './components/profile'
import store from './store/index'
//------------test------
// import AnimateDemo from './test/animation/transition'
import AnimateDemo from './test/animation/transition-group'
//-------------------
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <Provider store={store}>
        <div className="App">
          <Route exact path="/" component={Header} />
          <Route exact path="/shop/:id" component={ShopDetail}/>
          <Route exact path="/animation" component={AnimateDemo } />
          <Route exact path='/Orders' component={Orders} />
          <Route exact path="/profile" component={Profile}/>
        </div>
      </Provider>
      </Router>
    );
  }
}

export default App;
