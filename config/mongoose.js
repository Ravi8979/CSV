const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rygbu2407:D5zloqnKXtHCoxwX@cluster0.yxm897h.mongodb.net/');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;