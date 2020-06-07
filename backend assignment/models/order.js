const { readAllUser, updateOrd } = require('../models/user')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/backend')
    .then(() => console.log("connected to MongoDB"))
    .catch((err) => console.log("not connected", err))

const orderSchema = new mongoose.Schema({
    orderId: { type: Number, required: true },
    userId: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    date: { type: String, required: true }
})

const orderModel = mongoose.model('orders', orderSchema, 'orders')

async function createOrder(info) {
    const order = new orderModel(info)
    try {
        const verify = await orderModel.findOne({ orderId: info.orderId })
        if (verify) {
            throw err
        }
        var result = await order.save()
        return result
    }
    catch (err) {
        throw ("order id  already exists", err)
    }
}

async function readAllOrder() {
    try {
        const order = await orderModel.find()
        return order
    }
    catch (err) {
        throw err
    }
}

async function calculate() {
    try {
        var data = await readAllUser()
        finalResult = []
        for (let i = 0; i < data.length; i++) {
            const res = await orderModel.find({ userId: data[i].userId })
            var total = 0
            for (let j = 0; j < res.length; j++) {
                total = total + res[j].subtotal
            }
            var avg = total / (res.length)
            var userId = res[0].userId
            var name = data[i].name
            NoOfOrders = res.length
            var obj = { name, userId, avg, NoOfOrders }
            finalResult.push(obj)
            console.log(finalResult)

        }
        return finalResult
    }
    catch (e) {
        throw ("not working", e)
    }
}

async function updateOrders() {
    for (let i = 0; i < finalResult.length; i++) {
        updateOrd(finalResult, i)
    }
}

module.exports = { createOrder, readAllOrder, calculate, updateOrders }