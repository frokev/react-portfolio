import React, { Component } from "react";
import portfolioImage from "../../assets/portfolio-img.jpg";

export default class PortfolioSlide extends Component {
  render() {
    return (
      <div className="portfolio-slide">
        <h1 className="title">Portfolio</h1>
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
}
