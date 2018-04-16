import React, { Component } from 'react';
import './index.scss'
import store from '@/store/index.js'
import homeData from  '@/api/homeData.js'
import { Link } from 'react-router-dom';
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };
  constructor() {
    super();
    this.state = {
			list:[],
			listright:[],
			index:'0',
			haslogin:false
    }
  }
  changelist(index){
	  this.state.index=index
		this.setState({
          index:index
        })
  }
  render() {
	  if(this.state.haslogin==true){
			return (
				<div className="box">
					<header className="homeheader">
					<ul>
			        	<li className="leftControl">
			        		<span>上海</span>
			        		<i className="iconfont icon-xiangxiajiantou"></i>
			        	</li>
			        	<li className="search">
			        		<Link to={'/search'}>
			        			<i className="iconfont icon-sousuo"></i>
			        			青团
			        		</Link>
			        	</li>
			        	<li  className="rightControl">
			        		<i className="iconfont icon-xiaoxi1"></i>
			        	</li>
			        </ul>
					
				</header>
					<div className="main"> 
						<section>
							<ul className="kindname">
								{
									this.state.list.map((item, index) => {
									return (
										<li key = { item.categoryId } className="smallName" >
										
											<div onClick = { this.changelist.bind(this,index) }>

												<span><img src={item.pictureUrl}/></span>
												<p>{ item.categoryName }</p>
											</div>
											
										</li>
									)
									})
								}
							</ul>
						</section>
						<div className="listright">
							<div className="list-right-mian">
								<div className="title">
									<p>{this.state.listright[this.state.index].categoryName}</p>
								</div>
								<ul className="kindname">
								{
									this.state.listright[this.state.index].children.map((item,index)=>{
										
										return (
											
											<li key = { item.categoryId } >
											<Link to={'/link'}>
												<div >
													<span><img src={item.pictureUrl}/></span>
													<p>{ item.categoryName }</p>
												</div>
												</Link>
											</li>
										)
									})
								}
							</ul>
							</div>
						</div>
					</div>
				</div>
			)}else{
			return(
				<div>
				</div>	
			)
		}
	}
	componentDidMount(){
		homeData.kindName((data)=>{
			store.dispatch({
				type:"KIND_NAME",
				data:data
			})
			this.setState({
				list:data,
			})
		})
		homeData.kindList((data)=>{
			store.dispatch({
				type:"KIND_LIST",
				data:data
			})
			this.setState({
				listright:data,
				haslogin:true
			})
		})
	}

}