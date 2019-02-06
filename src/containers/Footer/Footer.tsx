import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="content-wrapper">
          <p className="copyright-text">© Kevin Frostad</p>
          <div className="link-wrapper">
            <a href="" className="link">
              Home
            </a>
            <a href="" className="link">
              About
            </a>
            <a href="" className="link">
              Portfolio
            </a>
            <a href="" className="link">
              Contact
            </a>
          </div>
        </div>
      </div>
    );
  }
}
