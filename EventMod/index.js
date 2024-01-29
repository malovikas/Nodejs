const EventEmitter=require("events");
const event=new EventEmitter();
event.on('sayMyName',()=>{
    console.log('My name is Malovika')
})
event.emit("sayMyName")