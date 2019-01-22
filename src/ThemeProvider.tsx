import React, { Component } from "react";

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Passing undefined as a Provider value does not cause consuming
// components to use defaultValue.
const ThemeContext = React.createContext({});

// Provides the theme for our App
export class ThemeProvider extends Component {
  state = {
    colours: {
      main: "",
      darkAccent: "",
      darkShade: ""
    }
  };

  render() {
    return (
      <ThemeContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const ThemeConsumer = ThemeContext.Consumer;
