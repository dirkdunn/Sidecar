const System = require('./modules/system');

System.listCurrentDirectory().then(value => {
    console.log("Current Directory: ", value);
})
// console.log("File: ", System.readFile("example-project/index.html"));