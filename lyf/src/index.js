import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';
import App from '@/components/App';
import Detail from '@/components/Detail';
import Detaillist from '@/components/Detaillist';
import Login from '@/components/Login';
import Link from '@/components/Kindlist';
import Register from '@/components/Register';
import Search from '@/components/Search';
import Xinwen from '@/components/xinwen';
import SearchList from '@/components/searchList';
import Jiesuan from '@/components/Jiesuan';
import Shouyin from '@/components/Shouyintai'
import registerServiceWorker from '@/registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path = "/register" component = { Register } />
      <Route path = "/search" component = { Search } />
      <Route path = "/login" component = { Login } />
      <Route path = "/link" component = { Link } />
      <Route path = "/xinwen" component = { Xinwen } />
      <Route path = "/jiesuan" component = { Jiesuan } />
      <Route path = "/shouyin" component = { Shouyin } />
      <Route path = "/detail/:goodsID" component = { Detail } />
      <Route path="/listdetail/:goodID" component={Detaillist} />
      <Route path = "/searchlist/:name" component = { SearchList } />
      <Route path = "/" component = { App } />
    </Switch>
  </Router>, 
  document.getElementById('root'));
registerServiceWorker();
