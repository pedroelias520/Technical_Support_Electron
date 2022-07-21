const Router = require("electron-router")
const Controller =  require('./controller/controller')
let router = Router('MAIN')

router.post('createUser', (req, res)=>{Controller.addUser})
router.post('createProduct', (req, res)=>{Controller.addProduct})
router.post('createServices', (req, res)=>{Controller.addServices})
router.post('deleteUser', (req, res)=>{Controller.deleteUser})
router.post('getUser', (req, res)=>{Controller.getUser})
router.post('getAllUser', (req, res)=>{Controller.getAllUsers})
router.post('updateUser', (req, res)=>{Controller.updateUser})


