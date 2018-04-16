import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import store from '@/store/index.js'
import homeData from  '@/api/homeData.js'
import search from "@/api/search";
import '@/css/search.scss'
class App extends Component {
	state = {
		categoryName:[],
		html:'',
		list:[],
		value:''
	}
	update(){	
		document.getElementById('sousuo').style.display="none"
		var value = this.refs.textInput.value;  
		this.setState({
			value:value
		})
		console.log(value)
		homeData.searchInput({
			value: this.state.value
		}, (data) => {
			console.log(data);
			this.setState({
				list:data
			})

		})
       	
	}
	thisValue(event){
		console.log(this)
		this.setState({
			html: event.target.innerHTML
		})
	}
	render(){
		return(
			<div className="box">
				<header className="homeheader">
					<ul>
			        	<li className="leftControl">
			        		<Link to={"/home"} >
			        			<i className="iconfont icon-buoumaotubiao53" style={{fontSize:'0.24rem',fontWeight:'bold', color:'orange'}}></i>
			        		</Link>
			        	</li>
			        	<li className="search">
			        		<input id="searchInput"  ref="textInput" autoComplete="off" onChange={this.update.bind(this)} className="search" type="text"  placeholder="青团" />
							
			        	</li>
			        	<li  className="rightControl" style={{float:'right'}}>
			        		<i>搜索</i>
			        	</li>
			        </ul>
					
				</header>
				<div className="content">
					<div className="hotlist" id="sousuo">
						<div className="hot">
							<i className="iconfont icon-resou"></i>
							热门搜索
						</div>
						<ul className="hot_list" >
							<li onClick={this.thisValue.bind(this)}>
								<Link to={"/searchlist/" +"果仁"}>
								果仁
								</Link> 
							</li>
							<li onClick={this.thisValue.bind(this)}>
									<Link to={"/searchlist/" + "鸭肉类"}>
									鸭肉类
									</Link> 
							</li>
							<li onClick={this.thisValue.bind(this)}>
								<Link to={"/searchlist/" + "鸡肉类"}>
								鸡肉类
								</Link> 
							</li>
							<li onClick={this.thisValue.bind(this)}>
								<Link to={"/searchlist/" + "带壳坚果"}>
								带壳坚果
								</Link> 
							</li>
							<li onClick={this.thisValue.bind(this)}>
								<Link to={"/searchlist/" + "豆制品"}>
								豆制品
								</Link> 
							</li>
							<li onClick={this.thisValue.bind(this)}>
								<Link to={"/searchlist/" + "果干"}>
								果干
								</Link> 
							</li>
							<li onClick={this.thisValue.bind(this)}>
								<Link to={"/searchlist/" + "薯片类"}>
									薯片类</Link> 
							</li>
							<li onClick={this.thisValue.bind(this)}>
								<Link to={"/searchlist/" + "菌菇类"}>
								菌菇类
								</Link> 
							</li>
							<li onClick={this.thisValue.bind(this)}>
								<Link to={"/searchlist/" + "鱼"}>
								鱼
								</Link> 
							</li>
							<li onClick={this.thisValue.bind(this)}>
								<Link to={"/searchlist/" + "其他"}>
								其他
								</Link> 
							</li>
						</ul>
					</div>
					{/* //搜索列表 */}
					<ul className="search_list" id="name">
						{
							this.state.list.map((item, index) => {
							return (
								<li key = { item.categoryId } >
									<Link to= { "/searchlist/" + item.categoryName } >
										{item.mpName }
									</Link> 
								</li>
							)
							})
						}
					</ul>
				</div>
			</div>
		)
	}
	componentDidMount(){
		homeData.searchList((data)=>{
			store.dispatch({
				type:"SEARCH_LIST",
				data:data
			})
			// console.log(data)
			this.setState({
				categoryName:data
			})
		})
		
		
	}
}
export default App;
