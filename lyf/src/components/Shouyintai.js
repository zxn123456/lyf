import React, { Component } from 'react';
//import detailData from '@/api/detailData'
import { Link } from 'react-router-dom';
import '@/css/shouyintai.scss'
import cart from "@/api/cart";
import store from '@/store/index.js'
class App extends Component {
	state ={
		price:''
		
	}
  render() {
    return (
      <div className="App">
        <div className="container">
        	<div className="box" id="shouyin">
						<header style={{background:"#fff"}}>
							<ul>
			        	<Link to={'/jiesuan'}>
			        		<li className="leftControl">
				        		<i className="icon-buoumaotubiao53 iconfont diyi" style={{fontSize:'0.24rem',fontWeight:'bold', color:'orange'}}></i>
				        	</li>
			        	</Link>
			        	<li className="search">
			        		<dl>
								<dt>收银台</dt>
							</dl>
			        	</li>
			        	<li  className="rightControl">
			        	</li>
			        </ul>
						</header>
						
						<div className="content" style={{background:"#eee"}}>
							<div className="ui-row-flex ui-whitespace bgfffac4 mgT10 ui-border-b">
								
							</div>
							<ul className="ui-row bgf pdT5 pdB5">
								<li className="ui-col ui-col-33">
									<span className="f12 c6 mgL20">订单编号</span>
								</li>
								<li className="ui-col ui-col-67">
									<span className="f12 c0">180407832234111245</span>
								</li>
							</ul>
							
							<ul className="ui-row bgf pdT5 pdB5">
								<li className="ui-col ui-col-33">
									<span className="f12 c6 mgL20">订单金额</span>
								</li>
								<li className="ui-col ui-col-67">
									<span className="f12 c0">¥{this.state.price}</span>
								</li>
							</ul>
							
							<ul className="ui-row bgf pdT5 pdB5">
								<li className="ui-col ui-col-33">
									<span className="f12 c6 mgL20">剩余应付</span>
								</li>
								<li className="ui-col ui-col-67">
								<span className="f12 cff6900">¥{this.state.price}</span>
								</li>
							</ul>
							
							<ul className="ui-list mgT10">
							<li className="ui-border-t">
								<div className="ui-list-img">
									<span>
									<img src="http://m.static.laiyifen.com/images/pay_ic_yidcard.png" />
									</span>
								</div>
								<div className="ui-list-info">
									<h4 className="ui-nowrap">
									<span className="f14 c3">悠点会员卡</span>
									<span className="f12 cff6900">&nbsp;&nbsp;余额:&nbsp;&nbsp;0元</span>
									</h4>
									<p className="ui-nowrap">
									<span className="f12 c6">来伊份旗下会员卡快捷支付</span>
									</p>
								</div>
								<div className="ui-list-info text-right min51">
									<span className="f14 cb2 marR15">去充值</span> 
								</div>
								<span className="ui-panel-title-tips f13 c80 r11" >
									<i className="f13 c9 iconfont icon-arrow_right"></i>
								</span>
							</li>
							<li className="ui-border-t">
								<div className="ui-list-img">
									<span>
									<img src="http://m.static.laiyifen.com/images/pay_ic_youdcard.png" />
									</span>
								</div>
								<div className="ui-list-info">
									<h4 className="ui-nowrap">
									<span className="f14 c3">伊点储值卡</span>
									<span className="f12 cff6900">&nbsp;&nbsp;余额:&nbsp;&nbsp;0元</span>
									</h4>
									<p className="ui-nowrap">
									<span className="f12 c80">来伊份旗下储值卡快捷支付</span>
									</p>
								</div>
								<div className="ui-list-info text-right min51">
									<span className="f14 cb2 marR15">绑定</span> 
								</div>
									<span className="ui-panel-title-tips f13 c80 r11" >
									<i className="f13 c9 iconfont icon-arrow_right"></i>
								</span>
							</li>
							</ul>
							
							<ul className="ui-list mgT10 mgT10">
								<li className="ui-border-t">
									<div className="ui-list-img">
										<span>
										<img src="http://cdn.oudianyun.com/opay/zhifubao.png" />
										</span>
									</div>
									<div className="ui-list-info">
										<h4 className="ui-nowrap">
										<span className="f14 c3">支付宝</span>
										</h4>
										<p className="ui-nowrap">
										<span className="f12 c6">支付宝快捷支付</span>
										</p>
									</div>
									<div className="ui-list-info text-right"></div>
									<span className="ui-panel-title-tips f13 c808080 r11 marT25">
										<i className="f13 c9 iconfont icon-arrow_right"></i>
									</span>
								</li>
							</ul>
					</div>	
			</div>
        </div>
      </div>
    );
  }
  componentDidMount(){
	  cart.cartData((data) => {
		  store.dispatch({
			  type: "CART_DATA",
			  data: data
		  })
		  console.log(data)
		  var price = 0
		  data.map((value, index) => {
			  price += value.price * value.num
		  })

		  this.setState({
			  price: Math.round(price * 100) / 100,
			  data: data,
			  show: true
		  })
		  console.log(this.state.price)
	  })
  }
}

export default App;