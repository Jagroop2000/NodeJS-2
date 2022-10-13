const os = require('os');
const path = require('path');

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());

console.log(os.platform());
console.log(os.release());
console.log(os.type());


const a3 = path.extname(__filename)
console.log(a3);