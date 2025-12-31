import React, { Component } from "react";
export default class Class extends Component {
  state = {
    brand: this.props.brand,
    status: this.props.status,
    batteryPercentage: this.props.batteryPercentage,
  };

  chargeBattery = () => {
    if (this.state.batteryPercentage < 100) {
      this.setState({ batteryPercentage: this.state.batteryPercentage + 1 });
    }
  };

  render() {
    console.log("Class component ------------");
    return (
      <>
        <div className="battery-card">
          <h1 className="battery-title">{this.state.brand}</h1>

          <h2 className="brand">{this.state.status}</h2>

          <div className="battery-container">
            <div
              className="battery-level"
              style={{ width: `${this.state.batteryPercentage}%` }}
            ></div>
          </div>

          <button className="charge-btn" onClick={this.chargeBattery}>
            ⚡ Press to Charge
          </button>

          <h4 className="battery-text">{this.state.batteryPercentage}%</h4>
        </div>
      </>
    );
  }
}



