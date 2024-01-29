//All WILL BE ASYNCHRONOUS 
const fs=require("fs")
//here used callback function (when we pass an argument as in function i.e callback)
//create new file
fs.writeFile('read.txt',"Today m gonna do my best",(err)=>{
console.log("Today is Mahalaya")
});
//adding new data
fs.appendFile('read.txt'," I'm proud myself",(err)=>{
    console.log('*_*')
})
//Buffer data
fs.readFile('read.txt','utf-8',(err,res)=>{
    console.log(res)
})
//delete data
fs.unlink('read.txt', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File deleted successfully');
  });
  