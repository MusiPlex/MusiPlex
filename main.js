const { app, BrowserWindow } = require('electron');

var createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 2560,
    height: 1440
  });

  mainWindow.loadFile('index.html');
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});