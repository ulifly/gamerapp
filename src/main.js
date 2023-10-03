/* eslint-disable no-console */

const { BrowserWindow, shell } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    icon: 'src/assets/icon.ico',
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile('./src/index.html');
  win.shell = shell;
}

module.exports = { createWindow };
