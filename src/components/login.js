import React from 'react';
import {fetchAsync} from "../util/fetch_async.js";
import btn_login from "../assets/img/login/btn_login.png";
import Sing from "../assets/img/login/Sing.png";
import bg from "../assets/img/login/imgbg.png";
import  "../assets/less/login.less";

import {Link,Redirect} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
const location = history.location;

export default class Login extends React.Component{
  constructor(){
    super();
    this.state ={
      auth:false,
      username:"18983412712",
      password:"li96022",
    }
  }

  usernameChange(e){
    this.setState({
      username:e.target.value
    });
  }

  passwordChange(e){
    this.setState({
      password:e.target.value
    });
  }

  login(){
    const {username,password} = this.state;
    const url = `http://localhost:3000/login/cellphone?phone=${username}&password=${password}`;
    fetchAsync(url,'get').then(res=>res.json()).
    then((res)=>{
      if(res.code === 200){
        history.push("/home");
        this.setState({
          auth:true
        });
      }

      console.log(res)
    });
    console.log(66);

  }

  render(){
    const contentStyle = {
      overflow: 'auto'
    }

    const leftStyle={
      margin: '0 auto',
      float: 'left',
    };

    const rightStyle = {
        float: 'left'
    }
    const auth = this.state.auth;
    console.log(auth);
     if(auth){
       return (
           <Redirect to="/home"/>
       )
     }

    return (

      <div className="body" >
        <div className="content" >
          <div className="sing">
            <img src={Sing}/>
          </div>
          <div className="left" >
            <img src={bg}></img>
          </div>
          <div className='right'>
            <h1 className="loginText">登录</h1>
            <div className="logonContent">
              <span className="usernameText">用户名：</span><br />
              <input onChange={this.usernameChange.bind(this)} className="text username" /><br />
              <span className="passwordText">密码：</span><br />
              <input onChange={this.passwordChange.bind(this)} className="text password" type='password'/>
              <br />
              <div className="remberpassword">
                <input type='checkbox'  value=""/> 记住密码
              </div>
          <button onClick={this.login.bind(this)} className="loginButton" type="button" name="button">登录</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
