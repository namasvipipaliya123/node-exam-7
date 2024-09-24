const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pipaliyanamasvi:namasvi123@node.bg2c4.mongodb.net/?retryWrites=true&w=majority&appName=node');
}

module.exports = connectDB;