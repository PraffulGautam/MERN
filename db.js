const mongoose = require('mongoose');

const db = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/testing-db");
        console.log("db connected successfully")  
    } catch (error) {
        console.log("db connection err", error);
    }
}

module.exports = db;