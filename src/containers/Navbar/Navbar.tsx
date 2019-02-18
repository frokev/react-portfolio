import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import NavLink from "react-router-dom/NavLink";
import Drawer from "../../components/Drawer/Drawer";

export default class Navbar extends Component<any, any> {
  state = {
    brandName: "Kevin Frostad",
    toggleDrawerAnim: false,
    isDrawerActive: false
  };

  render() {
    let { Buttons, HandleDrawer } = this;

    return (
      <div className="navbar">
        <div className="navbar-background" />
        <i className="drawer-icon" onClick={this.toggleDrawer}>
          menu
        </i>
        <h1 className="brand">{this.state.brandName}</h1>
        <div className="buttons-wrapper">
          <Buttons />
        </div>
        <HandleDrawer />
      </div>
    );
  }

  HandleDrawer = () => {
    let { toggleDrawer, Buttons } = this;
    if (!this.state.isDrawerActive) return null;
    if (this.state.toggleDrawerAnim)
      return (
        <Drawer slideIn onShouldSlideOut={toggleDrawer}>
          <Buttons />
        </Drawer>
      );
    else
      return (
        <Drawer slideOut onShouldSlideOut={toggleDrawer}>
          <Buttons />
        </Drawer>
      );
  };

  toggleDrawer = () => {
    if (!this.state.isDrawerActive) {
      this.setState({
        isDrawerActive: true,
        toggleDrawerAnim: true
      });
      return;
    }
    this.setState({
      toggleDrawerAnim: !this.state.toggleDrawerAnim
    });
  };

  Buttons = () => {
    return (
      <Fragment>
        <NavLink exact to={"/"} className="button">
          Home
        </NavLink>
        <NavLink to={"/about"} className="button">
          About
        </NavLink>
        <NavLink to={"/portfolio"} className="button">
          Portfolio
        </NavLink>
        <NavLink to={"/contact"} className="button">
          Contact
        </NavLink>
      </Fragment>
    );
  };
}
