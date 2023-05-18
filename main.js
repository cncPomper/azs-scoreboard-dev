const { app, BrowserWindow } = require('electron')
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {

  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:3000');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null
    })


  // Create the browser window.
  // win = new BrowserWindow({
  //   width: 800,
  //   height: 600,
  //   webPreferences: {
  //     nodeIntegration: true,
  //     enableRemoteModule:true
  //   }
  // })

  // // and load the index.html of the app.
  // win.webContents.openDevTools()
  // console.log(`file://${__dirname}`)
  // win.loadFile(path.join(__dirname, "scoreboard/public/index.html"))
  // win.loadFile('file://${__dirname}/scoreboard/public/index.html')



  // let heyparent = new BrowserWindow()
  // let heychild = new BrowserWindow({ parent: heyparent })
  // heychild.show()
  // heyparent.show()
}
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})