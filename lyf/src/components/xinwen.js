import React, { Component } from 'react';

import store from '@/store/index.js'
import { List, InputItem, Toast, WhiteSpace, Button } from 'antd-mobile';
import homeData from '@/api/homeData.js';
import { Link } from 'react-router-dom';
import "@/css/xinwen.scss"
class App extends Component {
  state = {
		XinwenData:[]
  }
  render() {
    return (
      <div className="App">
        <div className="container">
        	<div className="box">
						<header style={{margin:"0 0 15px"}}>
            <Link to={'/home'}>
             <i className="iconfont icon-buoumaotubiao53"></i>
            </Link>
							<b>伊仔热点</b>
						</header>
						<div className="content" style={{background:"#eee"}} id="xinwen">
              <ul>
                {
                    this.state.XinwenData.map((item,index)=>{
                       return(
                        <li className="article-list">
                            <img src={item.images}/>
                            <div className="miantext">
                              <h3>{item.displayTitle}</h3>
                              <p>{item.description}</p>
                            </div>
                        </li>
                       )
                    })
                  
                }
                
              </ul>
						</div>
					</div>
        </div>   
      </div>
    );
  }
  componentDidMount(){
    homeData.XinwenData((data)=>{
			store.dispatch({
				type:"HOME_XINWEN",
				data:data
			})
			this.setState({
				XinwenData:data
			})
		})
  }
}
export default App;
