const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/carolsBookstore', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (error) => {
    if (error) {
        console.log('Error with MongoDBs connectivity')
    } else {
        console.log('Successful connection with MongoDB Server')
    }
})

