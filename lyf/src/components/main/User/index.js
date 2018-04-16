import React,{ Component } from 'react';

import './index.scss'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
class Cart extends Component {
	state = {
		username:'',
		show:true
	}
	pagehandler(type,flag){
		//console.log(this);
		this.props.history.push({
			pathname:"/"+type,
			state:{
				flag:flag
			}
		})
	}

	render(){
		return (
			<div className="box">
			{/* ======================//头部登录注册部分======================================= */}
				<div className="my-info">
					<div className="login-status text-center">
						<div className="avatar">
							<ul className="ui-tiled">
								<li><div> <span>- -</span></div><i>会员等级</i></li>
								<li><div><img width="60" height="60" src="http://m.laiyifen.com/images/logo-laiyifen.png?v=1501565606599"/></div></li>
								<li><div> <span>- -</span></div><i>伊豆</i></li>
							</ul>
						</div>
						<ul className="ui-list ui-list-pure BGT" id="gotologin">
							<li >
								<div><span className="f14 cf" onClick={this.pagehandler.bind(this,'login','user')}>登录</span> <span className="f14 cf">/</span> <span className="f14 cf" onClick={this.pagehandler.bind(this,'register','user')}>注册</span></div>
							</li>
						</ul>
						<ul className="ui-list ui-list-pure BGT" id="username">
							<li >
								<div><span className="f14 cf" >{this.state.username}</span></div>
							</li>
						</ul>
						{/* <!-- <div class="qrcode-btn f10 text-center" @click="showQrcode()"> */}
                		{/* <i class="qrcode-icon qrcode-icon-1"></i>专属码</div> --> */}
						<div className="qrcode-btn f10 text-center">
							<i className="qrcode-icon qrcode-icon-1"></i>专属码
						</div>
					</div>
					<div className="lyf-icons lyf-icons-home1 tool-msg"></div>
					<i className="lyf-icons lyf-icons-home2 tool-set"></i>
					<i className="lyf-icons lyf-icons-sign sign"></i>
					{/* <!--<div class="tool-bill" v-link-to-userpage.literal="/my/bill.html"><i class="icons2 icons2-user-bill"></i><span class="f14 cf vkaM">账单</span></div>--> */}
				</div>
				<div>
					<div className="my-income-new">
						<img src="http://m.laiyifen.com/images/sales.gif?v=1501565606599" alt=""/>
					</div>
					<div className="ui-panel ui-panel-simple">
						<h2 className="ui-border-b mgL15" >
							<i className="icons4 icons4-qiyizhuan pdL10 mgT5"></i>
							<span className="f16 c0 mgT3">伊起赚</span> 
							<span className="ui-panel-title-tips f13 c808080 mgT3" id="user-right" >昨日成交预估金额
								<span style={{color:'#ff6900'}}>¥0</span>
							</span>
							<i className="f13 c9 icons2 icons2-arrow-r" style={{right:'15px', position: 'absolute',top:'20px'}}></i>
						</h2>
					</div>
					<div className="menu-box" style={{margin:'0px 0px 10px'}}>
						<div className="menu"><div className="item item_3">
							<p><i className="icons4 icons4-income"></i></p>
							<p className="mgT5"><span className="f12 c3">我的收入</span></p>
						</div>
						{/* <!-- <div class="item  item_3"  @click="openDistributorLink('/my/fans.html')">
							<p><i class="lyf-icons lyf-icons-myFans"></i></p>
							<p class="mgT5"><span class="f12 c3">粉丝团</span></p>
						</div> --> */}
						<div className="item item_3">
							<p><i className="lyf-icons lyf-icons-myChat"></i></p>
							<p className="mgT5"><span className="f12 c3">报表中心</span></p>
						</div>
					</div>
				</div>
				<div className="ui-panel ui-panel-simple">
					<h2 className="ui-border-b mgL15" >
						<i className="icons4 icons4-order pdL10 mgT5"></i> 
						<span className="f16 c0 mgT3">我的订单</span> 
						<span className="ui-panel-title-tips f13 c808080 mgT3" id="dingdan">全部订单 
							<i className="f13 c9 icons2 icons2-arrow-r"></i>
						</span>
					</h2>
				</div>
				<ul className="ui-tiled bgf pdT10 pdB10">
					<li className="posR">
						<i className="icons-au icons-au-5"></i>
						<div><span className="f12 c3">待付款</span></div>
					</li>
					<li className="posR">
						<i className="icons-au icons-au-6"></i>
						<div><span className="f12 c3">待发货</span></div>
					</li>
					<li className="posR"><i className="icons-au icons-au-7"></i>
					<div><span className="f12 c3">待收货</span></div></li>
					<li className="posR" style={{position:'relative'}}>
						<i className="icons-au icons-au-8"></i>
						<div><span className="f12 c3">待评价</span></div>
			{/* <!--数量--><!--<sup className="radius50 bgff4444 f10 cf">10</sup>--><!--<div class="ui-badge">1</div>-->*/}
					</li>
					<li className="posR">
						<i className="icons-au icons-au-9"></i>
						<div><span className="f12 c3">退换货</span></div>
					</li>
				</ul> 
				{/* ===== */}
				<ul className="ui-list ui-list-one mgT10 bgf">
					<div className="ui-panel ui-panel-simple">
						<h2 className="ui-border-b mgL15" >
							<i className="icons4 icons4-purse mgT-5 pdL5 mgT3"></i> 
							<span className="f16 c0 mgT3">我的钱包</span>
							<span className="ui-panel-title-tips f13 c808080 mgT3 quanbu">查看全部 
								<i className="f13 c9 icons2 icons2-arrow-r"></i>
							</span>
						</h2>
					</div>
					{/* <!--<li class="border-bottom mgT10">--><!--<div class="ui-list-thumb">--><!--<p class="display-line f16">我的钱包</p>--><!--</div>--><!--<span class="disIB c9" style="margin-left:25px;">查看全部</span>--><!--</li>--> */}
					<div className="ui-row-flex ui-whitespace mgT10 bgf">
						<div className="ui-col ui-col text-center">
							<p className="theme"><span className="f20">- -</span></p>
						</div>
						<div className="ui-col ui-col text-center"><p className="theme"><span className="f20">- -</span></p></div>
						<div className="ui-col ui-col text-center"><p className="theme"><span className="f20">- -</span></p></div>
					</div>
					<div className="ui-row-flex ui-whitespace bgf pdB15">
						<div className="ui-col ui-col text-center"><p><span className="f12 c3">伊点卡</span></p></div>
						<div className="ui-col ui-col text-center"><p><span className="f12 c3">积分</span></p></div>
						<div className="ui-col ui-col text-center"><p><span className="f12 c3">优惠券</span></p></div>
					</div>
				</ul>
				<div className="menu-box"><div className="menu">
					<div className="item ui-border-r">
						<p><i className="icons4 icons4-15"></i></p>
						<p className="mgT5"><span className="f12 c3">我的团</span></p>
					</div>
					<div className="item ui-border-r">
						<p><i className="icons4 icons4-16"></i></p>
						<p className="mgT5"><span class="f12 c3">我的砍价单</span></p>
					</div>
					<div className="item ui-border-r">
						<p><i className="icons4 icons4-1"></i></p>
						<p className="mgT5"><span className="f12 c3">收货地址</span></p>
					</div>
					<div className="item">
						<p><i className="icons4 icons4-7"></i></p>
						<p class="mgT5"><span class="f12 c3">常购清单</span></p>
					</div>
				</div>
				{/* <!-- <div class="item"  @click="showTalk=true">
                    <p><i class="icons4 icons4-3"></i></p>
                    <p class="mgT5"><span class="f12 c3">客服热线</span></p>
                </div>--> */}
				<div class="menu ui-border-t">
					<div class="item ui-border-r">
						<p><i class="icons4 icons4-5"></i></p>
						<p class="mgT5"><span class="f12 c3">我的收藏</span></p>
					</div>
					<div className="item ui-border-r">
						<p><i className="icons4 icons4-6"></i></p>
						<p className="mgT5"><span class="f12 c3">我的评价</span></p>
					</div>
					<div className="item ui-border-r">
						<p><i className="icons2 icons2-redPacket"></i></p>
						<p className="mgT5"><span className="f12 c3">一句话福利</span></p>
					</div>
				</div>
			</div>
			<div className="menu-box" id="bottom"><div className="menu">
					<div className="item ui-border-r">
						<p><i className="icons4 icons4-9"></i></p>
						<p className="mgT5"><span className="f12 c3">查询伊点卡</span></p>
					</div>
					<div className="item ui-border-r">
						<p><i className="icons4 icons4-10"></i></p>
						<p className="mgT5"><span class="f12 c3">查询门店</span></p>
					</div>
					<div className="item ui-border-r">
						<p><i className="icons4 icons4-4"></i></p>
						<p className="mgT5"><span className="f12 c3">在线客服</span></p>
					</div>
					<div className="item">
						<p><i className="icons4 icons4-11"></i></p>
						<p class="mgT5"><span class="f12 c3">常购清单</span></p>
					</div>
				</div>
				{/* <!-- <div class="item"  @click="showTalk=true">
                    <p><i class="icons4 icons4-3"></i></p>
                    <p class="mgT5"><span class="f12 c3">客服热线</span></p>
                </div>--> */}
				<div class="menu ui-border-t">
					<div class="item ui-border-r">
						<p><i class="icons4 icons4-14"></i></p>
						<p class="mgT5"><span class="f12 c3">中奖记录</span></p>
					</div>
					<div className="item ui-border-r">
						<p><i className="icons4 icons4-2"></i></p>
						<p className="mgT5"><span class="f12 c3">增票资质</span></p>
					</div>
					<div className="item ui-border-r">
						<p><i className="icons4 icons4-18"></i></p>
						<p className="mgT5"><span className="f12 c3">我的发票</span></p>
					</div>
				</div>
			</div>
			</div>
		</div>
		)
	}
	componentDidMount(){
		if (localStorage.getItem('isLogin')) {
				var obj = JSON.parse(localStorage.getItem('isLogin'));
				document.getElementById('gotologin').style.display = 'none';
				document.getElementById('username').style.display = 'block';
				this.setState({
				show:false
				})
			} else {
				var obj = {}
				document.getElementById('gotologin').style.display = 'block';
				document.getElementById('username').style.display = 'none';
				this.setState({
				show:true
				})
		}
		this.setState({
          username:obj.phone
		})
	}
}

export default Cart;