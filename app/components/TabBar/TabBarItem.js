import React from "react";
import style from "./style/TabBarItem.css";

export default class TabBarItem extends React.Component{
  render(){
    const {icon,children} = this.props;
    return (
      <div className={style.TabBarItem}>
        <img className={style.TabBarItemImg} src={icon}></img>
        <span>{children}</span>
      </div>
    );
  }
}
