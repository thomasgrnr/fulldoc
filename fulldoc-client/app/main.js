// app/main.js
const {app, BrowserWindow} = require('electron');

var mainWindow = null;

console.log(__dirname);

var createWindow = function () {
    mainWindow = new BrowserWindow({ width: 1000, height: 800 });
    mainWindow.loadURL('file://' + __dirname + '/static/index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
};

app.on('ready', createWindow);

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});
