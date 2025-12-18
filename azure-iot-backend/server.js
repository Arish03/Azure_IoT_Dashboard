require("dotenv").config(); // 👈 MUST be first

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { EventHubConsumerClient } = require("@azure/event-hubs");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// 🔐 Read from .env
const connectionString = process.env.EVENT_HUB_CONNECTION_STRING;

if (!connectionString) {
  throw new Error("EVENT_HUB_CONNECTION_STRING is missing in .env");
}

const consumerClient = new EventHubConsumerClient(
  "$Default",
  connectionString
);

consumerClient.subscribe({
  processEvents: async (events) => {
    for (const event of events) {
      console.log("Telemetry received:", event.body);
      io.emit("iot-data", event.body); // send to React
    }
  },
  processError: async (err) => {
    console.error("Error:", err.message);
  }
});

server.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
  console.log("Listening for IoT telemetry...");
});
