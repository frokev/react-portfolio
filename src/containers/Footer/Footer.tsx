import React, { Component } from "react";
import Container from "../../components/Container";
import NavLink from "react-router-dom/NavLink";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <p className="copyright-text">© Kevin Frostad</p>
          <div className="link-wrapper">
            <NavLink to="/" className="link">
              Home
            </NavLink>
            <NavLink to="/about" className="link">
              About
            </NavLink>
            <NavLink to="/portfolio" className="link">
              Portfolio
            </NavLink>
            <NavLink to="contact" className="link">
              Contact
            </NavLink>
          </div>
        </Container>
      </div>
    );
  }
}
