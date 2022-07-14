app.post('/create_user', async (req, res) =>{
    try{        
        console.log(req.body);
        const id = req.body.id;
        const   userJson = {
            id: req.body.id,
            name: req.body.name,
            birthDay: req.body.birthDay,
            level: req.body.level,
        }
        const response = await db.collection("users").add(userJson);
        res.send(response)
    }catch(error){
        res.send(error)
    }
})

app.post('/create_product', async (req, res) =>{
    try{        
        console.log(req.body);
        const id = req.body.id;
        const   userJson = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            manufacter: req.body.manufacter,
            description: req.body.description,
            qtd: req.body.qtd,
        }
        const response = await db.collection("products").add(userJson);
        res.send(response)
    }catch(error){
        res.send(error)
    }
})

app.post('/create_services', async (req, res) =>{
    try{        
        console.log(req.body);
        const id = req.body.id;
        const   userJson = {
            id: req.body.id,
            price: req.body.price,
            name: req.body.name,
            type: req.body.type,            
        }
        const response = await db.collection("services").add(userJson);
        res.send(response)
    }catch(error){
        res.send(error)
    }
})

app.get('/read/:id',async (req, res)=>{
    try{
        const userRef = db.collection("users").doc(req.params.id);
        const response = await userRef.get();
        res.send(response.data());
    }catch(error){
        res.send(error)
    }
})

app.get('/read',async (req, res)=>{
    try{
        const userRef = db.collection("users");
        const response = await userRef.get();
        res.send(response.data());
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
})