import React, { Component } from 'react';
import { Switch, Route,  NavLink, Redirect } from 'react-router-dom';

import Home from '@/components/main/Home/index';
import Kind from '@/components/main/Kind/index';
import Cart from '@/components/main/Cart/index';
import User from '@/components/main/User/index';
import Search from '@/components/Search';
import Login from '@/components/Login';
import Register from '@/components/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        	<Switch>
        		<Route path="/home" component={Home} />
        		<Route path="/kind" component={Kind} />
        		<Route path="/cart" component={Cart} />
        		<Route path="/user" component={User} />
        		<Route path="/login" component={Login} />
        		<Route path="/register" component={Register} />
        		<Route path="/search" component={Search} />
        		<Redirect to = {{pathname:"/home"}} />
        	</Switch>
        </div>
        <footer>
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">
                <span className="iconfont icon-shouye"></span>
                <p>首页</p>
              </NavLink>
            </li>
            <li>
               <NavLink to="/kind" activeClassName="active">
              <span className="iconfont icon-fenlei"></span>
              <p>分类</p>
               </NavLink>
            </li>
            <li>
             <NavLink to="/cart" activeClassName="active">
              <span className="iconfont icon-gouwuche"></span>
              <p>购物车</p>
               </NavLink>
            </li>
            <li>
             <NavLink to="/user" activeClassName="active">
              <span className="iconfont icon-tubiaolunkuo-"></span>
              <p>我的</p>
               </NavLink>
            </li>
          </ul>
        </footer>
        
      </div>
    );
  }
}

export default App;
