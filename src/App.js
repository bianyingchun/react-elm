import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/header'
import ShopDetail from './components/shop-detail'
import store from './store/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <Provider store={store}>
        <div className="App">
          <Route exact path="/" component={Header} />
          <Route exact path="/shop/:id" component={ShopDetail}/>
        </div>
      </Provider>
      </Router>
    );
  }
}

export default App;
