import { readFile, writeFile } from "fs";

// this will be async code - in contrast to the writeFile stuff in the fs-sync module. 
console.log("Start");
readFile("./content/first.txt", "utf8", (err,result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result); //this will be the content of the read text-file.
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            "./content/result-async.txt", 
            `Here is the result: ${first}, ${second}`, (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log("done with this task");
            }
            );

    })
});
console.log("Starting next task");