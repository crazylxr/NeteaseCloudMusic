import React from "react";
import TabPane from "./TabPane";
import style from "./style/index.css";

 class Tabs extends React.Component{
  static TabPane;

  constructor(props) {
    super(props);
  }

  getTabs(){
      const {children} = this.props;

      const newChild = children.map((item, index) => {
        return (
          <div className={style.tabPane} key={item.key}>{item.props.tab}</div>
        )
      });

      return newChild;
  }

  getContents(){
    const {children} = this.props;
    console.log(children[0].props.children);
    return (
      <div>
        {children[0].props.children}
      </div>
    );
  }

  render(){
    const { children } = this.props;
    return (
      <div >
        <div className={style.tabs}>
            {this.getTabs()}
        </div>
        <div>
            {this.getContents()}
        </div>
      </div>
    );
  }
}

Tabs.TabPane = TabPane;

export default Tabs;
