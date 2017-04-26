import React from 'react';
import {fetchAsync} from "../util/fetch_async.js";

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
    return (
      <div>
          账号：<input  /><br />
          密码：<input type='password'/>
          <br />
          <button onClick={this.login}>Login()</button>
      </div>

    );
  }
}
