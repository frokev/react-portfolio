import React, { Component, Fragment } from "react";
import "./styles/main.scss";
import Navbar from "./containers/Navbar/Navbar";
import HomePage from "./containers/HomePage/HomePage";
import WarningMessage from "./components/WarningMessage";
import Footer from "./containers/Footer/Footer";
import AboutSlide from "./containers/AboutSlide/AboutSlide";

class App extends Component {
  render() {
    return (
      <Fragment>
        <AboutSlide />
        <Navbar />
        <HomePage />
        <Footer />
        <WarningMessage>
          This website does not support your browser. Consider upgrading or
          switching.
        </WarningMessage>
      </Fragment>
    );
  }
}

export default App;
