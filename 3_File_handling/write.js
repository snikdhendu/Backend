const fs=require('fs');
const { writeFile } = require('fs/promises');

// fs.writeFileSync('context.txt','Hello World!');

fs.writeFile('context.txt', 'Hello World!',(err)=>{})


// so there is basically two method one is writeFileSync  and another one is writeFile 