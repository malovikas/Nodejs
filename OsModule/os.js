//os module 
const os=require('os')
console.log(os.arch())//for how many bit architecture 
console.log(`${os.freemem()/1024/1024/1024}`) // free memory//convert into GB