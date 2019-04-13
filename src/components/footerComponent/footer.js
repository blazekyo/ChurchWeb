import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Facebook from "../../Assets/images/facebookIco.png";
import Youtube from "../../Assets/images/youtubeIco.png";
import QR from "../../Assets/images/qrIco.png";
class Footer extends Component {
  render() {
    return (
     <footer>
        <a href="https://www.facebook.com/sglcmc/">
          <img style={{position: 'absolute',left:'10px',width:'30px',height:'30px'}} src={Facebook} alt="facebook"/>
        </a>
        <Link to="/QRCode">
          <img style={{position: 'absolute',left:'50%',width:'30px',height:'30px',transform:`translate('-15px','0')`}} src={QR} alt="qr"/>
        </Link>
        <a href="https://www.youtube.com/">
          <img style={{position: 'absolute',right:'10px',width:'30px',height:'30px'}} src={Youtube} alt="youtube"/>
        </a>
     </footer>
    );
  }
}
export default Footer;