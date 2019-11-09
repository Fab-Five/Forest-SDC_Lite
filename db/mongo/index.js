const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SDChub', {useNewUrlParser: true});
// useCreateIndex: true,
// useFindAndModify: false

const db = mongoose.connection;
db.once('open', () => console.log("Mongo running"));

module.exports = db;