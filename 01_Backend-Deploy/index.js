require('dotenv').config()
const express = require('express')
const app = express()

// const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => { 
  res.send("hehe from test")
 })

app.get('/login', (req, res) => { 
  res.send("<h1>login page is under const</h1>")
 })

app.listen(process.env.PORT, () => {
  console.log(`app listening on url http://localhost:${process.env.PORT}`)
})
