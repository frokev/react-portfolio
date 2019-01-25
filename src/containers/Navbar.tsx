import React, { Component } from "react";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img src="" className="drawer-icon" />
        <h1 className="brand">Kevin Frostad</h1>
        <div className="buttons-wrapper">
          <button>Home</button>
          <button>About</button>
          <button>Portfolio</button>
          <button>Contact</button>
        </div>
      </div>
    );
  }
}
