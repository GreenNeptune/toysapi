const mongoose = require('mongoose');
const { config } = require("../config/secretData");

mongoose.connect(`mongodb+srv://${config.mongoUser}:${config.mongoPass}@cluster0.sybha.mongodb.net/TOYS_DB`, { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("mongo connect");
});

module.exports = db;