import React, { Component } from 'react';
import detailData from '@/api/detailData'
import cart from '@/api/cart'
import { Link } from 'react-router-dom'
import '@/css/detail.scss'

class App extends Component {
	state ={
		data:{},
		code:'',
		mpName:'',
		picUrl:'',
		price:'',
		flag:false,
		stockNum:'',
		cartData:[],
		num:1
	}
	//在数据库中查询
	goCart(){
			if (this.state.cartData[0]==undefined) {
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
				        		<i className="icon-buoumaotubiao53 iconfont diyi" style={{fontSize:'0.24rem',fontWeight:'bold', color:'orange'}}></i>
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
							<div className="pro-info">
								<div className="name ui-nowrap-multi">
									<span className="f16 c3">{ this.state.mpName }</span>
								</div>
								<div className="lights f12 cff4444"></div>
								<div className="price marT10">
									<span className="c12 cfe6a00">¥<i className="f18 cfe6a00 fb">{ this.state.price }</i></span>
									
									<ul className="ui-row-flex c808080 pdT10">
										<li className="ui-col ui-col">已售：{ this.state.stockNum }</li>
										<li className="ui-col ui-col text-center">库存：7362</li>
										<li className="ui-col ui-col text-right pdR5"></li>
									</ul>
								</div>
							</div>
							
							<div className="ui-form mgT9">
								<div className="ui-form-item ui-form-item-order ui-nowrap line40h40 ui-border-b">
									<span className="promotion-icon-text bge9a5a5">满赠</span> 
									<span className="f14 c6 mgL5">满158.0元送赠品</span>
									<span className="ui-panel-title-tips f13 c808080 r10">
									<i className="f13 c9 icons2 icons2-arrow-r"></i>
									</span>
								</div>
							
								<div className="ui-form-item ui-form-item-order ui-nowrap line40h40">
									<span className="promotion-icon-text">领券</span> 
									<span className="coupons-bg-m">满299减100</span>
									<span className="coupons-bg-m">满188减60</span>
									<span className="coupons-bg-m">满100减50</span> 
									<span className="ui-panel-title-tips f13 c808080 r10">
									<i className="f13 c9 icons2 icons2-arrow-r"></i>
									</span>
								</div>
							</div>
							
							<div className="ui-form mgT9">
								<div className="ui-form-item ui-nowrap chose-address">
									<span className="f14 theme">送至</span> 
									<span className="f14 c3 mgL15">
									<i className="icons4 icons4-location f14"></i>
									上海 上海市 黄浦区 
									</span>
									<div className="c808080 f12"></div>
									<span className="ui-panel-title-tips f13 c808080">
									<i className="f13 c9 icons2 icons2-arrow-r"></i>
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
            <li >
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
		
		const goodsID = this.props.match.params.goodID;
		detailData.goodsList(goodsID,(data) =>{
			console.log(data)
			this.setState({
				code: data[0].code,
				data: data[0],
				mpName: data[0].name,
				picUrl: data[0].url800x800,
				price: data[0].price,
				stockNum: data[0].stockNum,
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
