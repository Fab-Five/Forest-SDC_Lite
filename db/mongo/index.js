const mongoose = require('mongoose');
mongoose.connect('mongodb://ec2-52-53-169-209.us-west-1.compute.amazonaws.com:27017/SDChub', {useNewUrlParser: true});
// mongoose.connect('mongodb://localhost/SDChub', {useNewUrlParser: true});

// useCreateIndex: true,
// useFindAndModify: false

const db = mongoose.connection;
db.once('open', () => console.log("Mongo running"));

module.exports = db;