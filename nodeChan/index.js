//To create new file 
const fs=require('fs')
//making new directory
//fs.mkdirSync('crud')
//added path were i want to create file
fs.writeFileSync('crud/bio.txt','Sasake,Naruto,Sakura')
fs.appendFileSync('crud/bio.txt',' Lets Catch up')
/* fs.writeFileSync('write.txt',"Hey Ya!")

//appending new data
fs.appendFileSync('write.txt',' Lets Catch up')
//renaming  */


fs.renameSync('crud/bio.txt','crud/mybio.txt')

//remove the file
//fs.unlinkSync('crud/mybio.txt')
//remove directory
fs.rmdirSync('crud');
