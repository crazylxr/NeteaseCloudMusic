import React from 'react';
import  "../assets/less/homepage.less";
import head from "../assets/img/homgpage/head.png";
import bg2 from "../assets/img/homgpage/bg2.png";
import bg from "../assets/img/homgpage/bg.png";
import icon_exit from "../assets/img/homgpage/icon_exit.png";
import icon_homepage from "../assets/img/homgpage/icon_homepage.png";
import icon_musicList from "../assets/img/homgpage/icon_musicList.png";
import icon_song from "../assets/img/homgpage/icon_song.png";
import icon_mv from "../assets/img/homgpage/icon_mv.png";
import icon_hotsinger from "../assets/img/homgpage/icon_hotsinger.png";
import icon_myMusic from "../assets/img/homgpage/icon_myMusic.png";
import footer from "../assets/img/homgpage/footer.png";

import recommentMusic from "./recommentMusic.js";
import recommentSongSheet from "./recommentSongSheet.js";
import hotSinger from "./hotSinger.js";

export default class Home extends React.Component{
  render(){
    return (
      <div>
        <header style={{background:`url(${bg}) no-repeat`}}>
          <div className="profile">
            <img className="head_img" src={head} alt='头像'/>
            <div className="person">欢迎<a>李萧然</a></div>
            <img className="exit_img" src={icon_exit} alt="注销"/>
          </div>
          <div className="search">
            <input type="text" name="" value="" placeholder="请输入你想听的音乐" />
          </div>

        </header>
        <nav>
          <div className="homepage_nav">
             <img src={icon_homepage} alt="首页" />首页
          </div>
          <div className="recommentSongSheet_nav">
            <img src={icon_musicList} alt="每日推荐歌单" />每日推荐歌单
          </div>
          <div className="recommentSing_nav">
            <img src={icon_song} alt="每日推荐歌曲" />每日推荐歌曲
          </div>
          <div className="mv_nav">
            <img src={icon_mv} alt="MV" />MV
          </div>
          <div className="hotSinger_nav">
            <img src={icon_hotsinger} alt="热门歌手" />热门歌手
          </div>
          <div className="mymusic_nav">
            <img src={icon_myMusic}alt="我的音乐" />我的音乐
          </div>
        </nav>
        <div className="content">
          <div className="recomment" style={{  background: "url(bg2)"}}>
            {recommentMusic()}
            {recommentSongSheet()}
          </div>
        </div>
          {hotSinger()}
       <footer style={{background:`url(${footer})`,height:"130px",width:"100%",marginTop:"20px"}}>

        </footer>
      </div>
    );
  }
}
