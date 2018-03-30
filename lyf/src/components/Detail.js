import React, { Component } from 'react';
import detailData from '@/api/detailData'



class App extends Component {
	state ={
		detailSrc:'',
		detailtitle:''
		
	}
  render() {
    return (
      <div className="App">
        <div className="container">
        	<div className="box">
						<header>
							详情头不
						</header>
						<div className="content">
						 <img src = { this.state.detailSrc } style={{width: "100px"}}/>
              <h2>{ this.state.detailtitle }</h2>
						
						</div>
					</div>
        </div>
        <footer>
          <ul>
            <li>
              <a href="#">
                <p>店铺</p>
              </a>
            </li>
            <li>
               <a href="#">
              <p>收藏</p>
               </a>
            </li>
            <li>
             <a href="#">
              <p>加入购物车</p>
               </a>
            </li>
            <li>
             <a href="#">
              <p>立即购买</p>
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
    detailData.goodsData(goodsID, (data) => {
      console.log(data[goodsID-1])
      this.setState({
        detailSrc:data[goodsID-1].detailSrc,
		detailtitle:data[goodsID-1].detailtitle
      })
    })
  }
}

export default App;
