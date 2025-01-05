
# Electron React JSON Task

## Description
An Electron application integrated with a React frontend for managing JSON files. This app allows users to read and write product data in JSON format. The frontend is built using React, while the backend is powered by Electron to handle file operations.

## Features
- **React Frontend**: Responsive UI built with React.
- **Electron Backend**: Electron handles file I/O (reading and writing JSON files).
- **IPC Communication**: Uses Electron's Inter-Process Communication (IPC) to handle JSON file operations securely.

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/) (Node package manager)
- [Electron](https://www.electronjs.org/) (for backend)

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/miravanisri/Electron_React_Json_Task.git
   ```

2. Navigate to the project directory:
   ```bash
   cd electron-react-json-task
   ```

3. Install dependencies for both `frontend` and `Electron-task`:
   - For `frontend`:
     ```bash
     cd frontend
     npm install
     ```

   - For `Electron-task`:
     ```bash
     cd ../Electron-task
     npm install
     ```

## Usage

### Running Backend (Electron)

To run the Electron app (backend) separately:

1. Navigate to the `Electron-task` directory:
   ```bash
   cd Electron-task
   ```

2. Run Electron:
   ```bash
   npm run electron-start
   ```

   This will start the Electron app and it will wait for communication from the frontend (React app).

### Running Frontend (React)

To run the React frontend separately:

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Run the React development server:
   ```bash
   npm run dev
   ```

   This will start the React app and open it in your default browser, usually at `http://localhost:5173`.

### Workflow

- **Frontend**: The React app will be available at `http://localhost:5173` and will communicate with the Electron backend for reading and writing JSON files.
- **Backend**: The Electron app will handle the file I/O operations, responding to requests from the frontend via IPC (Inter-Process Communication).

### File Operations

- **Write JSON**: The app allows users to write product data to a `product.json` file. The JSON file is saved to the current working directory.
- **Read JSON**: The app can read the `product.json` file and display its contents in the frontend.

### JSON Example:
The following is an example of the data stored in the `product.json` file:
```json
{
  "product_id": 654321,
  "title": "Product A",
  "price": "15000.00",
  "sku": "1307A 0101000"
}
```
## Acknowledgements

- [React](https://reactjs.org/) for the frontend framework.
- [Electron](https://www.electronjs.org/) for creating cross-platform desktop applications.
- [Vite](https://vitejs.dev/) for fast and efficient frontend development.

---
