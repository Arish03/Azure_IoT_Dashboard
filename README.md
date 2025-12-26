# 🌐 Azure IoT Real-Time Monitoring Dashboard

A full-stack, real-time IoT monitoring system built using Azure IoT Hub, Node.js, WebSockets, and React.  
This project simulates IoT devices, streams telemetry securely to Azure, processes live data in a backend server, and visualises it through an interactive web dashboard with alerts, charts, and historical telemetry.

---

## 📌 Project Overview

Modern IoT systems require:
- Real-time data ingestion
- Secure cloud communication
- Live visualisation
- Alerting on abnormal conditions

This project demonstrates an end-to-end Azure IoT architecture using industry-standard tools and best practices.

---

## 🎯 Objectives

- Simulate real-world IoT devices
- Send telemetry securely to Azure IoT Hub
- Consume IoT data from Azure using Event Hub compatible endpoints
- Broadcast data to frontend using WebSockets
- Visualize live telemetry with charts and alerts
- Follow secure coding practices using environment variables

---

## 🚀 Key Features

### 🔄 Real-Time Data Flow
- Live telemetry updates without page refresh
- WebSocket-based communication between backend and frontend

### 📊 Rich Dashboard UI
- Live sensor cards for each device
- Combined multi-sensor line charts
- Rolling telemetry history table with timestamps

### 🚨 Intelligent Alerts
- Threshold-based alerting
- Normal / Warning / Critical states
- Visual color indicators and alert stack

### 🔐 Security Best Practices
- No hard-coded secrets in source code
- `.env` file configuration for credentials
- Git-safe project structure (ignore secrets in .gitignore)

---

## 🧠 System Architecture
```
+-------------------+
| Device Simulator  |
| (Node.js + MQTT)  |
+---------+---------+
          |
          | Telemetry
          v
+-------------------+
| Azure IoT Hub     |
| (Secure Ingestion)|
+---------+---------+
          |
          | Event Hub compatible endpoint
          v
+--------------------------+
| Backend Server (Node.js) |
| - EventHubConsumerClient |
| - Socket.IO              |
+------------+-------------+
          |
          | WebSocket
          v
+--------------------------+
| React Frontend Dashboard |
| - Live Cards             |
| - Charts                 |
| - Alerts & History       |
+--------------------------+
```

---

## 🧱 Project Structure
```
azure-iot-dashboard/
│
├── device/
│   ├── device.js         # IoT device simulator
│   ├── ranges.js         # Sensor value ranges & simulator helpers
│   ├── .env              # Device credentials (gitignored)
│   └── package.json
│
├── azure-iot-backend/
│   ├── server.js         # Backend server (EventHub consumer + Socket.IO)
│   ├── .env              # Event Hub / IoT Hub connection strings (gitignored)
│   └── package.json
│
├── azure-iot-frontend/
│   ├── src/
│   │   ├── App.js        # Dashboard logic and UI
│   │   ├── App.css       # Styling & alerts
│   │   └── socket.js     # WebSocket client
│   └── package.json
│
├── .gitignore
└── README_FULL.md        # This file
```

---

## 🛠️ Technology Stack

### ☁️ Cloud
- Azure IoT Hub
- Event Hub compatible endpoint (for telemetry consumption)

### 📡 Device Layer
- Node.js
- Azure IoT Device SDK
- MQTT protocol (or AMQP/HTTPS if preferred)

### 🖥️ Backend
- Node.js
- Express
- Socket.IO
- Azure Event Hubs SDK (@azure/event-hubs or azure-event-hubs)

### 🌐 Frontend
- React
- Socket.IO Client
- Recharts (for charts)
- CSS (responsive UI)

---

## 🔐 Environment Configuration

Create `.env` files in the indicated folders (these examples show structure — replace placeholders with your real values). Do NOT commit actual credentials.

### device/.env
```env
# Device connection string from Azure IoT Hub (Device -> Shared access key)
DEVICE_CONNECTION_STRING=HostName=your-iothub.azure-devices.net;DeviceId=device001;SharedAccessKey=YOUR_DEVICE_KEY
```

### azure-iot-backend/.env
```env
# Event Hub compatible connection string from your IoT Hub (Built-in endpoints -> Events)
EVENT_HUB_CONNECTION_STRING=Endpoint=sb://your-namespace.servicebus.windows.net/;SharedAccessKeyName=policyName;SharedAccessKey=YOUR_KEY;EntityPath=your-event-hub-name
# Optionally the consumer group and partition settings
EVENT_HUB_CONSUMER_GROUP=$Default
```

---

## ▶️ Prerequisites

- Node.js (14+ recommended)
- npm or yarn
- An Azure subscription with:
  - IoT Hub created
  - A device registered in IoT Hub (for device simulator)
  - Event Hub-compatible endpoint enabled (IoT Hub provides this)

---

## ▶️ How to Run the Application (Local)

1) Run Device Simulator
```bash
cd device
npm install
node device.js
```

2) Run Backend Server
```bash
cd azure-iot-backend
npm install
node server.js
```

3) Run Frontend Dashboard
```bash
cd azure-iot-frontend
npm install
npm start
```

Open your browser at:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 📊 Telemetry Data Model

Example telemetry message produced by the device simulator and forwarded by backend:

```json
{
  "deviceId": "device001",
  "temperature": 36,
  "humidity": 62,
  "pressure": 1001,
  "vibration": 2.4,
  "batteryLevel": 89,
  "timestamp": "2025-01-16T10:30:00Z"
}
```

Fields:
- deviceId: string — unique device identifier
- temperature: number — degrees Celsius
- humidity: number — percent (%)
- pressure: number — hPa
- vibration: number — vibration magnitude (unitless / g)
- batteryLevel: number — percent (%)
- timestamp: ISO 8601 UTC timestamp of the reading

---

## 🚨 Alert Thresholds

| Sensor       | Warning         | Critical        |
|--------------|-----------------|-----------------|
| Temperature  | > 38 °C         | > 40 °C         |
| Humidity     | > 70 %          | > 75 %          |
| Pressure     | < 985 hPa       | < 980 hPa       |
| Vibration    | > 4.5           | > 5.5           |
| Battery      | < 80 %          | < 70 %          |

Alert logic (example):
- Normal: reading within safe range
- Warning: reading meets warning threshold (visual yellow)
- Critical: reading meets critical threshold (visual red and escalated notification)

---

## 🎨 UI Alert States

- 🟢 Normal: Safe operating range  
- 🟡 Warning: Needs attention  
- 🔴 Critical: Immediate action required

The dashboard displays color-coded cards, in-chart markers, and a rolling history table where alert states are highlighted.

---

## 💡 Use Cases

- Smart factory monitoring  
- Predictive maintenance  
- Azure IoT learning & demos  
- Academic projects and prototypes  
- IoT dashboard demonstrations

---

## 🏆 What This Project Demonstrates

- End-to-end Azure IoT workflow  
- Secure device-to-cloud communication  
- Real-time streaming architecture using Event Hubs and WebSockets  
- Integrated frontend + backend streaming dashboard  
- Production-style UI & alert framework with environment-based configuration

---

## 🚀 Future Enhancements

- Persist telemetry in a database (MongoDB / Azure SQL / Cosmos DB) for long-term history and analytics
- Alert notifications via Email / SMS / Teams / Slack
- Multi-device support with device management UI
- Role-based dashboard access and authentication
- Cloud deployment (Azure App Service, Azure Container Instances, Vercel, etc.)
- AI-based anomaly detection and predictive alerts

---

## 👨‍💻 Author

**Arish**  
Software Engineer – Azure IoT & Full Stack  
🇮🇳 India

---

## ⭐ Support

If you found this project helpful, please ⭐ [star the repository on GitHub](https://github.com/Arish03/Azure_IoT_Dashboard) to show your support!

---
```
"# Azure_IoT_Dashboard" 
