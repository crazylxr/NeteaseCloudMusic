import React from "react";
import icon_singer from "../assets/img/homgpage/icon_singer.png";
import circle from "../assets/img/homgpage/circle.png";
import singer1 from "../assets/img/homgpage/singer1.png";
import singer2 from "../assets/img/homgpage/singer2.png";
import singer3 from "../assets/img/homgpage/singer3.png";


const hotSinger = ()=>{
  return (
     <section className="hotSinger">
      <div className="" style={{display:"flex",justifyContent:"center"}}>
        <img src={icon_singer} alt="热门歌手"/>
      </div>
      <div className="" style={{display:"flex",justifyContent:"center",fontSize:"22px",color:"#333"}}>
        热门歌手
      </div>
      <div className="singers" style={{width:"900px",margin:"0 auto"}}>
        <div className="singer1" style={{position:"relative",display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
          <img className="circle_img circleRight" src={circle}  alt="圆"/>
          <div style={{width:"1px",height:"65px",background:"#333",position:"relative",right:"8px",top:"45px"}}>

          </div>
          <div  style={{background:"#333", height:"1px",width:"24%"}}>
          </div>
          <div className="" style={{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"25%"}}>
            <span className="no">TOP1</span>
            <span className="singername">赵雷</span>
            <img src={singer1} alt="singer1"/>
          </div>
        </div>
        <div className="singer2" style={{position:"relative",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
          <div className="" style={{display:"flex",alignItems:"center",width:"25%"}}>
            <img src={singer2}  alt="singer2"/>
            <span className="no">TOP2</span>
            <span className="singername">许巍</span>
          </div>
          <div className="" style={{background:"#333", height:"1px",width:"24%"}}></div>
          <img className="circle_img" src={circle} style={{position:"absolute",left:"45%"}} alt=""/>
          <div className="" style={{position:"relative",width:"1px",height:"65px",background:"#333",left:"9px",top:"45px"}}>
          </div>
        </div>

      <div className="singer3" style={{position:"relative",display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
        <img className="circle_img circleRight" src={circle}  alt=""/>
        <div className="" style={{background:"#333",height:"1px",width:"24%"}}>
        </div>
        <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"25%"}}>
          <span className="no">TOP3</span>
          <span className="singername">梁博</span>
          <img src={singer3} alt="singer3"/>
        </div>
      </div>
      </div>
    </section>
  );
}
export default hotSinger;
