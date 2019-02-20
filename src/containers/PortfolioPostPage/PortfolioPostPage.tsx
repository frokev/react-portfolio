import React, { Component } from "react";
import Container from "./../../components/Container";
import NavLink from "react-router-dom/NavLink";

export default class PortfolioPostPage extends Component {
  render() {
    return (
      <div className="PortfolioPostPage">
        <Container>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to="/portfolio" className="link">
                  Portfolio
                </NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Post
              </li>
            </ol>
          </nav>
        </Container>
      </div>
    );
  }
}
