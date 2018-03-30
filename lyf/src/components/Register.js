import React, { Component } from 'react';
import { List, InputItem, Toast, WhiteSpace, Button } from 'antd-mobile';
import userData from "@/api/userData"
class App extends Component {
	 state = {
    hasPhoneError: false,
    hasPasswordError: false,
    Phonevalue: '',
    Passwordvalue: '',
    Codevalue: ''
  }
  onPhoneErrorClick = () => {
    if (this.state.hasPhoneError) {
      Toast.info('请输入11位手机号');
    }
  }
  onPhoneChange = (Phonevalue) => {
    if (Phonevalue.replace(/\s/g, '').length < 11) {
      this.setState({
        hasPhoneError: true,
      });
    } else {
      this.setState({
        hasPhoneError: false,
      });
    }
    this.setState({
      Phonevalue,
    });
  }
	
	  onPasswordErrorClick = () => {
    if (this.state.hasPasswordError) {
      Toast.info('请输入正确格式的密码');
    }
  }
  onPasswordChange = (Passwordvalue) => {
    if (Passwordvalue.replace(/\s/g, '').length < 6) {
      this.setState({
        hasPasswordError: true,
      });
    } else {
      this.setState({
        hasPhoneError: false,
      });
    }
    this.setState({
      Passwordvalue,
    });
  }
	
	onCodeChange = (value)=>{
		this.setState({
			codevalue:value
		})
	}
	getCode(){
		userData.register({
			phone:this.state.phonevalue,
			password:this.state.passwordvalue,
			code:this.state.codevalue
		},(data)=>{
			
		})
	}
	
	
  render() {
    return (
      <div className="App">
        <div className="container">
        	<div className="box">
						<header>
							注册
						</header>
						<div className="content">
							<WhiteSpace />
							<WhiteSpace />
							
				          <InputItem
				            type="phone"
				            placeholder="请输入用户名"
				            error={this.state.hasPhoneError}
				            onErrorClick={this.onPhoneErrorClick}
				            onChange={this.onPhoneChange}
				            value={this.state.Phonevalue}
				          >用户名</InputItem>
				          
				           <InputItem
				            type="phone"
				            placeholder="请输入密码"
				            error={this.state.hasPasswordError}
				            onErrorClick={this.onPasswordErrorClick}
				            onChange={this.onPasswordChange}
				            value={this.state.Passwordvalue}
				          >密码</InputItem>
				          
				           <InputItem
				            type="number"
				            placeholder="请输入短信验证码"
				            onChange={this.onCodeChange}
				            value={this.state.Codevalue}
				            extra={<Button type="ghost" size="small" style={ {color: "#f66",border:0} } inline>发送短信验证码</Button>}
                    onExtraClick = { this.getCode }
				          >验证码</InputItem>
									<WhiteSpace />
                <Button type="primary">注册</Button>
						</div>
					</div>
        </div>
       
        
      </div>
    );
  }
}

export default App;
