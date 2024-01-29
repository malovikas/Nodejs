const express=require("express");
const app=express();
const PORT=5000;

const sendMail=require('./controllers/sendMail')

app.get('/',(req,res)=>{
res.send('I am Julie');
});

app.get("/sendemail",sendMail)// routes

const start=async()=>{
try {
    app.listen(PORT,()=>{
        console.log(`Heyyyyy------>>>>> ${PORT}`)
    })
} catch (error) {
    
}
}
start()