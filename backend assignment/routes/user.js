const express = require('express')
const routes = express.Router()
const { updateOrders } = require('../models/order')
const { createUser, readAllUser, updateTotalOrders } = require('../models/user')

routes.post('/createuser', (req, res) => {
    createUser(req.body)
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch((err) => {
            res.send("user error", err)
        })
})

routes.get('/users', (req, res) => {
    readAllUser()
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch((e) => {
            res.send(e)
        })
})

routes.put('/totalorders', (req, res) => {
    updateOrders()
        .then((result) => {
            res.send(result)
        })
        .catch((e) => {
            res.send(e)
        })
})
module.exports = routes