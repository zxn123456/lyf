import React, { Component } from 'react';
import detailData from '@/api/detailData'
import { Link } from 'react-router-dom';
import cart from '@/api/cart'
import '@/css/detail.scss'

class App extends Component {
	state = {
		data: {},
		code: '',
		mpName: '',
		picUrl: '',
		price: '',
		flag: false,
		stockNum: '',
		cartData: [],
		num: 1
	}
	goCart() {
		if (this.state.cartData[0] == undefined) {
			cart.cart({
				mpName: this.state.mpName,
				picUrl: this.state.picUrl,
				price: this.state.price,
				stockNum: this.state.stockNum,
				num: this.state.num,
				code: this.state.code
			}, (data) => {
				console.log(data);
				this.setState({
				})

			})
			this.props.history.push("/cart")
		} else {
			console.log(this.state.num)
			cart.cartupdata({
				code: this.state.code,
				num: 1 + this.state.num++,
				picUrl: this.state.picUrl,
				mpName: this.state.mpName,
				price: this.state.price,
				stockNum: this.state.stockNum
			}, (data) => {
			})
			this.props.history.push("/cart")

		}




	}
  render() {
    return (
      <div className="App">
        <div className="container">
        	<div className="box" >
						<header style={{ background: "#fff", margin: '0'}}>
							<ul>
			        	<Link to={'/home'}>
			        		<li className="leftControl">
				        		<i class="icon-buoumaotubiao53 iconfont diyi" style={{fontSize:'0.24rem',fontWeight:'bold', color:'orange'}}></i>
				        	</li>
			        	</Link>
			        	<li className="search">
			        		<dl>
								<dt>商品</dt>
								<dt>详情</dt>
								<dt>评价</dt>
							</dl>
			        	</li>
			        	<li  className="rightControl">
			        	</li>
			        </ul>
							
						</header>
						<div className="content" style={{background:"#eee"}}>
							<div className="ui-slider">
							<span>
									<img src={this.state.picUrl} />
							</span>
								
							</div>
							<div class="pro-info">
								<div class="name ui-nowrap-multi">
									<span class="f16 c3">{ this.state.mpName }</span>
								</div>
								<div class="lights f12 cff4444"></div>
								<div class="price marT10">
									<span class="c12 cfe6a00">¥<i class="f18 cfe6a00 fb">{ this.state.price }</i></span>
									
									<ul class="ui-row-flex c808080 pdT10">
										<li class="ui-col ui-col">已售：{ this.state.stockNum }</li>
										<li class="ui-col ui-col text-center">库存：7362</li>
										<li class="ui-col ui-col text-right pdR5"></li>
									</ul>
								</div>
							</div>
							
							<div class="ui-form mgT9">
								<div class="ui-form-item ui-form-item-order ui-nowrap line40h40 ui-border-b">
									<span class="promotion-icon-text bge9a5a5">满赠</span> 
									<span class="f14 c6 mgL5">满158.0元送赠品</span>
									<span class="ui-panel-title-tips f13 c808080 r10">
									<i class="f13 c9 icons2 icons2-arrow-r"></i>
									</span>
								</div>
							
								<div class="ui-form-item ui-form-item-order ui-nowrap line40h40">
									<span class="promotion-icon-text">领券</span> 
									<span class="coupons-bg-m">满299减100</span>
									<span class="coupons-bg-m">满188减60</span>
									<span class="coupons-bg-m">满100减50</span> 
									<span class="ui-panel-title-tips f13 c808080 r10">
									<i class="f13 c9 icons2 icons2-arrow-r"></i>
									</span>
								</div>
							</div>
							
							<div class="ui-form mgT9">
								<div class="ui-form-item ui-nowrap chose-address">
									<span class="f14 theme">送至</span> 
									<span class="f14 c3 mgL15">
									<i class="icons4 icons4-location f14"></i>
									上海 上海市 黄浦区 
									</span>
									<div class="c808080 f12"></div>
									<span class="ui-panel-title-tips f13 c808080">
									<i class="f13 c9 icons2 icons2-arrow-r"></i>
									</span>
								</div>
							</div>
						
						</div>
					</div>
        </div>
        <footer>
          <ul style={{background:"#fff"}}>
            <li>
              <a href="javascript:;">
              	 <span className="iconfont icon-xin"></span>
                <p>在线客服</p>
              </a>
            </li>
            <li>
               <a href="javascript:;">
                <span className="iconfont icon-2zaixiankefucheng"></span>
              <p>爱吃</p>
               </a>
            </li>
            <li>
             <a href="javascript:;">
              <span className="iconfont icon-gouwuche"></span>
              <p>购物车</p>
               </a>
            </li>
						<li style={{ background: '#fe6a00' }} onClick={this.goCart.bind(this)}>
             <a href="javascript:;">
              <p style={{color:"#fff",fontSize:"16px"}}>加入购物车</p>
               </a>
            </li>
          </ul>
        </footer>
        
      </div>
    );
  }
  componentDidMount(){
    console.log(this.props.match.params.goodsID)
		const goodsID = this.props.match.params.goodsID;
		
    detailData.goodsData(goodsID,(data) =>{
    	console.log(data);
    	this.setState({
				code: data[0].code,
    		mpName:data[0].mpName,
    		picUrl:data[0].picUrl,
    		price:data[0].price,
				stockNum:data[0].stockNum,
				flag: true
			})
			cart.cartid({
				code: data[0].code
			}, (data) => {
				console.log(typeof (data[0]))
				this.setState({
					cartData: data,
					num: data[0].num,
					flag: true
				})
			})

    })


  }
}

export default App;
