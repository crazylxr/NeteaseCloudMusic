import React from "react";
import icon_list from "../assets/img/homgpage/icon_list.png";
import pic4 from "../assets/img/homgpage/pic4.png";
import btn_more from "../assets/img/homgpage/btn_more.png";
import pic5 from "../assets/img/homgpage/pic5.png";


const recommentSongSheet = (props)=>{
  return (
    <section className="recommentSongSheet">
      <div className="title_content title_recommentSongSheet">
        <img src={icon_list} alt=""/>
        <span className="titleText">每日推荐歌单</span>
        <a className="titleMore" href="#">MORE>></a>
      </div>
      <div className="song_recommentSongSheet">
        <div className="recommentSing recommentSongSheet1">
          <img src={pic4} alt="recommentSongSheet1"/>
          <div className="rec_description">
            <div className="SongSheetName">
                  <h3>回忆伤人无声,唱不尽世间遗憾</h3>
            </div>
            <div className="SongSheetDes">
              <p>恋一坐城，是一种执着的情。
              生命的扉页里，总是你的影。</p>
              <img src={btn_more} alt=""/>
            </div>
          </div>
        </div>
        <div className="recommentSing recommentSongSheet2">
          <img src={pic5} alt="recommentSongSheet2"/>
          <div className="rec_description">
            <div className="SongSheetName">
              <h3>回忆伤人无声,唱不尽世间遗憾</h3>
            </div>
            <div className="SongSheetDes">
              <p>恋一坐城，是一种执着的情。
              生命的扉页里，总是你的影。</p>
              <img src={btn_more} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default recommentSongSheet;
