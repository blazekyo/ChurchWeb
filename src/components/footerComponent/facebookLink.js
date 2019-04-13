import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

import Facebook from "../../Assets/images/facebook.png";
class FacebookLink extends Component {
  render() {
    return (
        <div className="facebook-icon">
            <Link to="/">
                <img style={{width:'20px',height:'20px'}} src={Facebook} alt="facebook"/>
            </Link>
        </div>
    );
  }
}
export default FacebookLink;