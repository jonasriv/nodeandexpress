import { readFile } from "fs"; //async version

console.log("started first task");

readFile("./content/first.txt", "utf8", (err, result) => {
    if(err){
        console.log(err);
        return;
    } else {
        console.log(result);
        console.log("completed first task");
    } 
});

console.log("Starting next task");


// last log will appear before the middle one - because the function is asynconous. 
//the function is being offloaded. 