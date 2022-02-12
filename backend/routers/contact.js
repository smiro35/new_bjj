const express = require('express')
const Contact = require('../models/contact')
const router = new express.Router()

router.get('/contact',(req,res) =>{
    res.send('contact1')
})

module.exports = router;