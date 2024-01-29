const fs = require('fs');
const http = require('http')
const server = http.createServer()


server.on('request', (req, res) => {
    //this is not (1st) streaming way
    /*  fs.readFile("input.txt",(err,data)=>{
      if(err)
      {
          console.error(err)
      } else{
          res.end(data.toString());
      }
     }); */

    // 2nd way streaming way//
    /* const rsStream = fs.createReadStream('input.txt');
    rsStream.on('data', (chunkdata) => {
        res.write(chunkdata);
    })
    rsStream.on('end', () => {
        res.end();
    }) */

    /* 3rd way  to show the data in real time*/
    const rsStream = fs.createReadStream('input.txt');
    rsStream.pipe(res)
});

server.listen(8000, '127.0.0.1');