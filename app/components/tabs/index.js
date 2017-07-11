import React from "react";
import TabPane from "./TabPane";
import style from "./style/index.css";

 class Tabs extends React.Component{
  static TabPane;

  constructor(props) {
    super(props);
  }

  getContents(){
      const {children} = this.props;

      const newChild = children.map((item, index) => {
        return (
          <div className={style.tabPane} key={item.key}>{item.props.tab}</div>
        )
      });

      return newChild;
  }

  render(){
    const { children } = this.props;
    return (
      <div className={style.tabs}>
        {this.getContents()}
      </div>
    );
  }
}

Tabs.TabPane = TabPane;

export default Tabs;
