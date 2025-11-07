# Plutus Backend

Backend API for Plutus - Personal Finance Control System

## Overview

Plutus is a personal finance control system that allows users to track expenses, income, and analyze their financial data through charts and visualizations. The system operates without user registration/login, storing all data locally on the user's device.

## Features

- **Financial Overview**: Complete integrated view of finances including current balance, expense/income charts, recent transactions, and important alerts
- **Financial Balance**: Calculates and displays balance between income and expenses
- **Themed Interface**: Elegant black and gold design
- **Local Storage**: All financial data stored locally on user's device
- **Chart Visualization**: Analytical charts based on registered financial data
- **Income Registration**: Register financial gains without login/registration
- **Expense Registration**: Register expenses without login/registration

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Architecture**: REST API
- **Data Storage**: In-memory (no database persistence)

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       └── internal/       # Internal endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
│   ├── response/           # Response formatting
│   └── validation/         # Validation utilities
├── constants/              # Application constants
├── instances/              # Service instances
├── tests/                  # Global test utilities
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```

### Development

Run the development server:
```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in `.env`).

### Building

Build the project for production:
```bash
npm run build
```

### Production

Start the production server:
```bash
npm start
```

## API Documentation

### Base URL

- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Health Check

```
GET /health
```

Returns server health status.

### API Endpoints

Feature-specific endpoints will be documented as they are implemented.

## Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Code Quality

### Linting

Run ESLint:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

## Architecture Principles

- **No Database**: All data stored in-memory using arrays/objects
- **RESTful Design**: Following REST API best practices
- **Type Safety**: Comprehensive TypeScript typing
- **Validation**: Zod schemas for request validation
- **Error Handling**: Standardized error responses
- **Modular Structure**: Clear separation of concerns

## Contributing

Features are implemented following the project's architectural standards and best practices documented in the knowledge base.

## License

ISC
