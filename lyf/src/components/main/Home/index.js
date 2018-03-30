import React,{ Component } from 'react';
import homeData from '@/api/homeData.js';
import { Link } from 'react-router-dom';
import './index.scss'
class Home extends Component {
	state = {
		goodslist:[]
	}
	
	render(){
		return (
			<div className="box">
				<header className="homeheader">
					<ul>
			        	<li className="leftControl">
			        		<span>上海</span>
			        		<i className="iconfont icon-xiangxiajiantou"></i>
			        	</li>
			        	<li className="search">
			        		<i className="iconfont icon-sousuo"></i>
			        		青团
			        	</li>
			        	<li  className="rightControl">
			        		<i className="iconfont icon-xiaoxi1"></i>
			        	</li>
			        </ul>
					
				</header>
				<div className="content">
					<div className="tabs">
						
					</div>
				
				</div>
			</div>
		)
	}
	

}

export default Home;