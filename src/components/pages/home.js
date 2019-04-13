import React, { Component } from 'react';
import ChurchView from "../../Assets/images/churchView2.jpg";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {dimensions: {}};
    this.onImageLoad = this.onImageLoad.bind(this);
  }
  render() {
    return (
     <div className="container-fluid">
      <div className="sub-title">
        <h1>建立合神心意的教会</h1>
      </div>
      <div className="church-info">
        <p><img onLoad={this.onImageLoad} style={{
          width:this.state.dimensions.width * 0.2,
          height:this.state.dimensions.height * 0.2}} src={ChurchView} alt="churchView"/></p>
        <p>地区： Selangor/雪兰莪  Kajang/加影</p>
        <p>宗派：基督教会  卫理公会</p>
        <p>教会地址：NO, 25-1, JALAN SL 1/12, BANDAR SUNGAI LONG, 43000 KAJANG SELANGOR</p>
        <p>负责人： 简永裕牧师（主理）</p>
        <p>电话 1：016-2821580 【简永裕牧师】</p>
        <p>电话 2：016-4160603 【周经恩传到】</p>
        <p>崇拜语言：中文， 英文（翻译）</p>
        <p>Fax：-</p>
        <p>Email：sglongcmc@gmail.com</p>
      </div>
     </div>
    );
  }
  onImageLoad({target: source}) {
    this.setState( {
      dimensions: {
        height:source.height,
        width: source.width
      }
    })
  }
}
export default Home;