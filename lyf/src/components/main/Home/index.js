import React,{ Component } from 'react';
import Swiper from 'swiper';
import homeData from '@/api/homeData.js';
import { Link } from 'react-router-dom';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import './index.scss'

class Home extends Component {
	state = {
		bannerlist:[],
		data: ['1', '2', '3'],
	    imgHeight: 176,
	    slideIndex: 0,
	    navlist:[],
	    homelist:[]
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
				<div className="content">
					<div className="homeBanner">
					       <Carousel className="space-carousel"
					          frameOverflow="visible"
					          cellSpacing={10}
					          slideWidth={0.8}
					          autoplay
					          infinite
					          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
					          afterChange={index => this.setState({ slideIndex: index })}
					        >
					          {this.state.bannerlist.map((val, index) => (
					            <a
					              key={index}
					               style={{
					                display: 'block',
					                position: 'relative',
					                top: this.state.slideIndex === index ? -10 : 0,
					                height: this.state.imgHeight,
					                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
					              }}
								>
					              <img
					                src={val.imageUrl}
					                alt=""
					                style={{ width: '100%', verticalAlign: 'top' }}
					                onLoad={() => {
					                  window.dispatchEvent(new Event('resize'));
					                  this.setState({ imgHeight: 'auto' });
					                }}
					              />
					            </a>
					          ))}
				        </Carousel>   
					</div>
					
					<div className="nav">
						<div className="navigation">
							<ul className="ui-row">
								{
									this.state.navlist.map((item,index)=>{
										return(
										<li className="li-row" key={item.id}>
											<a>
												<img src={item.imageUrl}/>
												<span>{item.name}</span>
											</a>
										</li>
										)
									})
								}
							</ul>
						</div>
					</div>
					
					
					<div className="headlines">
						<div className="hotImg">
							<img src="http://m.static.laiyifen.com/images/hotnews.png?v=1521953083592" style={{width:'35px'}}/>
						</div>
						<div className="cnt">
							
							 <Carousel className="my-carousel"
						          vertical
						          dots={false}
						          dragging={false}
						          swiping={false}
						          autoplay
						          infinite
						        >
						          <div className="v-item">
						          	<ul className="list">
										<li className="ui-nowrap">
											<i className="iconfont icon-laba"></i>
											<span>【坚果探源】巴西松子竟然不是巴西产的！</span>
										</li>
									</ul>
						          </div>
						           <div className="v-item">
						          	<ul className="list">
										<li className="ui-nowrap">
											<i className="iconfont icon-laba"></i>
											<span>【青团】天青色等烟雨，而我在等你！</span>
										</li>
									</ul>
						          </div>
						          <div className="v-item">
						          	<ul className="list">
										<li className="ui-nowrap">
											<i className="iconfont icon-laba"></i>
											<span>【【听说有人犯困】如何叫醒一个春困的人？</span>	
										</li>
									</ul>
						          </div>
						          <div className="v-item">
						          	<ul className="list">
										<li className="ui-nowrap">
											<i className="iconfont icon-laba"></i>
											<span>【长沙早晨】去长沙只吃臭豆腐？你不能错过的嗦粉地图！</span>
										</li>
									</ul>
						          </div>
						        </Carousel>
						</div>
					</div>
					
					<div className="image-map">
						<a href="javascript:;">
							<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1522046003859_8155_4400.jpg@base@tag=imgScale&q=80" />
						</a>
					</div>
					<div className="image-map1">
						<a href="http://m.laiyifen.com/view/h5/1003057901000003.html">
							<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1522046277631_9007_2708.jpg@base@tag=imgScale&q=80" />
						</a>
					</div>
					
					<div className="cube-wrapper">
						<div className="cube-case">
							<div className="cube-item">
								<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1522397430388_6420_2672.jpg@base@tag=imgScale&q=80" />
							</div>
							<div className="cube-item">
								<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1522397240119_2291_146.jpg@base@tag=imgScale&q=80" />
							</div>
						</div>
						<div className="cube-case">
							<div className="cube-item">
								<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1522397268298_1471_3519.jpg@base@tag=imgScale&q=80" />
							</div>
							<div className="cube-item">
								<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1522397272181_3134_93.jpg@base@tag=imgScale&q=80" />
							</div>
						</div>
					</div>
					
					<div className="image-map1">
						<a href="http://m.laiyifen.com/view/h5/1003057901000003.html">
							<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1522397180660_5046_3511.png@base@tag=imgScale&q=80" />
						</a>
					</div>
					
					<div className="cube-wrapper">
						<div className="cube-case">
							<div className="cube-item">
								<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1522117791415_7469_107.jpg@base@tag=imgScale&q=80" />
							</div>
							<div className="cube-item">
								<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1522396813452_2472_151.png@base@tag=imgScale&q=80" />
							</div>
						</div>
						<div className="cube-case">
							<div className="cube-item">
								<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1520406044695_8985_84.jpg@base@tag=imgScale&q=80" />
							</div>
							<div className="cube-item">
								<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1520406047208_2630_158.jpg@base@tag=imgScale&q=80" />
							</div>
						</div>
					</div>
					
					<ul className="prod-list">
						{
							this.state.homelist.map((item,index)=>{
							return (
								<li className="wrap" key={item.productId}>
									<div className="item">
										<div className="prod-img">
											<img style ={{height:'161px'}}src={item.picUrl}/>
										</div>
										<h5>{item.mpName}</h5>
										<div className="price">
											<span>${item.price}</span>
										</div>
										<span className="add-to-cart">
											<i className="iconfont icon-gouwuche"></i>
										</span>
									</div>
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
	 	  var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 3,
	      spaceBetween: 2,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	    }); 
	    
	     setTimeout(() => {
	      this.setState({
	        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
	      });
	    }, 100);
	 }
	 
	componentDidMount() {
	    homeData.bannerList((data) => {
	      console.log(data)
	      this.setState({
	        bannerlist: data
	      })
	    }),
	    
	    homeData.navList((data)=>{
	    	console.log(data)
	    	this.setState({
	    		navlist:data
	    	})
	    }),
	    
	     homeData.homeList((data)=>{
		  	console.log(data)
		  	this.setState({
		  		homelist:data
		  	})
		  })
	  }
	  
	 
	

}

export default Home;