import React, { Component } from 'react';
import { List, InputItem, Toast, WhiteSpace, Button } from 'antd-mobile';
import userData from "@/api/userData";


import "./../css/register.scss"
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
  onPhoneChange = (value) => {
    
    
    var reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
   
    var flag = reg.test(value.replace(/\s/g,''))
    var flag1 = value.replace(/\s/g,'').length < 11;
    console.log(!flag, flag1)
    if (flag1 || !flag) {
      
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
  // 密码
    onPasswordErrorClick = () => {
    if (this.state.hasPasswordError) {
      Toast.info('请输入正确格式的密码');
    }
  }
  onPasswordChange = (value) => {
    if (value.replace(/\s/g, '').length < 6) {
      this.setState({
        hasPasswordError: true,
      });
    } else {
      this.setState({
        hasPasswordError: false,
      });
    }
    this.setState({
      passwordvalue: value
    });
  }
  //验证码
  onCodeChange = (value) => {
     this.setState({
      codevalue: value
    });
  }
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

  gonext(){
    if(this.state.code==this.state.codevalue){
       this.setState({
        show: false
      });
      if(this.state.show==true){
        document.getElementById('phone').style.display = 'none';
        document.getElementById('password').style.display = 'block';
      }else{
        document.getElementById('phone').style.display = 'block';
        document.getElementById('password').style.display = 'none';
      }
      console.log(this.state.show)
    }
  }

  goLogin(){
    console.log(this.state.phonevalue,this.state.passwordvalue)
    userData.registerUser({
        phone:this.state.phonevalue,
        password:this.state.passwordvalue
    }, (data) =>{
      console.log(data);
      	this.props.history.push('./login') 
    })
  }
  componentDidMount(){
    if(this.state.show==true){
        document.getElementById('phone').style.display = 'block';
        document.getElementById('password').style.display = 'none';
      }else{
        document.getElementById('phone').style.display = 'none';
        document.getElementById('password').style.display = 'block';
      }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
        	<div className="box">
						<header className="ui-header ui-header-stable ui-border-b" >
            <i className="icons4 icons4-back"></i>
							<h1>注册</h1>
						</header>
						<div className="content">
            <WhiteSpace />
                    <WhiteSpace />
							<section className="ui-container" id="phone">
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
                    <button type="button" className="ui-border sms-btn"  onClick = { this.getCode.bind(this) }><span>获取验证码</span></button> 
                  </div>
                  <div className="ui-form-item submit-btn">
                    <button type="button" className="ui-btn ui-btn-primary" onClick={this.gonext.bind(this)} >下一步</button>
                  </div>
                  <div className="ui-form-item jump-link password">
                    <a className="link">注册则代表同意</a>
                    <span className="linka">联系客服</span>
                  </div>
                </div>
              </section>  
              <section className="ui-container hide" id="password">
                <div className="ui-form mgT35">
                  <div className="ui-form-item ui-form-item-show has-icon ui-border long-label bgf">
                    <InputItem
                      type="password"
                      placeholder="请输入密码"
                      error={this.state.hasPasswordError}
                      onErrorClick={this.onPasswordErrorClick}
                      onChange={this.onPasswordChange}
                      value={this.state.passwordvalue}
                    >密码</InputItem>
                  </div>
                  <div className="ui-form-item ui-form-item-show has-icon ui-border mgT20 long-label bgf">
                    <InputItem
                      type="password"
                      placeholder="再次输入密码"
                      
                    >确认密码</InputItem>
                  </div>
                  <div className="ui-form-item ui-form-item-show has-icon ui-border mgT20 long-label bgf">
                    <InputItem type="phone"
                     placeholder="非必填" 
                     className="login">
                      邀请人 
                    </InputItem> 
                  </div>
                  <div className="ui-form-item submit-btn">
                    <button type="button" className="ui-btn ui-btn-primary" heimdall_eventname="signUp" onClick={this.goLogin.bind(this)}>完成</button>
                  </div>
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
