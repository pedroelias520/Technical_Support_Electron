
let pedido = function name() {};

pedido.prototype.addUser = function addUser(id, name, birthDay, level) {
    try {
        const userJson = {
            id: id,
            name: name,
            birthDay: birthDay,
            level: level,
        }
        const response = await db.collection("users").add(userJson);
        console.log(response)
    } catch (error) {
    }
}

pedido.prototype.addProduct = function addProduct(id, name, price, manufacter, description, qtd) {
    try {
        const productJson = {
            id: id,
            name: name,
            price: price,
            manufacter: manufacter,
            desscription: description,
            qtd: qtd
        }
        const response = await db.collection("users").add(productJson);
        console.log(response)
    } catch (error) {
    }
}

pedido.prototype.addServices = function addServices(id, price, name, type) {
    try {
        const serviceJson = {
            id: id,
            price: price,
            name: name,
            type: type,            
        }
        const response = await db.collection("services").add(serviceJson);
        console.log(response)
    } catch (error) {
    }
}


pedido.prototype.getUser = function getUser(id) {
    try {
        const userRef = db.collection("users").doc(id);
        const response = await userRef.get();
        console.log(response)
    } catch (error) {
        res.send(error)
    }
}


pedido.prototype.getAllUser = function getAllUser(id) {
    try {
        const userRef = db.collection("users");
        const response = await userRef.get();
        console.log(response)
    } catch (error) {
        res.send(error)
    }
}

pedido.prototype.updateUser = function updateUser(id, name, birthDay, level) {
    try {
        const userJson = {
            id: id,
            name: name,
            birthDay: birthDay,
            level: level,
        }
        const response = await db.collection("users").doc(id).update(userJson);
        console.log(response)
    } catch (error) {
    }
}

pedido.prototype.deleteUser = function deleteUser(id) {
    try {
        const userRef = await db.collection("users").doc(id).delete()
        console.log(response)
    } catch (error) {
        res.send(error)
    }
}


module.exports = pedido