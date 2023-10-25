# node.js
## 1.node runs on a server not a browser, backend instead of frontend
## 2.the console is in the terminal window
## 3.global object instead of window object
## 4.There are some common core modules
## 5.Use 'require' statement to import instead of 'import' (CommonJS module instead of ES6 module)
### ex: const os = require('os);
#### console.log(os.homedir())
#### console.log(os.version())
#### console.log(os.type())

### some variable that we can call directly from terminal
#### console.log(__dirname)
#### console.log(__filename)

### path
#### console(path.dirname(_filename))
#### console(path.parse(_filename))
## 6. missing some JS APIs like fetch
