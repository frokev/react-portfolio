import React, { Component } from "react";
import tripImage from "../../assets/kevin_pa_tur.jpg";

export default class AboutSlide extends Component<any, any> {
  render() {
    return (
      <div className="about-slide">
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
}
