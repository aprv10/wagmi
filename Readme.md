# Wagmi API Server

This is a simple Node.js Express API server built with TypeScript, designed to handle two types of requests on a single POST endpoint: a "Ping Test" and an "Addition Request".

## Table of Contents

* [Features](#features)
* [API Endpoints](#api-endpoints)
* [Setup and Installation](#setup-and-installation)
* [Running the Server](#running-the-server)
* [Load Testing](#load-testing)
* [Deployment (Railway.app)](#deployment-railwayapp)

## Features

* **Single POST Route:** All requests are handled by `/wagmi`.
* **TypeScript:** Type-safe development for robust code.
* **Ping Test:** Responds with server status information.
* **Addition Request:** Calculates the sum of two non-negative numbers, with a sum limit of 100.
* **Error Handling:** Provides clear error messages for invalid input.

## API Endpoints

### `POST /wagmi`

This is the primary endpoint for all operations. The request type is determined by the payload.

#### 1. Ping Test Request

* **Description:** Used to check if the server is alive and get basic server information.
* **Request Body:**
    ```json
    {}
    ```
    (An empty JSON object or no body at all)
* **Success Response (200 OK):**
    ```json
    {
      "message": "wagmi",
      "timestamp": "YYYY-MM-DDTHH:mm:ss.sssZ", // Current server UTC time (ISO 8601)
      "lang": "Node.js" // The server's technology
    }
    ```

#### 2. Addition Request

* **Description:** Adds two non-negative numbers `a` and `b`.
* **Request Body:**
    ```json
    {
      "a": 40,
      "b": 55
    }
    ```
* **Rules & Constraints:**
    * `a` and `b` must be non-negative numbers.
    * The sum `a + b` must be less than or equal to `100`.
* **Success Response (200 OK):**
    ```json
    {
      "result": 95,
      "a": 40,
      "b": 55,
      "status": "success"
    }
    ```
* **Error Response (400 Bad Request):**
    ```json
    {
      "error": "Invalid input"
    }
    ```
    This response is returned if `a` or `b` are missing, not numbers, negative, or if their sum exceeds 100.

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd wagmi-api # or whatever your project folder is named
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    This will install `express`, `body-parser`, `axios` (if included), and all development dependencies like `typescript` and their respective `@types`.

3.  **Compile TypeScript:**
    ```bash
    npm run build
    ```
    This command uses `tsc` (TypeScript compiler) to compile your `src/server.ts` into `dist/server.js`.

## Running the Server

### Development Mode (with `ts-node`)

For local development with automatic recompilation on file changes (if you set up `nodemon` or similar):

```bash
npm run dev
# Server will run on http://localhost:3000 (or specified PORT)
