import React from "react";
import PersonalRecommend from "./subpage/PersonalRecommend/index";
import Tabs from "../../components/Tabs/index";
import style from "./style/index.css";

import mike_img from "./img/麦克.svg";

const TabPane = Tabs.TabPane;

export default class DiscoverMusic extends React.Component{
  render(){
    return (
      <div>
      {/* 搜索栏 */}
      <div className={style.indexSearch}>
        <img className={style.indexSearchImg} src={mike_img} alt="麦克"/>
        <input className={style.indexSearchInput} type='text' placeholder="🔍    搜索音乐、歌词、电台"></input>
      </div>
        <Tabs>
          <TabPane tab="个性推荐" key={1}>
              <PersonalRecommend></PersonalRecommend>
          </TabPane>
          <TabPane tab="歌单" key={2}>
            {/* <DiscoverMusic></DiscoverMusic> */}
          </TabPane>
          <TabPane tab="主播电台" key={3}>

          </TabPane>
          <TabPane tab="排行榜" key={4}>

          </TabPane>
        </Tabs>

      </div>
    );
  }
}
