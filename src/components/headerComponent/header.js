import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from "../../Assets/images/logo.jpg";

class Header extends Component {
  render() {
    return (
     <header>
         <div className="logo">
            <img style={{width: '50px', height: '80px'}} src={Logo} alt = "Logo" />
         </div>
         <p className="churchName">双溪龙基督教卫理工会 SUNGAI LONG CHINESE METHODIST CHURCH</p>
         <nav>
             <ul>
                 <li className="first">
                    <Link to="/">首页</Link>
                 </li>
                 <li>
                    <Link to="/UFellowship">大专团契</Link>
                 </li>
                 <li>
                    <Link to="/SundaySchool">主日学</Link>
                 </li>
                 <li className="last">
                    <Link to="/SundayService">主日崇拜</Link>
                 </li>
             </ul>
         </nav>
     </header>
    );
  }
}
export default Header;