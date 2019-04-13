import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import './Assets/css/default.min.css';
//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Home from './components/pages/home';
import UFellowship from './components/pages/uFellowship';
import SundaySchool from './components/pages/sundaySchool';
import SundayService from './components/pages/sundayService';
import QRCode from './components/pages/qrCode';
//images
import ChurchView from './Assets/images/churchView.jpg';

class App extends Component {
  render() {
    return (
      <div className="App" style={{position: 'relative', overflowX: 'hidden'}}>
        <Router>
        <div className="background-image">
            <img style={{opacity:"0.3", width:"100%", height:"100%"}} src={ChurchView}/>
        </div>
        <Header />
        <body>
          <Route exact path='/' component={Home}/>
          <Route exact path='/UFellowship' component={UFellowship}/>
          <Route exact path='/SundaySchool' component={SundaySchool}/>
          <Route exact path='/SundayService' component={SundayService}/>
          <Route exact path='/QRCode' component={QRCode}/>
        </body>
        <Footer />
        </Router>
    </div>
    );
  }
}
export default App;
