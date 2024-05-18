require('dotenv').config()
// console.log(process.env) 
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('JAI SHREE RAM')
})

app.get('/chant',(req,res)=>{
    res.send('HAR HAR MAHADEV')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login here</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>please subscribe</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})