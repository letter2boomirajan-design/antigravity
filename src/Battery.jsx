import React, { Component } from "react";
import "./Battery.css";
export default class Battery extends Component {
  state = { mobile: this.props.mobile };

  batteryCharging = (id) => {
    this.setState((prevState) => ({
      mobile: prevState.mobile.map((item) =>
        item.id === id && item.batteryPercentage < 100
          ? { ...item, batteryPercentage: item.batteryPercentage + 1 }
          : item
      ),
    }));
  };

  render() {
    return (
      <div className="battery-container">
        <ul className="battery-list">
          {this.state.mobile.map((item) => (
            <li key={item.id} className="battery-card">
              <h3>{item.brand}</h3>
              <span className={`status ${item.status.toLowerCase()}`}>
                {item.status}
              </span>

              {/* Battery */}
              <div className="battery">
                <div
                  className="battery-level"
                  style={{ width: `${item.batteryPercentage}%` }}
                />
              </div>

              <p className="battery-text">{item.batteryPercentage}%</p>

              <button
                className="charge-btn"
                onClick={() => this.batteryCharging(item.id)}
                disabled={item.batteryPercentage >= 100}
              >
                ⚡ Charging
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
