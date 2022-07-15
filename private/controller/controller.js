const { app } = require('firebase-admin')
const model = require('../model/model')

let db = new model()


app.post('/create_user', async (req, res) =>{
    try{        
                        
        db.addUser(req.body.id,req.body.name,req.body.birthDay,req.body.level)
        res.send(response)
    }catch(error){
        res.send(error)
    }
})

app.post('/create_product', async (req, res) =>{
    try{        
        db.addProduct(req.body.id, req.body.name, req.body.price, req.body.manufacter, req.body.description, req.body.qtd)
    }catch(error){
        res.send(error)
    }
})


app.post('/create_services', async (req, res) =>{
    try{        
        db.addServices(req.body.id,req.body.price, req.body.name, req.body.type)
    }catch(error){
        res.send(error)
    }
})

app.get('/read/:id',async (req, res)=>{
    try{
        db.getUser(req.id)
    }catch(error){
        res.send(error)
    }
})

app.get('/read',async (req, res)=>{
    try{
        db.getAllUser()
    }catch(error){
        res.send(error)
    }
})

app.post('/update', async(req, res)=>{
    try{
        const id=req.body.id;
        const newFirstName = "hello world";
        const userRef = await db.collection("users").doc(id).update({
            firstName: newFirstName
        });
        res.send(userRef);
    }catch(error){
        res.send(error)
    }
})

app.delete('/delete/:id', async(req, res)=>{
    try{
        const userRef = await db.collection("users").doc(req.params.id).delete()
        res.send(userRef);
    }catch(error){
        res.send(error)
    }
