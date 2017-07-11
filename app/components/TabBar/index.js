import React from "react";
import TabBarItem from "./TabBarItem";
import style from "./style/index.css";


 class TabBar extends React.Component{
   constructor(props){
      super(props);
   }

  static defaultProps = {

  }

  static Item;

  getPanes(){
    const {children} = this.props;

     let selectIndex = 0;
    // children.forEach((child, idx) => {
    //   if(child.props.selected){
    //     selected = idx;
    //   }
    // });
    return children;

  }

  // static Item : any;
  render(){
    return (
      <div className={style.tabbarBgNormarl}>
        {this.getPanes()}
      </div>
    )
  }
}

TabBar.Item = TabBarItem;

export default TabBar;
