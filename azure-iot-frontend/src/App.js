import { useEffect, useState } from "react";
import socket from "./socket";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import "./App.css";

/* ---------------- THRESHOLDS ---------------- */
const THRESHOLDS = {
  temperature: { warning: 30, critical: 35 },
  humidity: { warning: 70, critical: 75 },
  pressure: { warning: 985, critical: 980, inverse: true },
  vibration: { warning: 4.5, critical: 5.5 },
  battery: { warning: 80, critical: 70, inverse: true }
};

/* ----------- ALERT STATUS HELPER ------------ */
function getStatus(value, config) {
  if (config.inverse) {
    if (value <= config.critical) return "critical";
    if (value <= config.warning) return "warning";
  } else {
    if (value >= config.critical) return "critical";
    if (value >= config.warning) return "warning";
  }
  return "normal";
}

/* ---------------- MAIN APP ------------------ */
function App() {
  const [latest, setLatest] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    socket.on("iot-data", (data) => {
      const entry = {
        time: new Date().toLocaleTimeString(),
        temperature: data.temperature,
        humidity: data.humidity,
        pressure: data.pressure,
        vibration: data.vibration,
        battery: data.batteryLevel
      };

      setLatest(data);
      setHistory((prev) => [...prev.slice(-19), entry]); // keep last 20
    });

    return () => socket.off("iot-data");
  }, []);

  return (
    <div className="container">
      <h1>Azure IoT Real-Time Dashboard</h1>

      {/* LIVE STATUS CARDS */}
      {latest && (
        <div className="grid">
          <Card
            title="🌡 Temperature"
            value={`${latest.temperature} °C`}
            status={getStatus(latest.temperature, THRESHOLDS.temperature)}
          />
          <Card
            title="💧 Humidity"
            value={`${latest.humidity} %`}
            status={getStatus(latest.humidity, THRESHOLDS.humidity)}
          />
          <Card
            title="📈 Pressure"
            value={`${latest.pressure} hPa`}
            status={getStatus(latest.pressure, THRESHOLDS.pressure)}
          />
          <Card
            title="⚙️ Vibration"
            value={`${latest.vibration}`}
            status={getStatus(latest.vibration, THRESHOLDS.vibration)}
          />
          <Card
            title="🔋 Battery"
            value={`${latest.batteryLevel} %`}
            status={getStatus(latest.batteryLevel, THRESHOLDS.battery)}
          />
        </div>
      )}

      {/* COMBINED LINE CHART */}
      <div className="chart-box">
        <h2>📈 Live Telemetry Graph</h2>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={history}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#e74c3c" />
            <Line type="monotone" dataKey="humidity" stroke="#3498db" />
            <Line type="monotone" dataKey="pressure" stroke="#2ecc71" />
            <Line type="monotone" dataKey="vibration" stroke="#9b59b6" />
            <Line type="monotone" dataKey="battery" stroke="#f1c40f" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* HISTORY TABLE */}
      <div className="history-box">
        <h2>🕒 Telemetry History</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Temp</th>
              <th>Humidity</th>
              <th>Pressure</th>
              <th>Vibration</th>
              <th>Battery</th>
            </tr>
          </thead>
          <tbody>
            {history
              .slice()
              .reverse()
              .map((row, index) => (
                <tr key={index}>
                  <td>{row.time}</td>
                  <td>{row.temperature}</td>
                  <td>{row.humidity}</td>
                  <td>{row.pressure}</td>
                  <td>{row.vibration}</td>
                  <td>{row.battery}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------------- CARD ---------------- */
function Card({ title, value, status }) {
  return (
    <div className={`card ${status}`}>
      <h3>{title}</h3>
      <p>{value}</p>
      {status !== "normal" && (
        <span className={`alert-text ${status}`}>
          {status.toUpperCase()}
        </span>
      )}
    </div>
  );
}

export default App;
