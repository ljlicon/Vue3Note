const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.end('这是一个app')
})
app.listen(80,()=>{
    console.log('running at http://127.0.0.1:80')
})