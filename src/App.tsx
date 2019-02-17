import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/main.scss";
import Navbar from "./containers/Navbar/Navbar";
import HomePage from "./containers/HomePage/HomePage";
import WarningMessage from "./components/WarningMessage";
import Footer from "./containers/Footer/Footer";
import AboutSlide from "./containers/AboutSlide/AboutSlide";
import ScrollLock from "react-scrolllock";
import { throttle, Cancelable } from "lodash";
import PortfolioSlide from "./containers/PortfolioSlide/PortfolioSlide";
import AboutPage from "./containers/AboutPage/AboutPage";
import PortfolioPage from "./containers/PortfolioPage/PortfolioPage";
import ContactPage from "./containers/ContactPage/ContactPage";

class App extends Component {
  state = {
    isScrollLock: true
  };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Fragment>
                  <AboutSlide />
                  <PortfolioSlide />
                  <ScrollLock
                    isActive={this.state.isScrollLock}
                    accountForScrollbars={false}
                  >
                    <HomePage />
                  </ScrollLock>
                </Fragment>
              );
            }}
          />
          <Route path="/about" component={AboutPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/contact" component={ContactPage} />
          <Footer />
          <WarningMessage>
            This website does not support your browser. Consider upgrading or
            switching off IE.
          </WarningMessage>
        </Fragment>
      </BrowserRouter>
    );
  }

  throttledHandleResize: (() => void) & Cancelable | undefined = undefined;
  componentDidMount() {
    if (window.innerWidth < 1000 || window.innerHeight < 850) {
      this.setState({
        isScrollLock: false
      });
    }

    addEventListener(
      "resize",
      (this.throttledHandleResize = throttle(this.handleResize, 300))
    );
  }

  componentWillUnmount() {
    if (!this.throttledHandleResize) return;
    this.throttledHandleResize.cancel();
    removeEventListener("resize", this.throttledHandleResize);
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
