import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import NavLink from "react-router-dom/NavLink";

interface IProps {
  children?: React.ReactNode;
}

interface IState {
  drawerState: number;
  brandName: string;
}

enum DrawerState {
  Initial = 1,
  SlideIn = 2,
  SlideOut = 3
}

export default class Navbar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      drawerState: DrawerState.Initial,
      brandName: "Kevin Frostad"
    };
  }

  render() {
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

        <Drawer
          drawerState={this.state.drawerState}
          toggleDrawer={this.toggleDrawer}
        >
          <Buttons />
        </Drawer>
      </div>
    );
  }

  toggleDrawer = () => {
    let drawerState = DrawerState.Initial;
    switch (this.state.drawerState) {
      case DrawerState.Initial: {
        drawerState = DrawerState.SlideIn;
        break;
      }
      case DrawerState.SlideIn: {
        drawerState = DrawerState.SlideOut;
        break;
      }
      case DrawerState.SlideOut: {
        drawerState = DrawerState.SlideIn;
      }
    }

    this.setState((state) => ({
      drawerState: drawerState
    }));
  };
}

const Buttons = (props: any) => {
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

const Drawer = (props: any) => {
  let toggleDrawer: Function = props.toggleDrawer;
  let drawerState: DrawerState = props.drawerState;

  return (
    <div className="drawer">
      <DrawerMenu drawerState={drawerState}>{props.children}</DrawerMenu>
      <DrawerTapoutArea drawerState={drawerState} toggleDrawer={toggleDrawer} />
    </div>
  );
};

const DrawerMenu = (props: any) => {
  if (props.drawerState === DrawerState.SlideIn) {
    return (
      <div className="drawer-menu animated slideInLeft">{props.children}</div>
    );
  } else if (props.drawerState === DrawerState.SlideOut)
    return (
      <div className="drawer-menu animated slideOutLeft">{props.children}</div>
    );
  else return <div />;
};

const DrawerTapoutArea = (props: any) => {
  return (
    <>
      {props.drawerState === DrawerState.SlideIn ? (
        <div className="drawer-tapout-area" onClick={props.toggleDrawer} />
      ) : null}
    </>
  );
};
