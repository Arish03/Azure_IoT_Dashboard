# 🌐 Azure IoT Real-Time Monitoring Dashboard

A **full-stack, real-time IoT monitoring system** built using **Azure IoT Hub**, **Node.js**, **WebSockets**, and **React**.  
This project simulates IoT devices, streams telemetry securely to Azure, processes live data in a backend server, and visualises it through an interactive web dashboard with alerts, charts, and history.

---

## 📌 Project Overview

Modern IoT systems require:
- Real-time data ingestion
- Secure cloud communication
- Live visualisation
- Alerting on abnormal conditions

This project demonstrates an **end-to-end Azure IoT architecture** using industry-standard tools and best practices.

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
- WebSocket-based communication

### 📊 Rich Dashboard UI
- Live sensor cards
- Combined multi-sensor line chart
- Rolling telemetry history table

### 🚨 Intelligent Alerts
- Threshold-based alerting
- Normal / Warning / Critical states
- Visual colour indicators

### 🔐 Security Best Practices
- No secrets in source code
- `.env` based configuration
- Git-safe project structure

---

## 🧠 System Architecture

+-------------------+
| Device Simulator |
| (Node.js + MQTT) |
+---------+---------+
|
| Telemetry
v
+-------------------+
| Azure IoT Hub |
| (Secure Ingestion)|
+---------+---------+
|
| Event Hub Stream
v
+--------------------------+
| Backend Server (Node.js) |
| - EventHubConsumerClient |
| - Socket.IO |
+------------+-------------+
|
| WebSocket
v
+--------------------------+
| React Frontend Dashboard |
| - Live Cards |
| - Charts |
| - Alerts & History |
+--------------------------+

---

## 🧱 Project Structure

azure-iot-dashboard/
│
├── device/
│ ├── device.js # IoT device simulator
│ ├── ranges.js # Sensor value ranges
│ ├── .env # Device credentials
│ └── package.json
│
├── azure-iot-backend/
│ ├── server.js # Backend server
│ ├── .env # Event Hub credentials
│ └── package.json
│
├── azure-iot-frontend/
│ ├── src/
│ │ ├── App.js # Dashboard logic
│ │ ├── App.css # Styling & alerts
│ │ └── socket.js # WebSocket client
│ └── package.json
│
├── .gitignore
└── README.md



## 🛠️ Technology Stack

### ☁️ Cloud
- Azure IoT Hub
- Event Hub compatible endpoint

### 📡 Device Layer
- Node.js
- Azure IoT Device SDK
- MQTT protocol

### 🖥️ Backend
- Node.js
- Express
- Socket.IO
- Azure Event Hubs SDK

### 🌐 Frontend
- React
- Socket.IO Client
- Recharts (Charts)
- CSS (Responsive UI)

---

## 🔐 Environment Configuration

### 📄 `device/.env`
```env
DEVICE_CONNECTION_STRING=HostName=xxxx.azure-devices.net;DeviceId=device001;SharedAccessKey=XXXX

---

## `azure-iot-backend/.env`
```env
EVENT_HUB_CONNECTION_STRING=Endpoint=sb://xxxx.servicebus.windows.net/;
SharedAccessKeyName=iothubowner;
SharedAccessKey=XXXX;
EntityPath=xxxx

---

## ▶️ How to Run the Application

### 1️⃣ Run Device Simulator

cd device
npm install
node device.js

### 2️⃣ Backend Server
cd azure-iot-backend
npm install
node server.js

### 3️⃣ Frontend Dashboard
cd azure-iot-frontend
npm install
npm start


Open browser:

http://localhost:3000

## 📊 Telemetry Data Model

{
  "deviceId": "device001",
  "temperature": 36,
  "humidity": 62,
  "pressure": 1001,
  "vibration": 2.4,
  "batteryLevel": 89,
  "timestamp": "2025-01-16T10:30:00Z"
}

---

## 🚨 Alert Thresholds

| Sensor       | Warning         | Critical        |
|---------------|----------------|----------------|
| Temperature   | > 38 °C         | > 40 °C         |
| Humidity      | > 70 %          | > 75 %          |
| Pressure      | < 985 hPa       | < 980 hPa       |
| Vibration     | > 4.5           | > 5.5           |
| Battery       | < 80 %          | < 70 %          |

---

## 🎨 UI Alert States

- 🟢 **Normal:** Safe operating range  
- 🟡 **Warning:** Needs attention  
- 🔴 **Critical:** Immediate action required  

---

## 💡 Use Cases

- Smart factory monitoring  
- Predictive maintenance  
- Azure IoT learning & demos  
- Academic major projects  
- IoT dashboard prototypes  

---

## 🏆 What This Project Demonstrates

- End-to-end **Azure IoT** workflow  
- Secure **device-to-cloud** communication  
- Real-time **streaming architecture**  
- Integrated **frontend + backend** system  
- Production-style **UI & alert framework**  

---

## 🚀 Future Enhancements

- Database integration (**MongoDB / Azure SQL**)  
- Alert notifications (**Email / SMS**)  
- Multi-device support  
- Role-based dashboard access  
- Cloud deployment (**Azure App Service / Vercel**)  
- AI-based anomaly detection  

---

## 👨‍💻 Author

**Arish**  
Software Engineer – Azure IoT & Full Stack  
🇮🇳 India  

---

## ⭐ Support

If you found this project helpful, please ⭐ **star the repository on GitHub** to show your support!

