import http from "http";


const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("homepage");
    } else if(req.url === "/about"){
        //BLOCKING CODE, SYNCRONOUS: 
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end("About Page");
    } else {
        res.end("Somethign wrong here...");
    }
});


server.listen(8000, () => {
    console.log("Server listening on port 8000...");
});