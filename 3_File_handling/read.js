const fs=require('fs');

// sync process
const result=fs.readFileSync('./context.txt','utf8');
console.log(result);

// async process

fs.readFile('./context.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else console.log(data);
})

