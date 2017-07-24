import React from "react";
import Carousel from "../../../../components/carousel/index";
import {getBanner} from "../../../../fetch/DiscoverMusicFetch";

import style from "./style/index.css";

import img1 from "./img/网易云音乐.png";
import img2 from "./img/网易云阅读.png";
import img3 from "./img/麦克风.png";
import FM_img from "./img/私人FM.svg";
import recomment_img from "./img/每日歌曲推荐.svg";
import hotMusic_img  from "./img/云音乐热歌榜.svg";

export default class PersonalRecommend extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      imgsrc : []
    }
  }

  componentDidMount(){
    getBanner().then((banners)=>{
      let img = banners.map((item,index)=>{
        return item.pic;
      })
      this.setState({imgsrc:img});
    });
  }

  render(){
    const imgsrc = [img1,img2,img3];

    return (
      <div>
          {/*轮播*/}
          <div>
            <Carousel data={this.state.imgsrc}>
            </Carousel>

            <div className={style.nav_list}>
              <div className={style.nav_item}>
                <div className={style.nav_item_quan}>
                  <img className={style.nav_item_img} src={FM_img} alt='icon'/>
                </div>
                <span>私人FM</span>
              </div>
              <div className={style.nav_item}>
                <div className={style.nav_item_quan}>
                  <img className={style.nav_item_img} src={recomment_img} alt='icon'/>
                </div>
                <span>每日歌曲推荐</span>
              </div>
              <div className={style.nav_item}>
                <div className={style.nav_item_quan}>
                  <img className={style.nav_item_img} src={hotMusic_img} alt='icon'/>
                </div>
                <span>云音乐热歌榜</span>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
