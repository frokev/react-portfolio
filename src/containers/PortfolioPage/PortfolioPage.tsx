import React, { Component } from "react";
import NavLink from "react-router-dom/NavLink";
import portfolioImg from "../../assets/portfolio-img.jpg";

export default class PortfolioPage extends Component {
  render() {
    return (
      <div className="portfolio-page">
        <div className="content-wrapper">
          <h1 className="page-title">My awesome portfolio</h1>
          <div className="cards-wrapper">
            <NavLink to="/portfolio/post" className="card">
              <div className="image-wrapper">
                <img src={portfolioImg} alt="Portfolio image" />
                <h2 className="card-title">Best project ever</h2>
              </div>
              <div className="paragraph-wrapper">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at porttitor sem.  Aliquam erat volutpat.
                </p>
              </div>
            </NavLink>
            <div className="card">
              <div className="image-wrapper">
                <img src={portfolioImg} alt="Portfolio image" />
                <h2 className="card-title">Best project ever</h2>
              </div>
              <div className="paragraph-wrapper">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at porttitor sem.  Aliquam erat volutpat.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image-wrapper">
                <img src={portfolioImg} alt="Portfolio image" />
                <h2 className="card-title">Best project ever</h2>
              </div>
              <div className="paragraph-wrapper">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at porttitor sem.  Aliquam erat volutpat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
