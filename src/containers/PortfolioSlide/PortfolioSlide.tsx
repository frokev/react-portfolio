import React, { Component } from "react";
import portfolioImage from "../../assets/portfolio-img.jpg";
import { throttle, Cancelable } from "lodash";

export default class PortfolioSlide extends Component {
  state = {
    className: "portfolio-slide",
    display: { display: "none" }
  };

  render() {
    return (
      <div className={this.state.className} style={this.state.display}>
        <h1 className="title">Portfolio</h1>
        <div className="portfolio-card">
          <img src={portfolioImage} alt="" className="image" />
          <div className="title-shade">
            <h2 className="card-title">Best project ever</h2>
          </div>
        </div>
        <div className="portfolio-card">
          <img src={portfolioImage} alt="" className="image" />
          <div className="title-shade">
            <h2 className="card-title">Best project ever</h2>
          </div>
        </div>
        <button className="button">See more</button>
      </div>
    );
  }

  throttledHandleScroll:
    | ((event: any) => void) & Cancelable
    | undefined = undefined;

  componentDidMount() {
    window.addEventListener(
      "wheel",
      (this.throttledHandleScroll = throttle(this.handleScroll, 300))
    );
  }

  componentWillUnmount() {
    if (!this.throttledHandleScroll) return;
    this.throttledHandleScroll.cancel();
    window.removeEventListener("wheel", this.throttledHandleScroll);
  }

  handleScroll = (event: any) => {
    if (window.innerWidth < 1000 || window.innerHeight < 730) return;
    if (event.deltaY < 0) {
      this.setState({
        className: "portfolio-slide animated slideOutRight"
      });
    } else {
      this.setState({
        className: "portfolio-slide animated slideInRight",
        display: { display: "flex" }
      });
    }
  };
}
