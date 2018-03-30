import React,{ Component } from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
class Cart extends Component {
	state = {
		
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
				<header>
				我的
				</header>
				<div className="content">
				<WhiteSpace />
			<Button type="primary" inline style={{ marginRight: '15px' }} onClick={this.pagehandler.bind(this,'login','user')}>登录</Button>
              <Button type = "ghost" inline onClick={this.pagehandler.bind(this,'register','user')}>注册</Button>
				</div>
			</div>
		)
	}
	
	componentDidMount(){
		
	}
}

export default Cart;