import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import detailData from '@/api/detailData'
import cart from "@/api/cart";

import store from '@/store/index.js'
import './index.scss'
class User extends Component {
	state = {
		data:[],
		delete:true,
		show:false,
		flag:true,
		number: 0,
		price:0,
		num:1,
		itemprice:false
	}
	//加
	add(item){
		// console.log(item.num)
		if(this.state.show==true){
			
			var addprice = this.state.price
			addprice += item.price
			this.setState({
				price: Math.round(addprice * 100) / 100 ,
				number: this.state.number+1
			})
		}
		cart.cartupdata({
			code:item.code,
			num:1+item.num++,
			picUrl: item.picUrl,
			mpName: item.mpName,
			price: item.price,
			stockNum: item.stockNum
		}, (data) => {
			console.log(data);
			this.setState({
			})
		})
	}
	//减
	mine(item) {
		
		console.log(this.refs)
		if(item.num<=1){
			item.num=1
		}else{
			if (this.state.show == true) {
				var addpric = this.state.price
				addpric -= item.price
				if (addpric <= 0) {
					addpric = 0
				}
				if (this.state.number <= 0) {
					this.setState({
						number:0
					})
				}
				this.setState({
					price: Math.round(addpric * 100) / 100,
					number: this.state.number-1
				})
			}
			cart.cartupdata({
				code: item.code,
				num: -1 + item.num--,
				picUrl: item.picUrl,
				mpName: item.mpName,
				price: item.price,
				stockNum: item.stockNum
			}, (data) => {
				console.log(data);
				this.setState({
				})
			})
		}
		
		
	}
	//去购买
	tobuy(){
		this.props.history.push('/jiesuan')
	}
	//删除
	delete(){

	}
	//点击单选
	change(item){
		var checkbox = document.getElementsByClassName('checkbox');
		for (var i = 0; i < checkbox.length; i++) {
			if (this.state.data[i].code==item.code){
				console.log(item.code,i)
				if (checkbox[i].checked) {
					this.setState({
						price: Math.round((this.state.price + (item.price * item.num)) * 100) / 100,
						number: this.state.number + item.num,
						itemprice: true
					})
				}else{
				this.setState({
					price: Math.round((this.state.price - (item.price * item.num)) * 100) / 100,
					number: this.state.number-item.num
				})
			}
			}
		}

	}

	//全选
	allClick(){
		var checkbox = document.getElementsByClassName('checkbox');
		if(this.state.flag){
			for (var i = 0; i < checkbox.length; i++) {
				checkbox[i].checked = true;
				console.log(checkbox[i].checked)
			}
			this.setState({
				flag:!this.state.flag,
				itemprice: true
			})
			var price = 0
			// 价格
			var numbers = 0
			//数量
				this.state.data.map((value, index) => {
					price += value.price * value.num
					numbers += value.num
				})
			this.setState({
				price: Math.round(price * 100) / 100,
				number: numbers,
				show: true
			})
			// console.log()
		}else{
			for (var i = 0; i < checkbox.length; i++) {
				checkbox[i].checked = false;
			}
			this.setState({
				flag: !this.state.flag,
				itemprice:false
			})
			this.setState({
				price: 0,
				number: numbers,
				show: true
			})
		}
		
	}
	//编辑
	start(){
		this.setState({
			delete: !this.state.delete
		})
		console.log("aa",this.state.delete)
		if(this.state.delete){
			document.getElementById('gobuy').style.display="block"
			document.getElementById('delete').style.display = "none"
			
		}else{
			document.getElementById('gobuy').style.display = "none"
			document.getElementById('delete').style.display = "block"

		}
		
	}
	render() {
		return (
			<div className="box">
				<header className="homeheader1">
					<ul>
						<li className="leftControl">
							<Link to={"/kind"} >
								<i className="iconfont icon-buoumaotubiao53" style={{ fontSize: '0.24rem', fontWeight: 'bold', color: 'orange' }}></i>
							</Link>
						</li>
						<li className="search">
							购物车

			        	</li>
						<li className="rightControl">
							<i>搜索</i>
						</li>
					</ul>

				</header>
				<div className="content">
					<div className="merchant-info mgT10">
						<label className="ui-checkbox-s">
							<input type="checkbox" />
						</label>
						<i className="iconfont icon-fangzi-"></i>
						<span>来伊份</span>
						<span style={{float:'right',padding:'0 10px 0 0'}} onClick={this.start.bind(this)}>编辑</span>
					</div>
					<ul className="ui-prod-list">
					{
						this.state.data.map((item, index) => {
							return(
								<li className="li-list">
									<label className="ui-checkbox-s">
										<input name="checkbox" type="checkbox"  className="checkbox" onClick={this.change.bind(this, item)} ref="index"/>
									</label>
									<div className="ui-list-thumb">
										<img src={item.picUrl} />
									</div>
									<div className="ui-list-info padR0">
										<h4 className="f14 ui-nowrap">{item.mpName}</h4>
										<p className="ui-nowrap baseL1"></p>
										<ul className="jine">
											<li className="price">¥{item.price}</li>
											<li className="option">
												<div className="opt-group">
													<span onClick={this.mine.bind(this, item)} ref="min">-</span>
													<input className="second" min="2" value={item.num}/>
													<span onClick={this.add.bind(this, item)} ref="add">+</span>
												</div>
											</li>
										</ul>
									</div>
								</li>
							)	
						})
					}
					</ul>
					<div className="total ">
						<label className="ui-checkbox-s">
							<input type="checkbox" onClick={this.allClick.bind(this)} id="all"/>
							<span>全选</span>
						</label>
						{/* 点击编辑之前 */}
						<div className="menu"  id="gobuy">
							<div className="money" >
								<span>合计:<i>{this.state.price}</i></span>
							</div>
							<button className="fr ui-btn" onClick={this.tobuy.bind(this)}>去结算(<i>{this.state.number}</i>)</button>
						</div>

					{/* //点击编辑按钮之后 */}
						<div className="menu" id="delete">
							<div className="money" >
								<span>合计:<i>{this.state.price}</i></span>
							</div>
							<button className="fr ui-btn" onClick={this.delete.bind(this)}>删除(<i>{this.state.number}</i>)</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
	componentDidMount() {
		
		if (localStorage.getItem('isLogin')) {  //判断登录条件的
			// cart.cartData()
			cart.cartData((data) => {
				/* store.dispatch({
					type: "CART_DATA",
					data: data
				}) */
				console.log(data)
				this.setState({
					data:data
				})
				var price=0
				// 价格
				var numbers=0
				//数量
				if (this.state.itemprice==true){
					data.map((value, index) => {
						price += value.price * value.num
						numbers += value.num
					})
				}
				
				
				this.setState({
					price: Math.round(price * 100) / 100 ,
					number:numbers,
					show:true
				})
				console.log(this.state.price)
			})
			
		}
		

	}
}

export default User;