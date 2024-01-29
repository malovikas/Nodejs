const fs=require("fs");
//creating new folder
fs.mkdir('asyncpra',(err)=>{
    console.log("Practice of Asynchronous")
})
//creating file under the folder
fs.writeFile('asyncpra/read.txt','Hey ?Y',(err)=>{
    console.log("Today is Second Day of Durga Puja")
})

fs.appendFile('asyncpra/read.txt'," I'm proud myself",(err)=>{
    console.log('*_*')
})

fs.readFile('asyncpra/read.txt','utf-8',(err,data)=>{
    console.log(data)
})
//renaming the file
fs.rename('asyncpra/read.txt','asyncpra/readwri.txt',(err)=>{
    console.log('gullu pullu')
})
/* fs.unlink('asyncpra/readwri.txt',(err)=>{
    console.log('deleted')
}) */
fs.unlink('./asyncpra/readwri.txt', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File deleted successfully');
  });
/* //deleting the folder
fs.rmdir('./asyncpra',(err)=>{
    console.log('deleted the folder')
}) */