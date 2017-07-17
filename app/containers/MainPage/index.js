import React from "react";
import {Link} from "react-router-dom";
import TabBar from "../../components/TabBar/index";
import Tabs from "../../components/Tabs/index";
import DiscoverMusic from "../DiscoverMusic/index";

import findMuscic_img from "./img/发现音乐.svg";
import myMusic from "./img/我的音乐.svg";
import friend_img from "./img/朋友.svg";
import account_img from "./img/账号.svg";

const TabPane = Tabs.TabPane;

export default class MainPage extends React.Component{
  render(){
    return (
      <div>
        <TabBar>
          <Link to='/'><TabBar.Item icon={findMuscic_img}>发现音乐</TabBar.Item></Link>
          <Link to='/friend'><TabBar.Item icon={myMusic}>我的音乐</TabBar.Item></Link>
          <Link to='/friend'><TabBar.Item icon={friend_img}>朋 友</TabBar.Item></Link>
          <Link to='/account'><TabBar.Item icon={account_img}>账 户</TabBar.Item></Link>
        </TabBar>
      </div>
    );
  }
}
