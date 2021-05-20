const mongoose = require('mongoose');

const {Schema} = mongoose;

const authorSchema = new Schema ({
    firstName: {
        type: String,
        required: [true, 'A first name is required.'],
        minLength: [1, 'The author\'s first name must contain 1 or more characters.']
    },
    lastName: {
        type: String,
        required: [true, 'A last name is required.'],
        minLength: [1, 'The author\'s last name must contain 1 or more characters.']
    },
    birthYear: {
        type: String,
        required: [true, 'The author\'s birth year is required.'],
        min: [4, '4 digit birth year is required.']
    },
    bio: {
        type: String,
        required: [true, 'A short biography is required.'],
        minLength: [20, 'Please enter a biography at least 20 characters.']
    }
});

const Author = mongoose.model('Author', authorSchema);

// // Sample entry
// const authorSample = new Author({firstName:'Khaled', lastName:'Hosseini', birthYear:1965, bio:"Khaled Hosseini is an Afghan-American novelist, physician, activist, humanitarian, and UNHCR goodwill ambassador."});

// authorSample.save(); 

module.exports = Author;