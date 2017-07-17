import React from "react";
import Carousel from "../../../../components/carousel/index";
import {getBanner} from "../../../../fetch/DiscoverMusicFetch";

import img1 from "./img/网易云音乐.png";
import img2 from "./img/网易云阅读.png";
import img3 from "./img/麦克风.png";

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
          </div>
      </div>
    );
  }
}
