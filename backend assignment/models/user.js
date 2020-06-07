const { readAllOrder } = require('../models/order')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/backend')
    .then(() => console.log("connected to MongoDB"))
    .catch((err) => console.log("not connected", err))

const userSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    name: { type: String, required: true },
    TotalOrders: { type: Number, default: 0 }
})

const userModel = mongoose.model('users', userSchema, 'users')

async function createUser(info) {
    const user = new userModel(info)
    try {
        const verify = await userModel.findOne({ userId: info.userId })
        if (verify) {
            throw err
        }
        var result = await user.save()
        return result
    }
    catch (err) {
        throw ("user already exists", err)
    }
}

async function readAllUser() {
    try {
        const user = await userModel.find()
        return user
    }
    catch (err) {
        throw err
    }
}

async function updateOrd(data, i) {
    try {
        console.log("******")
        // console.log(data)
        const abc = await userModel.findOne({ userId: data[i].userId })
        //    console.log(abc)
        abc.set({ TotalOrders: data[i].NoOfOrders })
        const res = await abc.save()
        return res
    }
    catch (err) {
        throw ("not updated", err)
    }
}



module.exports = { createUser, readAllUser, updateOrd }

