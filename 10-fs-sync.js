import { readFileSync, writeFileSync } from "fs";
console.log("Start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

//writeFileSync("./content/result-sync.txt", `Here is the result: ${first}, ${second}`); //creates or overwrites the file specified. 

writeFileSync(
    "./content/result-sync.txt", 
    `\nHere is the result: ${first}, ${second}`, 
    { flag:"a" }
    ); //Flag A means that the content is APPENDED instead of overwriting. 

console.log("Done with this task");
console.log("Starting the next one");



//The whole code must be served between console logs "start" and "done"... Because it is syncronous. Nothing can happen while that is happening. 
//That is why async is interesting. 