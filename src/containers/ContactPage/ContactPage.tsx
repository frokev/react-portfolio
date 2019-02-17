import React, { Component } from "react";

export default class ContactPage extends Component {
  render() {
    return (
      <div className="contact-page">
        <div className="content-wrapper">
          <h1 className="page-title">Contact</h1>
          <div className="form-wrapper">
            <div className="input-section">
              <p className="input-title">Email</p>
              <input
                type="email"
                placeholder="your@email.com"
                className="input-field"
              />
            </div>
            <div className="input-section">
              <p className="input-title">Name</p>
              <input
                type="text"
                placeholder="Justin Bieber"
                className="input-field"
              />
            </div>
            <div className="input-section">
              <p className="input-title">Message</p>
              <input
                type="text"
                placeholder="How do you like my latest album?"
                className="message-field"
              />
            </div>
            <button className="submit-buttion" />
          </div>
        </div>
      </div>
    );
  }
}
