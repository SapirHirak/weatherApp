const express = require('express')
const router = express.Router()

//const Expense  = require('../model/Expense')
const moment = require('moment')
const Request  =require('Request')

// router.get('/expenses', function (req, res) {
//    Expense.find({}).sort({ date: -1 }).exec(function (err, response) {
//        res.send(response)
//    })
// })

// router.post('/new', function (req, res) {
//     console.log('wo')
//     let newData = req.body
//     newData.date ? newData.date.moment().format('LLLL') : newData.date=moment().format('LLLL')
//     let newEx = new Expense(newData)
//     newEx.save()
//     res.send('success '+ newEx)
// })

module.exports = router