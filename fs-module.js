const fs = require('fs')


fs.readFile('index.js','utf-8', (err, data) =>{
    console.log(err, data);
})

const a = fs.readFileSync('index.js','utf-8')
console.log(a);


fs.writeFile('file.txt' , "This Is a Data" , () =>{
    console.log("Finished");
})