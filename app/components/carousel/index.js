import React from "react";
import style from "./style/index.css";

export default class Carousel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      no : 1,
      timer:null,
    }
  }

  componentDidMount(){
    const timer = setInterval(()=>{
      const no = this.state.no;
      no + 1 > 3 ? this.setState({ no:1 })  : this.setState({ no: no + 1})
    },3000);
    this.setState({timer:timer});
  }

  componentWillUnmount(){
    clearInterval(this.state.timer);
  }

  renderImg(){
      const no = this.state.no;
      return <img className={style.img} src={this.props.data[no]}></img>
  }

  render(){
    return(
      <div >
        {this.renderImg()}
      </div>
    );
  }
}
