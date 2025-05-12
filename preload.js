const { contextBridge } = require('electron');

// Expose any safe APIs here for future use
contextBridge.exposeInMainWorld('electronAPI', {
  // e.g. getAppVersion: () => app.getVersion()
});