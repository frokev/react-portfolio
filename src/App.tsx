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
import PortfolioPostPage from "./containers/PortfolioPostPage/PortfolioPostPage";

class App extends Component {
  state = {
    isScrollLock: true
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Fragment}>
          <AboutSlide />
          <PortfolioSlide />
          <ScrollLock
            isActive={this.state.isScrollLock}
            accountForScrollbars={false}
          >
            <HomePage />
          </ScrollLock>
        </Route>
        <Route path="/about" component={AboutPage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route path="/portfolio/post" component={PortfolioPostPage} />
        <Route path="/contact" component={ContactPage} />
        <Footer />
        <WarningMessage>
          This website does not support your browser. Consider upgrading or
          switching off IE.
        </WarningMessage>
      </BrowserRouter>
    );
  }

  throttledHandleResize: (() => void) & Cancelable | undefined = undefined;
  componentDidMount() {
    if (window.innerWidth < 1000 || window.innerHeight < 950) {
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
    if (window.innerWidth < 1000 || window.innerHeight < 950) {
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
