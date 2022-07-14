const express = require("express");
const app = express();

const admin = require("firebase-admin");
const credentials = require("./private/key.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

const db = admin.firestore();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})
