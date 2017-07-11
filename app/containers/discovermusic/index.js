import React from "react";
import TabBar from "../../components/TabBar/index";
import Tabs from "../../components/tabs/index";
import PersonalRecommend from "./subpage/personalRecommend/index";
import style from "./style/index.css";

import mike_img from "./img/麦克.svg";

import findMuscic_img from "./img/发现音乐.svg";
import myMusic from "./img/我的音乐.svg";
import friend_img from "./img/朋友.svg";
import account_img from "./img/账号.svg";


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


        <div>
          <Tabs>
            <TabPane tab="个性推荐" key={1}>
              <PersonalRecommend></PersonalRecommend>
            </TabPane>
            <TabPane tab="歌单" key={2}>

            </TabPane>
            <TabPane tab="主播电台" key={3}>

            </TabPane>
            <TabPane tab="排行榜" key={4}>

            </TabPane>
          </Tabs>
        </div>


        <TabBar>
          <TabBar.Item icon={findMuscic_img} title="发现音乐">
          </TabBar.Item>
          <TabBar.Item icon={myMusic} title="我的音乐">
          </TabBar.Item>
          <TabBar.Item icon={friend_img} title="朋 友">
          </TabBar.Item>
          <TabBar.Item icon={account_img} title="账 号">
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
