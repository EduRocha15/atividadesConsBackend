const express = require('express')
const router = express.Router()

module.exports = router

router.get('/pessoas', (req, res)=>{
	res.json("Ok")
})
