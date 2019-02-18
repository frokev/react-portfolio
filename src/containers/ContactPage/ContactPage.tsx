import React, {
  Component,
  InputHTMLAttributes,
  ChangeEvent,
  FormEvent
} from "react";

export default class ContactPage extends Component {
  state = {
    email: undefined,
    name: undefined,
    message: undefined
  };

  render() {
    return (
      <div className="contact-page">
        <div className="content-wrapper">
          <h1 className="page-title">Contact</h1>
          <form onSubmit={this.handleSubmit} className="form-wrapper">
            <label className="input-section">
              <span className="input-title">Email</span>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={this.state.email}
                onChange={this.handleFormChange}
                className="input-field"
              />
            </label>
            <label className="input-section">
              <span className="input-title">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Justin Bieber"
                className="input-field"
              />
            </label>
            <label className="input-section">
              <span className="input-title">Message</span>
              <textarea
                name="message"
                placeholder="How do you like my latest album?"
                className="message-field"
              />
            </label>
            <input type="submit" value="Send" className="submit-button" />
          </form>
        </div>
      </div>
    );
  }

  handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name == "email")
      this.setState({
        email: event.target.value
      });
    else if (event.target.name == "name")
      this.setState({
        name: event.target.value
      });
    else if (event.target.name == "message")
      this.setState({
        message: event.target.value
      });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
}
