const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  writeJson: () => ipcRenderer.invoke("write-json"),
  readJson: () => ipcRenderer.invoke("read-json"),
});



