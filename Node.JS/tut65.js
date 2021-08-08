// Asychronous or Non-Blocking Execution : Described 

const fs=require("fs");
fs.readFile("hello.txt", "utf-8",(err, data)=>{
   
    if (err) throw err;
    console.log( err,data);
});

console.log("This is a message ");