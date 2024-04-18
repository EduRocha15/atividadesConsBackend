const express = require('express')
const app = express()
const port = 3000
const routerCarros = require("./router/carros")

app.use(express.json())

app.use (routerCarros)

app.listen(port, ()=>{
  console.log("API iniciada")
})
