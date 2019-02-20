import React, { Component } from "react";
import BgImage from "../../assets/bg-img.jpg";
import SelfieImage from "../../assets/selfie.jpg";
import Icon, { EIcon } from "../../components/Icon";
// @ts-ignore
import * as Typewriter from "react-typewriter";
import TypeWriterSequencer from "../../components/TypeWriterSequencer";
import ReactDOM from "react-dom";

export interface Props {
  children?: React.ReactNode;
}

export interface State {}

export default class HomePage extends Component<Props, State> {
  render() {
    return (
      <div className="HomePage">
        <img src={BgImage} alt="" className="bg-image" />
        <div className="content-wrapper">
          <img
            src={SelfieImage}
            alt="Selfie Portrait"
            className="selfie-rounded"
          />
          <h1 className="title">Software Developer</h1>
          <h2 className="subtitle">
            I can work full stack. Prefer .NET, React and a cup of coffee.
          </h2>
          <TypeWriterSequencer
            className="skill-text"
            repeat={true}
            pauseBeforeEraseMs={3000}
            pauseBeforeTypingMs={1000}
          >
            <Typewriter maxDelay={300} minDelay={100}>
              HTML/CSS/JS
            </Typewriter>
            <Typewriter maxDelay={300} minDelay={100}>
              React
            </Typewriter>
            <Typewriter maxDelay={300} minDelay={100}>
              .NET
            </Typewriter>
          </TypeWriterSequencer>
          <div className="icons-wrapper">
            <Icon icon={EIcon.Facebook} />
            <Icon icon={EIcon.Twitter} />
            <Icon icon={EIcon.LinkedIn} />
            <Icon icon={EIcon.Github} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
}
