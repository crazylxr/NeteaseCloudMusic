import React from "react";
import style from "./style/index.css";

import myMessage from "./img/我的消息.svg";
import huiyuan from "./img/会员中心.svg";
import shop from "./img/购物车.svg";
import online from "./img/在线听歌1.svg";
import set from "./img/设置.svg";
import saoyisao from "./img/扫一扫.svg";
import pifu from "./img/个性换肤.svg";
import yejianmoshi from "./img/夜间模式.svg";
import dingshiguanbi from "./img//定时关闭.svg";
import musicnao from "./img/音乐闹钟.svg";
import jiashimoshi from "./img/驾驶模式.svg";
import share from "./img/分享网易云音乐.svg";
import about from "./img/关于.svg";

export default class Account extends React.Component{

  renderList(src,message){
    return (
      <div className={style.List_item}>
        <div>
          <img className={style.List_img} src={src} alt='icon'/>
        </div>
        <div className={style.List_item_message}>
            <span>{message}</span>
        </div>
      </div>
    );
  }

  render(){
    return (
      <div className={style.account}>
        <div style={{height:"48px"}}></div>
        <div className={style.header}>账 号</div>
        <div>
          <div className={style.AccountInfo_center}>登录网易网易云音乐</div>
          <div className={style.AccountInfo_center}>手机电脑多端同步，320k高音质无限下载</div>
          <div>
            <button className={style.AccountInfo_button}>立即登录</button>
          </div>
        </div>

        <div>
          <div className={style.space}></div>
          {this.renderList(myMessage,"我的消息")}
          <div className={style.space}></div>
          {this.renderList(huiyuan,"会员中心")}
          {this.renderList(shop,"商城")}
          {this.renderList(online,"在线听歌免流量")}
          <div className={style.space}></div>
          {this.renderList(set,"设置")}
          {this.renderList(saoyisao,"扫一扫")}
          {this.renderList(pifu,"个性换肤")}
          {this.renderList(yejianmoshi,"夜间模式")}
          {this.renderList(dingshiguanbi,"定时关闭")}
          {this.renderList(musicnao,"音乐闹钟")}
          {this.renderList(jiashimoshi,"驾驶模式")}
          <div className={style.space}></div>
          {this.renderList(share,"分享网易云音乐")}
          {this.renderList(about,"关于")}
          <div style={{height:"60px"}}></div>
        </div>
      </div>
    );
  }
}
