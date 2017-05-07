import React from 'react';
import {fetchAsync} from "../util/fetch_async.js";
import btn_login from "../assets/img/login/btn_login.png";
import Sing from "../assets/img/login/Sing.png";
import bg from "../assets/img/login/imgbg.png";
import  "../assets/less/login.less";

export default class Login extends React.Component{
  constructor(){
    super();
    this.state ={
      username:"18983412712",
      password:"li960221",
    }
  }

  login(){
    const url = 'http://119.29.16.43:3000/user/playlist?uid=330648432';
    fetchAsync(url,'get').then(res=>res.json()).
    then((res)=>console.log(res));
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

    return (
      <div className="body" style={{background:'#95c124',margin:'0 auto'}}>
        <div className="content" style={contentStyle}>
          <div className="left" style={leftStyle}>
            <img src={bg}></img>
          </div>
          <div className='right' style={rightStyle}>
            账号：<input  /><br />
            密码：<input type='password'/>
            <br />
            <button onClick={this.login}>Login()</button>
            <img src={btn_login} alt='登录按钮'></img>
          </div>
        </div>
      </div>
    );
  }
}
