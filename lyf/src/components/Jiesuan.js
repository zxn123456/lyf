import React, { Component } from 'react';
//import detailData from '@/api/detailData'
import { Link } from 'react-router-dom';
import '@/css/jiesuan.scss'
import detailData from '@/api/detailData'
import cart from "@/api/cart";
import store from '@/store/index.js'
class App extends Component {
	state ={
		username:'',
		show:true,
		data: [],
		price: 0
		
	}
	shouyin() {
		this.props.history.push('/shouyin')
	}
  render() {
    return (
      <div className="App">
        <div className="container">
        	<div className="box" id="jiesuan" >
						<header style={{background:"#fff"}}>
							<ul>
			        	<Link to={'/cart'}>
			        		<li className="leftControl">
				        		<i className="icon-buoumaotubiao53 iconfont diyi" style={{fontSize:'0.24rem',fontWeight:'bold', color:'orange'}}></i>
				        	</li>
			        	</Link>
			        	<li className="search">
			        		<dl>
								<dt>确认订单</dt>
							</dl>
			        	</li>
			        	<li  className="rightControl">
			        	</li>
			        </ul>
						</header>
						
						<div className="content" style={{background:"#eee"}}>
							
							<div className="ui-card2 pad12 bg-location mgT10">
								<div className="ui-flex ui-flex-pack-start">
									<div className="icons4 icons4-location marT10 mgR10">
									</div>
										<div className="addr">
											<p className="c0 f14"> 
										<span>{this.state.username}</span>
											
											</p>
											<p className="c6 f12"> 河南省郑州市二七区郑州航海中路60号海为科技园c区12楼</p>
										</div>
										
										<span className="ui-panel-title-tips f13 c808080 marT7 r10">
										<i className="f13 c9 iconfont icon-arrow_right"></i>
										</span>
									</div>
								</div>
								
								<div className="ui-card2 marT10">
									<ul className="ui-list ui-list-text">
										<li>
											<h4 className="ui-nowrap f15">
											<span className="f15 c3">支付方式</span>
											</h4>
												<div className="ui-txt-info mgR10">
													<span className="f14 c6">在线支付</span>
												</div>
												<span className="ui-panel-title-tips f13 c808080 mgT3 r10">
													<i className="f13 c9 iconfont icon-arrow_right"></i>
												</span>
												</li>
											</ul>
								</div>
						
							<div className="ui-card2 marT10">
								<div className="pad12 ui-border-b">
									<p>
									<i className="lyf-icons lyf-merchant"></i> 
									<span className="f15 c3"> 来伊份</span>
									</p>
								</div>
								<ul className="ui-list ui-list-customize">
								{
									this.state.data.map((item,index)=>{
										return(
											<li>
												<div className="ui-list-thumb">
													<img className="ui-border" src={item.picUrl} />
												</div>
												<div className="ui-list-info">
													<p className="name ui-nowrap-multi">
														<span>{item.mpName}</span>
													</p>
													<p className="ui-nowrap"></p>
													<ul className="ui-row-flex price">
														<li className="ui-col ui-flex ui-flex-pack-start theme">
															<span className="f12">¥</span>
															<span className="f20">{item.price}</span>
														</li>
														<li className="ui-col ui-flex ui-flex-pack-end c9">
															<span className="c80">x{item.num}</span>
														</li>
													</ul>
												</div>
											</li>
										)
									})
								}
									
								</ul>
								<ul className="ui-list ui-list-text">
									<li className="ui-border-t">
										<h4 className="ui-nowrap">
											<span className="f15 c3">配送信息</span>
										</h4>
										<div className="ui-txt-info marR15">
											<span className="f14 c9">来伊份商城配送</span>
										</div>
										<span className="ui-panel-title-tips f13 c808080 mgT3 r10">
											<i className="f13 c9 iconfont icon-arrow_right"></i>
										</span>
									</li>
								</ul>
								<div className="ui-form ui-border-b">
									<div className="ui-form-item ui-form-item-show ui-border-t">
									<form>
										<label className="f15 c3">买家留言</label>
										<input type="text" maxLength="60" placeholder="选填，给商家留言 (60字以内)"/>
									</form>
									</div>
								</div>
								<ul className="ui-list ui-list-text">
									<li className="ui-border-t">
										<h4 className="ui-nowrap"></h4>
										<div className="ui-txt-info">
											<span className="c3">共</span> 
											<span className="theme">1</span> 
											<span className="c3 mgR10">件 </span>
											<span className="c3 mgR15">合计:</span> 
											<span className="theme">¥{this.state.price}</span>
										</div>
									</li>
								</ul>
							</div>
							
						<ul className="ui-list ui-list-text mgT10">
							<li className="ui-border-t">
								<h4 className="ui-nowrap">
									<span className="f15 c3">发票</span>
								</h4>
								<div className="ui-txt-info ui-nowrap invoice-limit mgR10">
									<span>不需要</span>
								</div>
								<span className="ui-panel-title-tips f13 c808080 mgT3 r10">
									<i className="f13 c9 iconfont icon-arrow_right"></i>
								</span>
							</li>
						</ul>
						
						<div className="ui-card2 marT10">
							<ul className="ui-list ui-list-text">
								<li>
									<h4 className="ui-nowrap">
										<span className="f15 c3">优惠券</span> 
									</h4>
									<div className="ui-txt-info mgR10">无可用</div>
									<span className="ui-panel-title-tips f13 c808080 mgT3 r10">
										<i className="f13 c9 iconfont icon-arrow_right"></i>
									</span>
								</li>
							</ul>
							<div className="ui-form-item ui-form-item-switch ui-border-t posR">
								<p className="ui-nowrap"></p>
								<h4>
									<span className="f15 c3">积分</span>
								</h4>
								<p></p>
								<label className="ui-checkbox ui-checkbox-pos">
									<i className="icons2 icons2-disable icons2-disable-pay"></i> 
								</label>
							</div>
							<div className="ui-form-item ui-form-item-switch ui-border-t posR has-unit">
								<p className="ui-nowrap"></p>
								<h4>
									<span className="f15 c3">鼓励金抵扣</span>
								</h4>
								<input type="text" placeholder="" disabled="" /> 
									<span className="unit">不可用</span>
								<p></p>
							</div>
						</div>
						
						<ul className="ui-list ui-list-text mgT10 ui-border-b">
							<li className="ui-border-t">
								<div className="ui-list-info">
									<h4>商品总价</h4>
								</div>
								<div className="ui-list-action">¥{this.state.price}</div>
							</li>
							<li className="ui-border-t">
								<div className="ui-list-info">
									<h4>
										<span className="f15 c3">运费</span>
									</h4>
								</div>
								<div className="ui-list-action">¥10.00</div>
							</li>
						</ul>
						
						<div className="ui-card2"></div>
						
						</div>
						
						
						
				</div>
        </div>
        
	        <div className="foot">
	          <div className="foot1">
	           	<span>合计:￥{this.state.price}</span>
	          </div>
	          <Link to={'/shouyin'}>
		          <div  className="foot2" style={{background:'#fe6a00'}} >
		           	<span style={{color:"#fff",fontSize:"16px"}} >提交订单</span>
		          </div>
	          </Link>
	        </div>
        
      </div>
    );
  }
  componentDidMount(){
	  if (localStorage.getItem('isLogin')) {
		  var obj = JSON.parse(localStorage.getItem('isLogin'));
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
	  } else {
		  var obj = {}
	  }
	  this.setState({
		  username: obj.phone
	  })

  }
}

export default App;