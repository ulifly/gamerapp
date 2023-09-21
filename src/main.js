/* eslint-disable no-console */

const { BrowserWindow } = require('electron');
const { shell } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    icon: 'src/assets/icon.ico',
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
    win.webContents.on('will-attach-webview', (event, webPreferences) => {
      webPreferences.enableBlinkFeatures = 'Auxclick';
      delete webPreferences.preload;
    }),
  });

  win.loadFile('./src/index.html');
}
module.exports = { createWindow };
