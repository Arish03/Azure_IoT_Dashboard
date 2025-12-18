require("dotenv").config(); // MUST be first

const { Client, Message } = require("azure-iot-device");
const { Mqtt } = require("azure-iot-device-mqtt");
const ranges = require("./ranges");

// 🔐 Read from .env
const connectionString = process.env.DEVICE_CONNECTION_STRING;

if (!connectionString) {
  throw new Error("DEVICE_CONNECTION_STRING is missing in .env");
}

const client = Client.fromConnectionString(connectionString, Mqtt);

// Generic range generator
function generateInRange(min, max, decimals = 0) {
  const value = Math.random() * (max - min) + min;
  return decimals ? Number(value.toFixed(decimals)) : Math.floor(value);
}

function generateTelemetry() {
  return {
    deviceId: "device001",
    temperature: generateInRange(ranges.temperature.min, ranges.temperature.max),
    humidity: generateInRange(ranges.humidity.min, ranges.humidity.max),
    pressure: generateInRange(ranges.pressure.min, ranges.pressure.max),
    vibration: generateInRange(
      ranges.vibration.min,
      ranges.vibration.max,
      2
    ),
    batteryLevel: generateInRange(
      ranges.batteryLevel.min,
      ranges.batteryLevel.max
    ),
    timestamp: new Date().toISOString()
  };
}

function sendTelemetry() {
  const data = generateTelemetry();
  const message = new Message(JSON.stringify(data));

  console.log("Sending telemetry:", data);

  client.sendEvent(message, (err) => {
    if (err) {
      console.error("Send error:", err.toString());
    } else {
      console.log("Telemetry sent");
    }
  });
}

client.open((err) => {
  if (err) {
    console.error("Connection error:", err.message);
  } else {
    console.log("Device connected to Azure IoT Hub");
    setInterval(sendTelemetry, 5000);
  }
});
