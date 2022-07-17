const Router = require("electron-router")
const Controller =  require('./controller/controller')
let router = Router('MAIN')

router.post('create_user', (req, res)=>{Controller.addUser})
router.post('create_product', (req, res)=>{Controller.addProduct})



