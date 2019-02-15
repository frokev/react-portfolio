import React, { Component } from "react";
import tripImage from "../../assets/kevin_pa_tur.jpg";
import { throttle, Cancelable } from "lodash";

export default class AboutSlide extends Component<any, any> {
  state = {
    className: "about-slide",
    display: { display: "none" }
  };

  render() {
    return (
      <div className={this.state.className} style={this.state.display}>
        <h1 className="title">About me</h1>
        <img src={tripImage} alt="portrait" className="image" />
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et
          faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat.
          Donec placerat nisl magna, et faucibus arcu condimentum sed.
        </p>
        <button className="button">Read more</button>
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
    if (window.innerWidth < 1000 || window.innerHeight < 850) return;
    if (event.deltaY < 0) {
      this.setState({
        className: "about-slide animated slideOutLeft"
      });
    } else {
      this.setState({
        className: "about-slide animated slideInLeft",
        display: { display: "flex" }
      });
    }
  };
}
