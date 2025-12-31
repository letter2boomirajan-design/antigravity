import { useEffect, useState } from "react";
import "./Laptop.css";

export default function BatteryWidget() {
  const [battery, setBattery] = useState({
    level: 0,
    charging: false
  });
  const [dark, setDark] = useState(true);

  useEffect(() => {
    let manager;

    const update = () => {
      setBattery({
        level: Math.round(manager.level * 100),
        charging: manager.charging
      });
    };

    navigator.getBattery().then((b) => {
      manager = b;
      update();
      b.addEventListener("levelchange", update);
      b.addEventListener("chargingchange", update);
    });

    return () => {
      if (manager) {
        manager.removeEventListener("levelchange", update);
        manager.removeEventListener("chargingchange", update);
      }
    };
  }, []);

  return (
    <div className={`widget ${dark ? "dark" : "light"}`}>
      {/* Header */}
      <div className="header">
        <h3>Battery</h3>
        <button onClick={() => setDark(!dark)}>
          {dark ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Battery SVG */}
      <div className="battery-icon">
        <svg viewBox="0 0 120 60">
          <rect x="2" y="12" width="100" height="36" rx="6" />
          <rect x="104" y="22" width="10" height="16" rx="3" />
          <rect
            className={`battery-fill ${battery.charging ? "charging" : ""}`}
            x="6"
            y="16"
            width={(battery.level / 100) * 92}
            height="28"
            rx="4"
          />
        </svg>

        {/* Charging waves */}
        {battery.charging && <div className="waves"></div>}
      </div>

      {/* Info */}
      <div className="info">
        <span className="percent">{battery.level}%</span>
        <span className={`status ${battery.charging ? "on" : "off"}`}>
          {battery.charging ? "⚡ Charging" : "🔌 Unplugged"}
        </span>
      </div>
    </div>
  );
}
