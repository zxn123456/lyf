import React, { Component } from 'react';
// import listData from '@/api/listData'
import "./../css/kindlist.scss"
import { Link } from 'react-router-dom';
import store from '@/store/index.js'
import homeData from '@/api/homeData.js';
class App extends Component {
	state ={
		detailSrc:'',
		detailtitle:'',
        kindList:[]
	}
  render() {
    return (
      <div className="List">
        <div className="container">
        	<div className="box">
        		<div className="content">
                    <header>
                    列表页头部
                    </header>
                    {/* //---------综合栏----------------- */}
                    <div className="fixed-wrap">
                        <ul className="ui-list-sequence ui-border-b">
                            <li className="theme"><span>综合</span>
                                <i className="iconfont icon-xiangxiajiantou"></i>
                            </li>
                            <li>销量优先</li>
                            <li>筛选
                                <i className="iconfont icon-shaixuan"></i>
                            </li>
                        <li className="ui-border-l"><i class="iconfont icon-liebiao"></i></li>
                        </ul>
                    </div>
                    {/* //-------------------列表内容------------------------------ */}
                    <ul className="ui-row ui-list-grid hide show">
                         {
                            this.state.kindList.map((item, index) => {
                            return (
                                <li key={item.code } className="ui-col ui-col-50 parL0" >
                                    <Link to={'/listdetail/'+item.code}>
                                     <div className="bgw">
                                        <div className="img posR">
                                            <img src ={item.url800x800}/>                                           
                                        </div>
                                        <em className="ui-nowrap-multi">
                                            {item.name}
                                        </em>
                                         <div className="ui-nowrap-multi baseL1">
                                            <span className="promotion-icon-text bge9a5a5">满赠</span>
                                        </div>
                                        <p>
                                            <span className="f20 theme">￥{item.price}</span>
                                        </p>
                                        <span className="f10 c9 ui-nowrap baseL1">
                                            <span className="theme">{item.stockNum}</span>条评论好评
                                            <span className="theme">98%</span>
                                        </span>
                                        <i className="iconfont icon-gouwuche"></i>
                                       
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
    );
  }
    componentDidMount(){
    homeData.kindData((data) => {
	      store.dispatch({
				type:"KIND_LIST",
				data:data
            })
            console.log(data)
	      this.setState({
	        kindList: data
	      })
	    })
    }
}

export default App;
