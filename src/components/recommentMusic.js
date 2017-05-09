import React from "react";
import icon_music from "../assets/img/homgpage/icon_music.png";
import pic1 from "../assets/img/homgpage/pic1.png";
import pic2 from "../assets/img/homgpage/pic2.png";
import pic3 from "../assets/img/homgpage/pic3.png";

 const recommentMusic = (props)=>{
  return (
    <section className="recommentMusic">
      <div className="title_content title_recommentMusic">
        <img src={icon_music} alt="" />
        <span className="titleText">每日推荐歌曲</span>
        <a className="titleMore" href="#">MORE>></a>
      </div>
      <div className="sing_recommentMusic">
        <img src={pic1} alt="sing1"/>
        <img src={pic2} alt="sing2"/>
        <img src={pic3} alt="sing3"/>
      </div>
    </section>
  );
}
export default recommentMusic;
