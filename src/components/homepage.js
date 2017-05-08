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
            <section className="recommentMusic">
              <div className="title_content title_recommentMusic">
                <img src="./img/icon_music.png" alt="" />
                <span className="titleText">每日推荐歌曲</span>
                <a className="titleMore" href="#">MORE>></a>
              </div>
              <div className="sing_recommentMusic">
                <img src="./img/pic1.png" alt="sing1"/>
                <img src="./img/pic2.png" alt="sing2"/>
                <img src="./img/pic3.png" alt="sing3"/>
              </div>
            </section>
            <section className="recommentSongSheet">
              <div className="title_content title_recommentSongSheet">
                <img src="./img/icon_list.png" alt=""/>
                <span className="titleText">每日推荐歌单</span>
                <a className="titleMore" href="#">MORE>></a>
              </div>
              <div className="song_recommentSongSheet">
                <div className="recommentSing recommentSongSheet1">
                  <img src="./img/pic4.png" alt="recommentSongSheet1"/>
                  <div className="rec_description">
                    <div className="SongSheetName">
                          <h3>回忆伤人无声,唱不尽世间遗憾</h3>
                    </div>
                    <div className="SongSheetDes">
                      <p>恋一坐城，是一种执着的情。
                      生命的扉页里，总是你的影。</p>
                      <img src="./img/btn_more.png" alt=""/>
                    </div>
                  </div>
                </div>
                <div className="recommentSing recommentSongSheet2">
                  <img src="./img/pic5.png" alt="recommentSongSheet2"/>
                  <div className="rec_description">
                    <div className="SongSheetName">
                      <h3>回忆伤人无声,唱不尽世间遗憾</h3>
                    </div>
                    <div className="SongSheetDes">
                      <p>恋一坐城，是一种执着的情。
                      生命的扉页里，总是你的影。</p>
                      <img src="./img/btn_more.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* <section className="hotSinger">
            <div className="" style={{display:"flex",justifyContent:"center"}}>
              <img src="./img/icon_singer.png" alt="热门歌手"/>
            </div>
            <div className="" style={{display:"flex",justifyContent:"center",fontSize:"22px",color:"#333"}}>
              热门歌手
            </div>
            <div className="singers" style={{width:"900px",margin:"0 auto"}}>
              <div className="singer1" style={{position:"relative",display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                <img className="circle_img circleRight" src="./img/circle.png"  alt=""/>
                <div style="width:1px;height:65px;background:#333;position:relative;right:8px;top:45px;">

                </div>
                <div  style="background:#333; height:1px;width:24%;">
                </div>
                <div className="" style="display:flex;justify-content:flex-end;align-items:center;width:25%;">
                  <span className="no">TOP1</span>
                  <span className="singername">赵雷</span>
                  <img src="./img/singer1.png" alt="singer1"/>
                </div>
              </div>
              <div className="singer2" style="position:relative;display:flex;justify-content:flex-start;align-items:center;">
                <div className="" style="display:flex;align-items:center;width:25%;">
                  <img src="./img/singer2.png"  alt="singer2"/>
                  <span className="no">TOP2</span>
                  <span className="singername">许巍</span>
                </div>
                <div className="" style="background:#333; height:1px;width:24%;"></div>
                <img className="circle_img" src="./img/circle.png" style="position:absolute;left:45%;" alt=""/>
                <div className="" style="position:relative;width:1px;height:65px;background:#333;left:9px;top:45px;">
                </div>
              </div>

            <div className="singer3" style="position:relative;display:flex;justify-content:flex-end;align-items:center;">
              <img className="circle_img circleRight" src="./img/circle.png"  alt=""/>
              <div className="" style="background:#333; height:1px;width:24%;">
              </div>
              <div style="display:flex;justify-content:flex-end;align-items:center;width:25%;">
                <span className="no">TOP3</span>
                <span className="singername">梁博</span>
                <img src="./img/singer3.png" alt="singer3"/>
              </div>
            </div>
            </div>
          </section> */}
          </div>
        <footer style={{background:"url('./img/footer.png')",height:"130px",width:"100%",marginTop:"20px"}}>

        </footer>
      </div>
    );
  }
}
