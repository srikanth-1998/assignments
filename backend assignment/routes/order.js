const express = require('express')
const routes = express.Router()
const { createOrder, readAllOrder, calculate } = require('../models/order')

routes.post('/createorder', (req, res) => {
    createOrder(req.body)
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch((err) => {
            res.send("order error", err)
        })
})

routes.get('/orders', (req, res) => {
    readAllOrder()
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch((e) => {
            res.send(e)
        })
})

routes.get('/calculate', (req, res) => {
    calculate()
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch((e) => {
            res.send("no", e)
        })
})
module.exports = routes