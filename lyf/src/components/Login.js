import React, { Component } from 'react';


import { List, InputItem, Toast, WhiteSpace, Button } from 'antd-mobile';
import userData from "@/api/userData";
import "./../css/login.scss"
class App extends Component {
  state = {
    hasPhoneError: false,
    hasPasswordError: false,
    show:true,
    phonevalue: '',
    passwordvalue: '',
    codevalue: '',
    code:''
  }
  //手机号
   onPhoneErrorClick = () => {
    if (this.state.hasPhoneError) {
      Toast.info('请输入正确的手机号码');
    }
  }
  // 验证手机号
  onPhoneChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasPhoneError: true,
      });
    } else {
      this.setState({
        hasPhoneError: false,
      });
    }
    this.setState({
      phonevalue: value
    });
  }
  //验证码
  onCodeChange = (value) => {
     this.setState({
      codevalue: value
    });
  }

  //后台获取验证码
  getCode(){
    userData.register({
        phone:this.state.phonevalue
    }, (data) =>{
      console.log(data);
      this.setState({
        code:data.code
        
      })
      
    })
  }

  //去首页
  gohome(){
    userData.registerGohome({
       phone:this.state.phonevalue
    },(data)=>{
      if(data[0].phone){
          console.log(data[0].phone);
          if (localStorage.getItem('isLogin')) {
              var obj = JSON.parse(localStorage.getItem('isLogin'));
          } else {
              var obj = {}
          }
				 obj["phone"] = data[0].phone;
          var str = JSON.stringify(obj)
          localStorage.setItem('isLogin', str);
          this.props.history.push('./home') 
      }else{

      }

    })
  }
  //查询数据库并登录存locastore
  
  pagehandler(type,flag){
		//console.log(this);
		this.props.history.push({
			pathname:"/"+type,
			state:{
				flag:flag
			}
		})
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
        	<div className="box">
						<header className="ui-header ui-header-stable ui-border-b" >
              <i className="icons4 icons4-back"></i>
              <h1 >登录</h1>
              <a className="handle" onClick={this.pagehandler.bind(this,'register','user')}>注册</a>
            </header>
						<div className="content">
						  <section className="ui-container">
                <div className="ui-form">
                  <div className="ui-form-item ui-form-item-show ui-border bgf mgT35 long-label">
                    <InputItem type="phone"
                     placeholder="请输入手机号" 
                     className="login"
                     error={this.state.hasPhoneError}
                    onErrorClick={this.onPhoneErrorClick}
                    onChange={this.onPhoneChange}
                    value={this.state.phonevalue}>
                    手机号 
                    </InputItem>
                  </div>
                  <div className="ui-form-item ui-form-item-show has-sms ui-border mgT20 bgf long-label shouji" >
                    <InputItem type="code"
                    placeholder="请输入验证码"
                    onChange={this.onCodeChange}
                    value={this.state.codevalue}
                    className="login"
                      >
                      验证码
                    </InputItem>  
                    <button type="button" className="ui-border sms-btn" onClick={this.getCode.bind(this)}><span>获取验证码</span></button> 
                  </div>
                  <div className="ui-form-item submit-btn">
                    <button type="button" className="ui-btn ui-btn-primary" onClick={this.gohome.bind(this)} >登录</button>
                  </div>
                  <div className="ui-form-item jump-link password">
                    <a className="link">密码登录</a>
                  </div>
                </div>
                <div className="joint-login ui-border-t">
                  <h6>使用以下账号可免注册</h6>
                  <ul className="ui-tiled"><li><i className="icon icon-qq"></i></li></ul>
                </div>
              </section> 
              
						</div>
					</div>
        </div>
      </div>
    );
  }
}
export default App;
