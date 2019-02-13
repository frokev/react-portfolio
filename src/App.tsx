import React, { Component, Fragment } from "react";
import "./styles/main.scss";
import Navbar from "./containers/Navbar/Navbar";
import HomePage from "./containers/HomePage/HomePage";
import WarningMessage from "./components/WarningMessage";
import Footer from "./containers/Footer/Footer";
import AboutSlide from "./containers/AboutSlide/AboutSlide";
import ScrollLock, { TouchScrollable } from "react-scrolllock";
import { throttle } from "lodash";

class App extends Component {
  state = {
    isScrollLock: true
  };

  render() {
    return (
      <Fragment>
        <AboutSlide />
        <Navbar />
        <ScrollLock
          isActive={this.state.isScrollLock}
          accountForScrollbars={false}
        >
          <HomePage />
        </ScrollLock>
        <Footer />
        <WarningMessage>
          This website does not support your browser. Consider upgrading or
          switching off IE.
        </WarningMessage>
      </Fragment>
    );
  }

  componentDidMount() {
    if (window.innerWidth < 1000 || window.innerHeight < 850) {
      this.setState({
        isScrollLock: false
      });
    }

    addEventListener("resize", throttle(this.handleResize, 300));
  }

  componentWillUnmount() {
    removeEventListener("resize", throttle(this.handleResize, 300));
  }

  handleResize = () => {
    if (window.innerWidth < 1000 || window.innerHeight < 850) {
      this.setState({
        isScrollLock: false
      });
    } else {
      this.setState({
        isScrollLock: true
      });
    }
  };
}

export default App;
