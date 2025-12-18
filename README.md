# Azure IoT Dashboard

A comprehensive real-time IoT monitoring and analytics dashboard built with Azure services. This project provides a complete solution for collecting, processing, and visualizing IoT device data with intelligent alerting and data-driven insights.

## 📋 Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Environment Variables](#environment-variables)
- [How to Run](#how-to-run)
- [Alert Thresholds](#alert-thresholds)
- [Use Cases](#use-cases)
- [Future Enhancements](#future-enhancements)

---

## ✨ Features

### Core Monitoring
- **Real-time Data Visualization**: Live streaming of IoT device metrics with instant dashboard updates
- **Multi-Device Support**: Monitor multiple IoT devices simultaneously with individual and aggregate analytics
- **Historical Data Analysis**: Store and analyze historical telemetry data for trend analysis and reporting
- **Custom Dashboards**: Create personalized dashboards with widget customization and filtering options

### Analytics & Insights
- **Predictive Analytics**: Machine learning-based anomaly detection and forecasting
- **Data Aggregation**: Automatic aggregation and summarization of device metrics
- **Performance Metrics**: Track device health, uptime, and operational efficiency
- **Export Capabilities**: Export data in multiple formats (CSV, JSON, Excel)

### Alerting & Notifications
- **Intelligent Alerting**: Configurable thresholds with multi-level severity alerts
- **Multi-Channel Notifications**: Email, SMS, Webhook, and in-app notifications
- **Alert Management**: Acknowledge, snooze, and manage alerts with audit trail
- **Alert Rules Engine**: Complex rule-based alerting with logical operators

### Security & Compliance
- **Role-Based Access Control (RBAC)**: Fine-grained user permission management
- **Data Encryption**: End-to-end encryption for data at rest and in transit
- **Audit Logging**: Complete audit trail of all system activities
- **Compliance Ready**: Support for industry standards (GDPR, HIPAA, SOC 2)

---

## 🏗️ Architecture

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        IoT Devices Layer                         │
│  (Sensors, Temperature Monitors, Pressure Sensors, etc.)         │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                  Azure IoT Hub (Connection Layer)                │
│  - Device Registration & Authentication                          │
│  - Device-to-Cloud & Cloud-to-Device Messaging                  │
└────────────────────┬────────────────────────────────────────────┘
                     │
         ┌───────────┼───────────┐
         ▼           ▼           ▼
    ┌────────┐  ┌──────────┐  ┌──────────┐
    │ Stream │  │ Blob     │  │ Event    │
    │ Analytics│ Storage  │  │ Grid     │
    └───┬────┘  └──────────┘  └──────────┘
        │
        ▼
┌─────────────────────────────────────────────────────────────────┐
│              Data Processing & Storage Layer                     │
│  - Cosmos DB (Time Series Data)                                 │
│  - Azure SQL Database (Metadata & Configuration)                │
│  - Azure Cache for Redis (Session & Real-time Data)             │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Business Logic Layer                         │
│  - Azure Functions (Serverless Computing)                        │
│  - Logic Apps (Workflow Orchestration)                          │
│  - API Management (REST API Gateway)                            │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Presentation Layer                             │
│  - Web Dashboard (React/Angular)                                 │
│  - Mobile App (iOS/Android)                                     │
│  - Power BI Reports & Visualizations                            │
└─────────────────────────────────────────────────────────────────┘
```

### Component Breakdown

| Component | Purpose | Technology |
|-----------|---------|-----------|
| **IoT Hub** | Device connectivity and messaging | Azure IoT Hub |
| **Stream Analytics** | Real-time data processing | Azure Stream Analytics |
| **Time Series DB** | High-frequency data storage | Cosmos DB / Influx DB |
| **Analytics DB** | Analytical queries and reporting | Azure SQL Database |
| **Cache Layer** | Session and frequently accessed data | Azure Cache for Redis |
| **API Gateway** | REST API management and rate limiting | Azure API Management |
| **Serverless Compute** | Business logic execution | Azure Functions |
| **Dashboard** | User interface | React/Angular/Vue.js |
| **Notifications** | Alert delivery | SendGrid, Twilio |

---

## 📁 Project Structure

```
Azure_IoT_Dashboard/
├── docs/                           # Documentation files
│   ├── ARCHITECTURE.md
│   ├── API_REFERENCE.md
│   ├── DEPLOYMENT_GUIDE.md
│   └── TROUBLESHOOTING.md
│
├── src/
│   ├── backend/
│   │   ├── api/
│   │   │   ├── controllers/        # API endpoint handlers
│   │   │   ├── models/             # Data models and schemas
│   │   │   ├── routes/             # Route definitions
│   │   │   ├── middleware/         # Authentication, validation, etc.
│   │   │   └── services/           # Business logic services
│   │   │
│   │   ├── functions/              # Azure Functions
│   │   │   ├── data-processor/
│   │   │   ├── alert-handler/
│   │   │   ├── report-generator/
│   │   │   └── scheduler-jobs/
│   │   │
│   │   ├── database/
│   │   │   ├── migrations/         # Database migrations
│   │   │   ├── schemas/            # Database schemas
│   │   │   └── seeders/            # Test data seeders
│   │   │
│   │   ├── config/                 # Configuration files
│   │   │   ├── app.config.js
│   │   │   ├── database.config.js
│   │   │   └── azure.config.js
│   │   │
│   │   └── app.js                  # Main application entry point
│   │
│   ├── frontend/
│   │   ├── public/                 # Static assets
│   │   ├── src/
│   │   │   ├── components/         # Reusable UI components
│   │   │   ├── pages/              # Page components
│   │   │   ├── services/           # API client services
│   │   │   ├── store/              # State management
│   │   │   ├── styles/             # Global styles
│   │   │   ├── utils/              # Utility functions
│   │   │   └── App.js
│   │   ├── package.json
│   │   └── .env.example
│   │
│   └── mobile/                     # Mobile application (React Native)
│       ├── src/
│       │   ├── components/
│       │   ├── screens/
│       │   ├── navigation/
│       │   └── store/
│       └── package.json
│
├── tests/
│   ├── unit/                       # Unit tests
│   ├── integration/                # Integration tests
│   └── e2e/                        # End-to-end tests
│
├── scripts/
│   ├── deploy.sh                   # Deployment script
│   ├── migrate.sh                  # Database migration script
│   ├── seed-data.sh                # Data seeding script
│   └── init-azure.sh               # Azure resources initialization
│
├── .github/
│   └── workflows/                  # CI/CD workflows
│       ├── build.yml
│       ├── test.yml
│       └── deploy.yml
│
├── .env.example                    # Environment variables template
├── .dockerignore
├── .gitignore
├── docker-compose.yml              # Docker composition for local development
├── Dockerfile                      # Container image definition
├── package.json                    # Node.js dependencies
├── package-lock.json
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose | Version |
|-----------|---------|---------|
| **Node.js** | Runtime environment | 18.x LTS |
| **Express.js** | Web framework | ^4.18.0 |
| **TypeScript** | Static typing | ^4.9.0 |
| **Azure SDK** | Azure services integration | Latest |
| **Sequelize/TypeORM** | ORM | ^6.0.0 |
| **Socket.io** | Real-time communication | ^4.5.0 |
| **JWT** | Authentication | ^9.0.0 |
| **Joi** | Data validation | ^17.0.0 |

### Frontend
| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI framework | 18.x |
| **TypeScript** | Static typing | ^4.9.0 |
| **Redux Toolkit** | State management | ^1.9.0 |
| **Axios** | HTTP client | ^1.3.0 |
| **Chart.js / Recharts** | Data visualization | Latest |
| **Material-UI** | UI component library | ^5.0.0 |
| **React Router** | Navigation | ^6.0.0 |
| **WebSocket** | Real-time updates | Native |

### Cloud Services (Azure)
| Service | Purpose |
|---------|---------|
| **Azure IoT Hub** | Device connectivity and messaging |
| **Azure Stream Analytics** | Real-time data processing |
| **Azure Cosmos DB** | NoSQL database for time-series data |
| **Azure SQL Database** | Relational database |
| **Azure App Service** | Backend hosting |
| **Azure Static Web Apps** | Frontend hosting |
| **Azure Functions** | Serverless computing |
| **Azure API Management** | API gateway |
| **Azure Logic Apps** | Workflow automation |
| **Azure Key Vault** | Secrets management |
| **Azure Monitor** | Monitoring and logging |
| **Azure Application Insights** | Application performance monitoring |
| **SendGrid** | Email notifications |
| **Twilio** | SMS notifications |

### DevOps & Tools
| Tool | Purpose |
|------|---------|
| **Docker** | Containerization |
| **Docker Compose** | Multi-container orchestration |
| **GitHub Actions** | CI/CD pipeline |
| **Jest** | Unit testing framework |
| **Mocha/Chai** | Integration testing |
| **ESLint** | Code quality |
| **Prettier** | Code formatting |
| **SonarQube** | Code analysis |

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Application
NODE_ENV=development
PORT=3000
APP_NAME=Azure IoT Dashboard
LOG_LEVEL=info

# Azure Configuration
AZURE_SUBSCRIPTION_ID=your_subscription_id
AZURE_RESOURCE_GROUP=your_resource_group
AZURE_IOT_HUB_CONNECTION_STRING=your_iot_hub_connection_string
AZURE_IOT_HUB_NAME=your_iot_hub_name
AZURE_COSMOS_DB_CONNECTION_STRING=your_cosmos_db_connection_string
AZURE_COSMOS_DB_DATABASE=iot_dashboard
AZURE_SQL_CONNECTION_STRING=Server=your_server;Database=iot_dashboard;User Id=sa;Password=your_password;
AZURE_STORAGE_ACCOUNT_NAME=yourstorageaccount
AZURE_STORAGE_ACCOUNT_KEY=your_storage_account_key
AZURE_REDIS_CACHE_CONNECTION_STRING=your_redis_connection_string
AZURE_APP_INSIGHTS_KEY=your_app_insights_instrumentation_key
AZURE_KEY_VAULT_URL=https://your_keyvault.vault.azure.net/

# Authentication
JWT_SECRET=your_jwt_secret_key_change_in_production
JWT_EXPIRATION=7d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRATION=30d

# Database
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=your_password
DATABASE_NAME=iot_dashboard

# Email Configuration (SendGrid)
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@yourdomain.com
SENDGRID_FROM_NAME=Azure IoT Dashboard

# SMS Configuration (Twilio)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890

# Webhook Configuration
WEBHOOK_SECRET=your_webhook_secret
WEBHOOK_TIMEOUT=30000

# Frontend
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_SOCKET_URL=http://localhost:3000
REACT_APP_APP_NAME=Azure IoT Dashboard
REACT_APP_ENVIRONMENT=development

# Monitoring & Logging
SENTRY_DSN=your_sentry_dsn
DATADOG_API_KEY=your_datadog_api_key

# Feature Flags
ENABLE_PREDICTIVE_ANALYTICS=true
ENABLE_ADVANCED_REPORTING=true
ENABLE_MOBILE_APP=true
```

---

## 🚀 How to Run

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Docker and Docker Compose (for containerized setup)
- Azure CLI installed and configured
- Git

### Local Development Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/Arish03/Azure_IoT_Dashboard.git
cd Azure_IoT_Dashboard
```

#### 2. Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd src/frontend
npm install
cd ../../
```

#### 3. Configure Environment Variables
```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file with your Azure credentials and configuration
nano .env
```

#### 4. Database Setup
```bash
# Run database migrations
npm run migrate

# (Optional) Seed test data
npm run seed
```

#### 5. Run the Application

##### Option A: Traditional Method
```bash
# Terminal 1 - Start Backend Server
npm run dev

# Terminal 2 - Start Frontend Development Server
cd src/frontend
npm start
```

##### Option B: Docker Compose
```bash
# Build and run all services
docker-compose up --build

# Backend will be available at http://localhost:3000
# Frontend will be available at http://localhost:3000
```

#### 6. Access the Dashboard
- **Web Dashboard**: http://localhost:3000
- **API Documentation**: http://localhost:3000/api/docs
- **Health Check**: http://localhost:3000/health

### Production Deployment

#### Azure Deployment via ARM Template
```bash
# Initialize Azure resources
./scripts/init-azure.sh

# Deploy to Azure App Service
az webapp deployment source config-zip \
  --resource-group <resource-group> \
  --name <app-service-name> \
  --src-path deployment.zip
```

#### Docker Deployment
```bash
# Build Docker image
docker build -t iot-dashboard:latest .

# Run container
docker run -p 3000:3000 \
  --env-file .env \
  iot-dashboard:latest
```

### Kubernetes Deployment
```bash
# Create namespace
kubectl create namespace iot-dashboard

# Apply Kubernetes manifests
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secrets.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# Verify deployment
kubectl get pods -n iot-dashboard
kubectl get svc -n iot-dashboard
```

---

## 🚨 Alert Thresholds

The system uses predefined and customizable alert thresholds to monitor device health and data anomalies:

### Default Alert Thresholds

#### Temperature Monitoring
| Alert Level | Condition | Threshold | Action |
|------------|-----------|-----------|--------|
| **Critical** | Temperature exceeds safe operating range | > 80°C or < -10°C | Immediate notification, Email + SMS |
| **Warning** | Temperature approaching limits | 70-80°C or -5 to -10°C | Email notification |
| **Info** | Temperature change detected | ±5°C variance in 5 minutes | Dashboard alert |

#### Pressure Monitoring
| Alert Level | Condition | Threshold | Action |
|------------|-----------|-----------|--------|
| **Critical** | Pressure exceeds safety limits | > 150 PSI or < 5 PSI | Immediate notification, Email + SMS |
| **Warning** | Pressure elevated | 120-150 PSI | Email notification |
| **Info** | Pressure variance | ±10 PSI in 10 minutes | Dashboard alert |

#### Device Health
| Alert Level | Condition | Threshold | Action |
|------------|-----------|-----------|--------|
| **Critical** | Device offline | No data for 10 minutes | Immediate webhook, Email |
| **Warning** | Device unresponsive | No data for 5 minutes | Email notification |
| **Info** | Battery low | Battery < 20% | Dashboard notification |

#### System Performance
| Alert Level | Condition | Threshold | Action |
|------------|-----------|-----------|--------|
| **Critical** | High error rate | > 5% in last hour | Immediate alert, PagerDuty integration |
| **Warning** | Elevated latency | > 5 seconds average | Email notification |
| **Info** | Memory usage high | > 80% on server | Dashboard alert |

### Custom Alert Configuration

Users can create custom alerts with the following operators:
- **Comparison**: `>`, `<`, `=`, `!=`, `>=`, `<=`
- **Logical**: `AND`, `OR`, `NOT`
- **Aggregation**: `AVG`, `SUM`, `MAX`, `MIN`, `COUNT`
- **Time Windows**: 1m, 5m, 15m, 1h, 1d

Example Custom Alert:
```json
{
  "name": "High Temperature and Pressure",
  "condition": "(temperature > 75) AND (pressure > 120)",
  "severity": "warning",
  "timeWindow": "5m",
  "actions": ["email", "webhook"],
  "enabled": true
}
```

---

## 📱 Use Cases

### 1. Industrial IoT (IIoT) Monitoring
Monitor manufacturing equipment, assembly lines, and industrial processes in real-time:
- **Temperature & Humidity Monitoring**: Ensure optimal conditions in warehouses and production facilities
- **Equipment Performance Tracking**: Track uptime, efficiency, and maintenance needs
- **Predictive Maintenance**: Identify equipment failures before they occur
- **Compliance Reporting**: Generate audit trails for regulatory compliance

### 2. Smart Building Management
Manage building infrastructure and optimize energy consumption:
- **HVAC Monitoring**: Real-time temperature, humidity, and air quality control
- **Energy Management**: Track and optimize power consumption by zone
- **Security Integration**: Monitor access points and security systems
- **Occupancy Analytics**: Understand building usage patterns

### 3. Healthcare & Medical Devices
Monitor patient vitals and medical equipment in real-time:
- **Patient Monitoring**: Track vital signs with instant alerts for critical conditions
- **Medical Equipment Status**: Monitor ICU equipment, ventilators, and monitors
- **Asset Tracking**: Locate and track medical equipment and supplies
- **Compliance**: Meet HIPAA and healthcare data privacy requirements

### 4. Environmental Monitoring
Track environmental conditions and natural resources:
- **Weather Station Data**: Collect and analyze meteorological data
- **Air Quality Monitoring**: Real-time air pollution and quality tracking
- **Water Quality Monitoring**: Monitor water treatment plants and natural water bodies
- **Soil Sensors**: Agricultural and environmental soil condition monitoring

### 5. Supply Chain & Logistics
Optimize logistics and supply chain operations:
- **Shipment Tracking**: Real-time GPS and environmental condition monitoring
- **Cold Chain Management**: Maintain and verify temperature-controlled logistics
- **Inventory Monitoring**: Track inventory levels and location in real-time
- **Route Optimization**: Analyze and optimize delivery routes

### 6. Smart Agriculture
Enhance agricultural productivity with IoT monitoring:
- **Soil Monitoring**: Moisture, pH, and nutrient level tracking
- **Crop Health**: Monitor plant growth and disease indicators
- **Weather Integration**: Correlate weather data with crop performance
- **Irrigation Optimization**: Automated irrigation based on soil conditions

### 7. Energy Management
Monitor and optimize energy infrastructure:
- **Smart Grid Monitoring**: Real-time power distribution and consumption tracking
- **Solar Panel Efficiency**: Monitor renewable energy generation
- **Building Energy Efficiency**: Identify energy waste and optimization opportunities
- **Demand Forecasting**: Predict energy demand for better resource allocation

---

## 🔮 Future Enhancements

### Phase 1: Advanced Analytics (Q1 2026)
- [ ] Machine Learning-based Anomaly Detection
- [ ] Predictive Maintenance with ML Models
- [ ] Advanced Data Visualization with 3D Charts
- [ ] Natural Language Processing for Insights
- [ ] Advanced Forecasting Algorithms

### Phase 2: Extended Integrations (Q2 2026)
- [ ] Salesforce Integration
- [ ] SAP Integration
- [ ] Slack & Microsoft Teams Notifications
- [ ] Power BI Advanced Reports
- [ ] Tableau Dashboard Integration

### Phase 3: Mobile & Cross-Platform (Q3 2026)
- [ ] iOS Mobile App
- [ ] Android Mobile App
- [ ] Progressive Web App (PWA)
- [ ] Offline Mode Support
- [ ] Mobile Push Notifications

### Phase 4: Edge Computing (Q4 2026)
- [ ] Azure IoT Edge Support
- [ ] Local Data Processing
- [ ] Edge ML Models
- [ ] Offline Data Synchronization
- [ ] Bandwidth Optimization

### Phase 5: AI & Automation (Q1 2027)
- [ ] Azure OpenAI Integration
- [ ] Chatbot for Dashboard Assistance
- [ ] Automated Report Generation
- [ ] Smart Recommendations
- [ ] Automated Troubleshooting

### Phase 6: Enterprise Features (Q2 2027)
- [ ] Multi-tenant Support
- [ ] Advanced RBAC & Fine-grained Permissions
- [ ] Single Sign-On (SSO) Integration
- [ ] Multi-factor Authentication (MFA)
- [ ] Advanced Audit Logging & Compliance

### Phase 7: Performance & Scalability (Q3 2027)
- [ ] Distributed Caching
- [ ] Database Optimization
- [ ] Microservices Architecture
- [ ] Horizontal Auto-scaling
- [ ] Performance Benchmarking

### Phase 8: Advanced Features (Q4 2027)
- [ ] Digital Twin Technology
- [ ] Augmented Reality (AR) Device Visualization
- [ ] Advanced Data Export Formats
- [ ] Custom Scripting Engine
- [ ] Webhook & API Marketplace

---

## 📖 Documentation

For more detailed information, please refer to:

- **[Architecture Documentation](./docs/ARCHITECTURE.md)** - Detailed system architecture
- **[API Reference](./docs/API_REFERENCE.md)** - Complete API documentation
- **[Deployment Guide](./docs/DEPLOYMENT_GUIDE.md)** - Step-by-step deployment instructions
- **[Troubleshooting Guide](./docs/TROUBLESHOOTING.md)** - Common issues and solutions

---

## 🤝 Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the project's style guide and all tests pass before submitting a PR.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🆘 Support

For support, please:

1. Check the [Troubleshooting Guide](./docs/TROUBLESHOOTING.md)
2. Open an issue on GitHub
3. Contact the development team at support@example.com

---

## 👨‍💻 Authors

- **Arish Kumar** - *Initial work* - [GitHub](https://github.com/Arish03)

---

## 📞 Contact & Social

- **Email**: arish@example.com
- **GitHub**: [@Arish03](https://github.com/Arish03)
- **LinkedIn**: [Arish Kumar](https://linkedin.com/in/arish)
- **Twitter**: [@ArIsh_Dev](https://twitter.com/arish_dev)

---

## 🙏 Acknowledgments

- Azure IoT Hub documentation and community
- Open-source libraries and frameworks used in this project
- Contributors and testers who have helped improve the project

---

**Last Updated**: 2025-12-18 11:40:28 UTC

**Version**: 1.0.0
