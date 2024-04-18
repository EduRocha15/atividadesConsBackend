const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const pessoasRouter = require('./router/pessoas')

app.use(pessoasRouter)

app.listen(port, ()=>{
	console.log(`API iniciada. Rodando na porta ${port}`)
})
