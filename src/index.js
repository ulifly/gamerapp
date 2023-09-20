const { app } = require('electron');
const { shell } = require('electron');
const { createWindow } = require('./main');

app.whenReady().then(createWindow);
app.allowRendererProcessReuse = false;

module.exports = { shell };
