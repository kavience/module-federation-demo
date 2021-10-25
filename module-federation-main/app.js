import React, { Component } from "module-federation-lib/react";
import subapp1 from "module-federation-subapp1/index";
import subapp2 from "module-federation-subapp2/index";

const subapps = {
  subapp1,
  subapp2,
};

export default class App extends Component {
  state = {
    subapp: "subapp1",
  };

  handleClick = (subapp) => () => {
    this.setState({
      subapp,
    });
  };

  render() {
    const { subapp } = this.state;
    const Component = subapps[subapp];

    return (
      <div className="main" style={{ display: "flex" }}>
        <div
          className="main-left"
          style={{ width: 200, borderRight: "1px solid" }}
        >
          <h2>this is main protal</h2>
          <p onClick={this.handleClick("subapp1")}>subapp1</p>
          <p onClick={this.handleClick("subapp2")}>subapp2</p>
        </div>
        <div className="main-right" style={{ flex: 1, marginLeft: 20 }}>
          <Component />
        </div>
      </div>
    );
  }
}
