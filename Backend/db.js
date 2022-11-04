const mongoose = require ('mongoose');

const mongoURI = "mongodb://localhost:27017/"

const connectMongo = () => {
    mongoose.connect(mongoURI, ()=> {
        console.log("connecte to mongo succesul")
    })
}