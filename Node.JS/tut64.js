const fs=require("fs");
let text=fs.readFileSync("hello.txt", "utf-8");
text=text.replace("Read the file ( Backend Js ).....","Hello World , this has been hacked.");
fs.writeFileSync("utsav1.txt",text);
console.log(text); 
console.log("This is a message ");