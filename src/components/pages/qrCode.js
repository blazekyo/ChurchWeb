import React, { Component } from 'react';

import QR from "../../Assets/images/qrIco.png";
class QRCode extends Component {
  render() {
    return (
        <div className="container-fluid">
        <div className="sub-title">
          <h1>次序单二维码</h1>
        </div>
        <div className="qr-code">
            <img style={{width:"30%"}} src={QR} alt="qr-code" /> 
        </div>
       </div>
    );
  }
}
export default QRCode;