const { app } = require('firebase-admin')
const model = require('../model/model')

let db = new model()


exports.addUser = (req,res) => {
    try {
        db.addUser(req.body.id, req.body.name, req.body.birthDay, req.body.level)                        
    } catch (error) {
        res.send(error)
    }
}

exports.addProduct = (req, res) => {
    try {
        db.addProduct(req.body.id, req.body.name, req.body.price, req.body.manufacter, req.body.description, req.body.qtd)
    } catch (error) {
        res.send(error)
    }
}

exports.addServices =  (req, res) => {
    try {
        db.addServices(req.body.id, req.body.price, req.body.name, req.body.type)
    } catch (error) {
        res.send(error)
    }
}

exports.getUser = (req,res) => {
    try {
        db.getUser(req.id)
    } catch (error) {
        res.send(error)
    }
}

exports.getAllUsers = (req, res) => {
    try {
        db.getAllUser()
    } catch (error) {
        res.send(error)
    }
}

exports.updateUser = (req, res) => {
    try {
        db.updateUser(req.body.id, req.body.name, req.body.birthDay, req.body.level)
    } catch (error) {
        res.send(error)
    }
}

exports.deleteUser = (req, res)=> {
    try {
        db.deleteUser(req.body.id)        
    } catch (error) {
        res.send(error);
    }
}