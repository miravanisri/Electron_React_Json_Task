const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL("http://localhost:5173"); // Load React app
});

ipcMain.handle("write-json", async () => {
  const data = {
    product_id: 654321,
    title: "Product A",
    price: "15000.00",
    sku: "1307A 0101000",
  };
  fs.writeFileSync("product.json", JSON.stringify(data, null, 2), "utf-8");
  return "JSON file created successfully.";
});

ipcMain.handle("read-json", async () => {
  const data = fs.readFileSync("product.json", "utf-8");
  return JSON.parse(data);
});
