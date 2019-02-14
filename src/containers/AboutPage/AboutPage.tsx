import React, { Component } from "react";
import tripImage from "../../assets/kevin_pa_tur.jpg";

export default class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="content-wrapper">
          <h1 className="page-title">About me</h1>
          <div className="section-about">
            <img src={tripImage} alt="Image" className="image" />
            <div className="text-content">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl
                magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                 Aliquam erat volutpat. Donec placerat nisl magna, et faucibus
                arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam at porttitor sem.  Aliquam erat
                volutpat. Donec placerat nisl magna, et faucibus arcu
                condimentum sed.
              </p>
            </div>
          </div>
          <div className="section-about">
            <div className="text-content">
              <h2 className="title">Something more about me</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl
                magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                 Aliquam erat volutpat. Donec placerat nisl magna, et faucibus
                arcu condimentum sed.
              </p>
            </div>
            <img src={tripImage} alt="Image" className="image" />
          </div>
        </div>
      </div>
    );
  }
}
